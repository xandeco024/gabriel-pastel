'use client';

import { cn } from '@/lib/utils';
import { gluten } from '@/assets/fonts';
import { ButtonHTMLAttributes } from 'react';

type ButtonSize = 'lg' | 'xl' | 'xl2';

interface OrderNowBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: ButtonSize;
    borderColor?: string;
    textColor?: string;
    hoverBgColor?: string;
    hoverTextColor?: string;
    className?: string;
}

const sizeStyles: Record<ButtonSize, string> = {
    lg: 'text-lg px-2.5 py-[0.75]',
    xl: 'text-xl px-4 py-1',
    xl2: 'text-2xl px-6 py-2 border-4',
};

export default function OrderNowBtn({
    size = 'xl',
    borderColor = 'border-vegGreen-light',
    textColor = 'text-vegGreen-light',
    hoverBgColor = 'hover:bg-vegYellow hover:border-vegYellow',
    hoverTextColor = 'hover:text-background',
    className,
    ...props
}: OrderNowBtnProps) {
    return (
        <button
            className={cn(
                gluten.className,
                'border-[3px] rounded-full',
                'transition-all duration-200',
                'transform hover:scale-105',
                sizeStyles[size],
                borderColor,
                textColor,
                hoverBgColor,
                hoverTextColor,
                className
            )}
            {...props}
        >
            PEÇA JÁ!
        </button>
    );
} 