import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils.js';

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;

const SheetPortal = ({ className, children, ...props }) => (
  <SheetPrimitive.Portal className={className} {...props}>
    {children}
  </SheetPrimitive.Portal>
);

const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity data-[state=closed]:opacity-0 data-[state=open]:opacity-100',
      className,
    )}
    {...props}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sideStyles = {
  top: 'inset-x-0 top-0 border-b translate-y-[-100%] data-[state=open]:translate-y-0',
  bottom: 'inset-x-0 bottom-0 border-t translate-y-full data-[state=open]:translate-y-0',
  left: 'inset-y-0 left-0 h-full w-80 max-w-[90vw] border-r translate-x-[-100%] data-[state=open]:translate-x-0',
  right:
    'inset-y-0 right-0 h-full w-80 max-w-[90vw] border-l translate-x-full data-[state=open]:translate-x-0',
};

const SheetContent = React.forwardRef(({ side = 'right', className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(
        'fixed z-50 grid gap-4 bg-background p-6 shadow-lg transition-transform duration-200 focus-visible:outline-none',
        sideStyles[side],
        className,
      )}
      {...props}
    >
      {children}
      <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
        <X className="h-4 w-4" aria-hidden />
        <span className="sr-only">Close</span>
      </SheetClose>
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({ className, ...props }) => (
  <div className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)} {...props} />
);

const SheetFooter = ({ className, ...props }) => (
  <div className={cn('flex flex-col gap-2 sm:flex-row sm:justify-end', className)} {...props} />
);

const SheetTitle = React.forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold leading-none tracking-tight', className)}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
