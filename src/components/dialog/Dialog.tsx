import React, {useRef} from "react";
import {cva, VariantProps} from "class-variance-authority";
import clsx from "clsx";

const dialogStyles = cva(
    "absolute w-full top-0 sm:top-[10%] left-[50%] translate-x-[-50%] p-4 bg-white rounded-none sm:rounded-md shadow-md",
    {
        variants: {
            size: {
                xs: "max-w-[444px]",
                sm: "max-w-[600px]",
                md: "max-w-[900px]",
                lg: "max-w-[1200px]",
                xl: "max-w-[1536px]",
            },
        },
        defaultVariants: {},
    }
);

interface DialogProps
    extends React.HTMLAttributes<HTMLElement>,
        VariantProps<typeof dialogStyles> {
    open: boolean;
    onClose: () => void;
}

export const Dialog: React.FC<DialogProps> = ({
                                                  className,
                                                  open,
                                                  onClose,
                                                  size,
                                                  ...props
                                              }) => {
    const classes = dialogStyles({size});

    const dialogRef = useRef<HTMLDivElement>(null);

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
            onClose();
        }
    };

    if (!open || !onClose) return null;

    return (
        <div className="fixed z-[1000] inset-0">
            <div
                className="opacity-[1] fixed flex items-center justify-center right-0 bottom-0 top-0 left-0 z-[-1] bg-[#00000080]"
                onClick={handleOverlayClick}/>
            <div ref={dialogRef} className={clsx(classes, className)} {...props} />
        </div>
    )
};