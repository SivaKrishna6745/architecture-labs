import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type Size = 'sm' | 'md' | 'lg';
type Weight = 'normal' | 'bold';
type TextProps<C extends ElementType> = {
    as?: C;
    children: ReactNode;
    size?: Size;
    weight?: Weight;
    className?: string;
} & ComponentPropsWithoutRef<C>;

const sizeClasses: Record<Size, string> = {
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
};

const weightClasses: Record<Weight, string> = {
    normal: 'font-normal',
    bold: 'font-bold',
};

const Text = <C extends ElementType = 'span'>({
    as,
    children,
    size = 'sm',
    weight = 'normal',
    className = '',
    ...rest
}: TextProps<C>) => {
    const componentClass = `${sizeClasses[size]} ${weightClasses[weight]} ${className}`;
    const Component = as || 'span';

    return (
        <Component {...rest} className={componentClass}>
            {children}
        </Component>
    );
};

export default Text;
