import { readFileSync, writeFileSync, copyFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const base = JSON.parse(readFileSync(resolve(root, 'tokens/base.json'), 'utf-8'));
const dark = JSON.parse(readFileSync(resolve(root, 'tokens/dark.json'), 'utf-8'));
const light = JSON.parse(readFileSync(resolve(root, 'tokens/light.json'), 'utf-8'));

mkdirSync(resolve(root, 'dist'), { recursive: true });

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function flatten(obj, prefix = '') {
  const entries = [];
  for (const [key, val] of Object.entries(obj)) {
    if (key.startsWith('$')) continue;
    const path = prefix ? `${prefix}-${key}` : key;
    if (val.$value !== undefined) {
      entries.push([`--al-${path}`, val.$value]);
    } else {
      entries.push(...flatten(val, path));
    }
  }
  return entries;
}

function toCssBlock(entries, indent = '  ') {
  return entries.map(([name, value]) => `${indent}${name}: ${value};`).join('\n');
}

// ---------------------------------------------------------------------------
// Build tokens.css
// ---------------------------------------------------------------------------

const baseEntries = flatten(base);
const darkEntries = flatten(dark);
const lightEntries = flatten(light);

const tokensCss = `/* ==========================================================================
   Ash Lumen Design Tokens (generated — do not edit)
   Source: tokens/*.json  |  https://github.com/emerson-d-lopes/ash-lumen
   ========================================================================== */

:root {
${toCssBlock(baseEntries)}
}

@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
${toCssBlock(darkEntries, '    ')}
  }
}

@media (prefers-color-scheme: light) {
  :root {
    color-scheme: light;
${toCssBlock(lightEntries, '    ')}
  }
}

[data-theme="dark"] {
  color-scheme: dark;
${toCssBlock(darkEntries)}
}

[data-theme="light"] {
  color-scheme: light;
${toCssBlock(lightEntries)}
}
`;

writeFileSync(resolve(root, 'dist/tokens.css'), tokensCss);

// ---------------------------------------------------------------------------
// Build index.css (tokens + components combined)
// ---------------------------------------------------------------------------

const indexCss = `/* ==========================================================================
   Ash Lumen Design System
   https://github.com/emerson-d-lopes/ash-lumen
   ========================================================================== */

@import "./tokens.css";
@import "./components.css";
`;

writeFileSync(resolve(root, 'dist/index.css'), indexCss);

// ---------------------------------------------------------------------------
// Build tokens.js — typed JS/TS export of all token values
// ---------------------------------------------------------------------------

function flattenJs(obj, prefix = '') {
  const result = {};
  for (const [key, val] of Object.entries(obj)) {
    if (key.startsWith('$')) continue;
    const path = prefix ? `${prefix}-${key}` : key;
    if (val.$value !== undefined) {
      result[path] = val.$value;
    } else {
      Object.assign(result, flattenJs(val, path));
    }
  }
  return result;
}

const tokens = {
  base: flattenJs(base),
  dark: flattenJs(dark),
  light: flattenJs(light),
};

const tokensJs = `// Ash Lumen Design Tokens (generated — do not edit)
// Source: tokens/*.json  |  https://github.com/emerson-d-lopes/ash-lumen

/** Theme-independent tokens (typography, spacing, radius, transitions) */
export const base = ${JSON.stringify(tokens.base, null, 2)};

/** Dark theme tokens (colors, shadows) */
export const dark = ${JSON.stringify(tokens.dark, null, 2)};

/** Light theme tokens (colors, shadows) */
export const light = ${JSON.stringify(tokens.light, null, 2)};

/** All tokens grouped by theme */
const tokens = { base, dark, light };
export default tokens;
`;

writeFileSync(resolve(root, 'dist/tokens.js'), tokensJs);

// ---------------------------------------------------------------------------
// Copy src → dist (components.css, tailwind.css)
// ---------------------------------------------------------------------------

copyFileSync(resolve(root, 'src/components.css'), resolve(root, 'dist/components.css'));
copyFileSync(resolve(root, 'src/tailwind.css'), resolve(root, 'dist/tailwind.css'));

const count = baseEntries.length + darkEntries.length + lightEntries.length;
console.log(`✓ ${count} token declarations → dist/tokens.css`);
console.log(`✓ dist/tokens.js`);
console.log(`✓ dist/index.css`);
console.log(`✓ dist/components.css`);
console.log(`✓ dist/tailwind.css`);
