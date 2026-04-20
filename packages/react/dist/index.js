import * as React3 from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as DialogPrimitive from '@radix-ui/react-dialog';

// src/components/button.tsx
function cn(...inputs) {
  return clsx(inputs);
}
var buttonVariants = cva("al-btn", {
  variants: {
    variant: {
      primary: "al-btn-primary",
      secondary: "al-btn-secondary",
      ghost: "al-btn-ghost",
      danger: "al-btn-danger"
    },
    size: {
      sm: "al-btn-sm",
      md: "",
      lg: "al-btn-lg"
    }
  },
  defaultVariants: {
    variant: "secondary",
    size: "md"
  }
});
var Button = React3.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        ref,
        className: cn(buttonVariants({ variant, size, className })),
        ...props
      }
    );
  }
);
Button.displayName = "Button";
var badgeVariants = cva("al-badge", {
  variants: {
    variant: {
      default: "",
      error: "al-badge-error",
      warning: "al-badge-warning",
      success: "al-badge-success",
      info: "al-badge-info"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx("span", { className: cn(badgeVariants({ variant, className })), ...props });
}
var alertVariants = cva("al-alert", {
  variants: {
    variant: {
      info: "al-alert-info",
      success: "al-alert-success",
      warning: "al-alert-warning",
      error: "al-alert-error"
    }
  },
  defaultVariants: {
    variant: "info"
  }
});
var Alert = React3.forwardRef(
  ({ className, variant, ...props }, ref) => /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      role: "alert",
      className: cn(alertVariants({ variant, className })),
      ...props
    }
  )
);
Alert.displayName = "Alert";
var AlertTitle = React3.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("h5", { ref, className: cn("al-alert-title", className), ...props })
);
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React3.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("p", { ref, className: cn("al-alert-description", className), ...props })
);
AlertDescription.displayName = "AlertDescription";
var cardVariants = cva("al-card", {
  variants: {
    variant: {
      default: "",
      raised: "al-card-raised",
      interactive: "al-card-interactive"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var Card = React3.forwardRef(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        ref,
        className: cn(cardVariants({ variant, className })),
        ...props
      }
    );
  }
);
Card.displayName = "Card";
var CardHeader = React3.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("al-card-header", className), ...props })
);
CardHeader.displayName = "CardHeader";
var CardTitle = React3.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("h3", { ref, className: cn("al-card-title", className), ...props })
);
CardTitle.displayName = "CardTitle";
var CardDescription = React3.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("p", { ref, className: cn("al-card-description", className), ...props })
);
CardDescription.displayName = "CardDescription";
var CardContent = React3.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("al-card-content", className), ...props })
);
CardContent.displayName = "CardContent";
var CardFooter = React3.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("al-card-footer", className), ...props })
);
CardFooter.displayName = "CardFooter";
var Input = React3.forwardRef(
  ({ className, type, ...props }, ref) => /* @__PURE__ */ jsx(
    "input",
    {
      ref,
      type,
      className: cn("al-input", className),
      ...props
    }
  )
);
Input.displayName = "Input";
var Textarea = React3.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "textarea",
    {
      ref,
      className: cn("al-input al-textarea", className),
      ...props
    }
  )
);
Textarea.displayName = "Textarea";
var Label = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  LabelPrimitive.Root,
  {
    ref,
    className: cn("al-label", className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;
var Separator = React3.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx(
  SeparatorPrimitive.Root,
  {
    ref,
    decorative,
    orientation,
    className: cn(
      "al-separator",
      orientation === "vertical" ? "al-separator-vertical" : "al-separator-horizontal",
      className
    ),
    ...props
  }
));
Separator.displayName = SeparatorPrimitive.Root.displayName;
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogClose = DialogPrimitive.Close;
var DialogOverlay = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn("al-dialog-overlay", className),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React3.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsx(
    DialogPrimitive.Content,
    {
      ref,
      className: cn("al-dialog-content", className),
      ...props,
      children
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("al-dialog-header", className), ...props });
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("al-dialog-footer", className), ...props });
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn("al-dialog-title", className),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("al-dialog-description", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export { Alert, AlertDescription, AlertTitle, Badge, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, Input, Label, Separator, Textarea, badgeVariants, buttonVariants };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map