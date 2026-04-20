'use strict';

var React3 = require('react');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var clsx = require('clsx');
var jsxRuntime = require('react/jsx-runtime');
var LabelPrimitive = require('@radix-ui/react-label');
var SeparatorPrimitive = require('@radix-ui/react-separator');
var DialogPrimitive = require('@radix-ui/react-dialog');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React3__namespace = /*#__PURE__*/_interopNamespace(React3);
var LabelPrimitive__namespace = /*#__PURE__*/_interopNamespace(LabelPrimitive);
var SeparatorPrimitive__namespace = /*#__PURE__*/_interopNamespace(SeparatorPrimitive);
var DialogPrimitive__namespace = /*#__PURE__*/_interopNamespace(DialogPrimitive);

// src/components/button.tsx
function cn(...inputs) {
  return clsx.clsx(inputs);
}
var buttonVariants = classVarianceAuthority.cva("al-btn", {
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
var Button = React3__namespace.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? reactSlot.Slot : "button";
    return /* @__PURE__ */ jsxRuntime.jsx(
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
var badgeVariants = classVarianceAuthority.cva("al-badge", {
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
  return /* @__PURE__ */ jsxRuntime.jsx("span", { className: cn(badgeVariants({ variant, className })), ...props });
}
var alertVariants = classVarianceAuthority.cva("al-alert", {
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
var Alert = React3__namespace.forwardRef(
  ({ className, variant, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var AlertTitle = React3__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("h5", { ref, className: cn("al-alert-title", className), ...props })
);
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React3__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("p", { ref, className: cn("al-alert-description", className), ...props })
);
AlertDescription.displayName = "AlertDescription";
var cardVariants = classVarianceAuthority.cva("al-card", {
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
var Card = React3__namespace.forwardRef(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? reactSlot.Slot : "div";
    return /* @__PURE__ */ jsxRuntime.jsx(
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
var CardHeader = React3__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("al-card-header", className), ...props })
);
CardHeader.displayName = "CardHeader";
var CardTitle = React3__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("h3", { ref, className: cn("al-card-title", className), ...props })
);
CardTitle.displayName = "CardTitle";
var CardDescription = React3__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("p", { ref, className: cn("al-card-description", className), ...props })
);
CardDescription.displayName = "CardDescription";
var CardContent = React3__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("al-card-content", className), ...props })
);
CardContent.displayName = "CardContent";
var CardFooter = React3__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx("div", { ref, className: cn("al-card-footer", className), ...props })
);
CardFooter.displayName = "CardFooter";
var Input = React3__namespace.forwardRef(
  ({ className, type, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
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
var Textarea = React3__namespace.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "textarea",
    {
      ref,
      className: cn("al-input al-textarea", className),
      ...props
    }
  )
);
Textarea.displayName = "Textarea";
var Label = React3__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  LabelPrimitive__namespace.Root,
  {
    ref,
    className: cn("al-label", className),
    ...props
  }
));
Label.displayName = LabelPrimitive__namespace.Root.displayName;
var Separator = React3__namespace.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  SeparatorPrimitive__namespace.Root,
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
Separator.displayName = SeparatorPrimitive__namespace.Root.displayName;
var Dialog = DialogPrimitive__namespace.Root;
var DialogTrigger = DialogPrimitive__namespace.Trigger;
var DialogPortal = DialogPrimitive__namespace.Portal;
var DialogClose = DialogPrimitive__namespace.Close;
var DialogOverlay = React3__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DialogPrimitive__namespace.Overlay,
  {
    ref,
    className: cn("al-dialog-overlay", className),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive__namespace.Overlay.displayName;
var DialogContent = React3__namespace.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntime.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntime.jsx(
    DialogPrimitive__namespace.Content,
    {
      ref,
      className: cn("al-dialog-content", className),
      ...props,
      children
    }
  )
] }));
DialogContent.displayName = DialogPrimitive__namespace.Content.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("al-dialog-header", className), ...props });
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("al-dialog-footer", className), ...props });
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React3__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DialogPrimitive__namespace.Title,
  {
    ref,
    className: cn("al-dialog-title", className),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive__namespace.Title.displayName;
var DialogDescription = React3__namespace.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  DialogPrimitive__namespace.Description,
  {
    ref,
    className: cn("al-dialog-description", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive__namespace.Description.displayName;

exports.Alert = Alert;
exports.AlertDescription = AlertDescription;
exports.AlertTitle = AlertTitle;
exports.Badge = Badge;
exports.Button = Button;
exports.Card = Card;
exports.CardContent = CardContent;
exports.CardDescription = CardDescription;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardTitle = CardTitle;
exports.Dialog = Dialog;
exports.DialogClose = DialogClose;
exports.DialogContent = DialogContent;
exports.DialogDescription = DialogDescription;
exports.DialogFooter = DialogFooter;
exports.DialogHeader = DialogHeader;
exports.DialogOverlay = DialogOverlay;
exports.DialogPortal = DialogPortal;
exports.DialogTitle = DialogTitle;
exports.DialogTrigger = DialogTrigger;
exports.Input = Input;
exports.Label = Label;
exports.Separator = Separator;
exports.Textarea = Textarea;
exports.badgeVariants = badgeVariants;
exports.buttonVariants = buttonVariants;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map