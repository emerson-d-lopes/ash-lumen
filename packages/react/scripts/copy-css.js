import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const stylesDir = resolve(root, 'src/styles')

mkdirSync(resolve(root, 'dist'), { recursive: true })

const files = [
  'button.css',
  'badge.css',
  'alert.css',
  'card.css',
  'input.css',
  'separator.css',
  'dialog.css',
]

const header = `/* ==========================================================================
   @ash-lumen/react — Component Styles (generated — do not edit)
   Requires ash-lumen (CSS tokens) to be imported first.

   Usage:
     import 'ash-lumen'
     import '@ash-lumen/react/styles'
   ========================================================================== */\n\n`

const body = files
  .map(f => readFileSync(resolve(stylesDir, f), 'utf-8').trim())
  .join('\n\n')

writeFileSync(resolve(root, 'dist/styles.css'), header + body + '\n')
console.log(`✓ dist/styles.css (${files.length} files bundled)`)
