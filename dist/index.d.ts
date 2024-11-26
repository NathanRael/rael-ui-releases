import { ButtonHTMLAttributes } from 'react';
import { ChangeEventHandler } from 'react';
import { ClassValue } from 'clsx';
import { Context } from 'react';
import { default as default_2 } from 'react';
import { Dispatch } from 'react';
import { FormEvent } from 'react';
import { InputHTMLAttributes } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { PropsWithChildren } from 'react';
import { ReactPortal } from 'react';
import { SetStateAction } from 'react';
import { TextareaHTMLAttributes } from 'react';

export declare const AutoComplete: {
    ({ onChange, variant, size, radius, block, className, children, name, }: AutoCompleteInputProps): JSX_2.Element;
    Trigger: ({ placeholder, className, leftContent, rightContent }: AutoCompleteTriggerProps) => JSX_2.Element;
    GroupContainer: ({ children, className }: AutoCompleteGroupContainerProps) => false | JSX_2.Element;
    Group: ({ children, className }: AutoCompleteGroupProps) => JSX_2.Element;
    GroupTitle: ({ children, className }: AutoCompleteGroupTitleProps) => JSX_2.Element;
    Item: ({ children, value, className }: AutoCompleteItemProps) => JSX_2.Element | undefined;
};

export declare const AutoCompleteGroup: ({ children, className }: AutoCompleteGroupProps) => JSX_2.Element;

export declare const AutoCompleteGroupContainer: ({ children, className }: AutoCompleteGroupContainerProps) => false | JSX_2.Element;

declare type AutoCompleteGroupContainerProps = Required<PropsWithChildren> & {
    className?: string;
};

declare type AutoCompleteGroupProps = Required<PropsWithChildren> & {
    className?: string;
};

export declare const AutoCompleteGroupTitle: ({ children, className }: AutoCompleteGroupTitleProps) => JSX_2.Element;

declare type AutoCompleteGroupTitleProps = Required<PropsWithChildren> & {
    className?: string;
};

declare type AutoCompleteInputProps = Required<PropsWithChildren> & {
    onChange?: ({ target: { name, value } }: {
        target: {
            name: string;
            value?: unknown;
            checked?: boolean;
        };
    }) => void;
    placeholder?: string;
    variant?: Variant;
    size?: Size;
    radius?: Radius;
    block?: boolean;
    className?: string;
    name: string;
};

export declare const AutoCompleteItem: ({ children, value, className }: AutoCompleteItemProps) => JSX_2.Element | undefined;

declare type AutoCompleteItemProps = Required<PropsWithChildren> & {
    value: string;
    onClick?: (value: string) => void;
    className?: string;
};

export declare const AutoCompleteTrigger: ({ placeholder, className, leftContent, rightContent }: AutoCompleteTriggerProps) => JSX_2.Element;

declare type AutoCompleteTriggerProps = {
    className?: string;
    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;
    placeholder?: string;
};

export declare const Avatar: {
    ({ children, className, size, radius }: AvatarProps): JSX_2.Element;
    Image: ({ alt, src, className }: AvatarImageProps) => false | JSX_2.Element;
    Fallback: ({ children, className }: AvatarFallbackProps) => false | JSX_2.Element;
};

export declare const AvatarFallback: ({ children, className }: AvatarFallbackProps) => false | JSX_2.Element;

declare type AvatarFallbackProps = PropsWithChildren & {
    className?: string;
};

export declare const AvatarImage: ({ alt, src, className }: AvatarImageProps) => false | JSX_2.Element;

declare type AvatarImageProps = {
    src: string;
    alt: string;
    className?: string;
};

declare type AvatarProps = Required<PropsWithChildren> & {
    className?: string;
    size?: Size;
    radius?: Radius;
};

export declare const Badge: ({ children, className, variant, size }: BadgeProps) => JSX_2.Element;

declare type BadgeProps = PropsWithChildren & {
    variant?: Variant;
    size?: Exclude<Size, 'lg'>;
    radius?: Radius;
    className?: string;
};

export declare const Button: ({ variant, size, radius, loading, disabled, className, block, children, onClick, ...props }: ButtonProps) => JSX_2.Element;

declare type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: Size;
    radius?: Radius;
    block?: boolean;
    loading?: boolean;
    disabled?: boolean;
};

declare type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

export declare const Card: ({ children, className, variant, radius }: CardProps) => JSX_2.Element;

export declare const CardDescription: ({ children, className }: ClassNameAndChildren) => JSX_2.Element;

declare type CardProps = Required<PropsWithChildren> & {
    variant?: Variant;
    radius?: Radius;
    className?: string;
};

export declare const CardSection: ({ children, className, rFor }: CardSectionProps) => JSX_2.Element;

declare type CardSectionProps = ClassNameAndChildren & {
    rFor?: "meta" | "content";
};

export declare const CardTitle: ({ children, className }: ClassNameAndChildren) => JSX_2.Element;

export declare const Checkbox: {
    ({ children, checked, disabled, id, name, className, onChange, radius, size, variant, }: CheckboxProps): JSX_2.Element;
    Label: ({ children, className }: CheckboxLabelProps) => JSX_2.Element;
};

export declare const CheckboxLabel: ({ children, className }: CheckboxLabelProps) => JSX_2.Element;

declare type CheckboxLabelProps = Required<PropsWithChildren> & {
    checkboxId?: string;
    disabled?: boolean;
    className?: string;
};

declare type CheckboxProps = PropsWithChildren & {
    checked?: boolean;
    disabled?: boolean;
    id?: string;
    name?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    className?: string;
    radius?: Radius;
    variant?: Variant;
    size?: Exclude<Size, 'lg'>;
};

declare type ClassNameAndChildren = Required<PropsWithChildren> & {
    className?: string;
};

export declare const cn: (...inputs: ClassValue[]) => string;

export declare const ComponentStyleContext: Context<ComponentStyleContext_2 | undefined>;

declare type ComponentStyleContext_2 = {
    cVariant?: 'fill' | 'outline';
    cSize?: 'sm' | 'md' | 'lg' | 'xl';
};

declare const ComponentStyleContext: Context<ComponentStyleContext_2 | undefined>;

declare type ControlProps = {
    input: {
        value: string;
        name: string;
        onChange: (e: default_2.ChangeEvent<HTMLInputElement>) => void;
    };
    select: {
        name: string;
        onChange: FormChangeEvent;
    };
    checkbox: {
        name: string;
        onChange: FormChangeEvent;
        checked: boolean;
    };
    radio: {
        name: string;
        onChange: FormChangeEvent;
        defaultValue: string;
    };
};

declare type ControlType = 'input' | 'select' | 'checkbox' | 'radio';

export declare const Form: ({ children, className, onSubmit, form }: FormProps) => JSX_2.Element;

declare type FormChangeEvent = ({ target: { name, value } }: {
    target: {
        name: string;
        value?: unknown;
        checked?: boolean;
    };
}) => void;

export declare const FormControl: <T extends ControlType>({ name, render, type }: FormControlProps<T>) => JSX.Element;

declare type FormControlProps<T extends ControlType> = {
    name: string;
    className?: string;
    errorMessage?: string;
    render: (props: ControlProps[T]) => JSX.Element;
    type: T;
};

export declare const FormDescription: ({ className, children }: FormDescriptionProps) => JSX_2.Element;

declare type FormDescriptionProps = Required<PropsWithChildren> & {
    className?: string;
};

export declare const FormItem: ({ className, children }: FormItemProps) => JSX_2.Element;

declare type FormItemProps = Required<PropsWithChildren> & {
    className?: string;
};

export declare const FormLabel: ({ className, children }: FormLabelProps) => JSX_2.Element;

declare type FormLabelProps = Required<PropsWithChildren> & {
    className?: string;
};

export declare const FormMessage: <T>({ name, className }: FormMessageProps<T>) => any;

declare type FormMessageProps<T> = {
    className?: string;
    name: keyof T;
};

declare type FormProps = Required<PropsWithChildren> & {
    className?: string;
    onSubmit: () => Promise<void>;
    form: UseFormReturnType;
};

declare interface FormProps_2<T> {
    defaultValue?: T;
    validations: ValidationRules<T>[];
}

export declare const Icon: ({ variant, size, radius, loading, disabled, className, children, ...props }: IconProps) => JSX_2.Element;

declare type IconProps = ButtonHTMLAttributes<HTMLButtonElement> & Required<PropsWithChildren> & {
    variant?: ButtonVariant;
    size?: Size;
    radius?: Radius;
    block?: boolean;
    loading?: boolean;
    disabled?: boolean;
};

export declare const PasswordInput: ({ variant, size, radius, block, className, showIcon, leftContent, rightContent, ...props }: PasswordInputProps) => JSX_2.Element;

declare type PasswordInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
    variant?: Variant;
    size?: Size;
    radius?: Radius;
    block?: boolean;
    showIcon?: boolean;
    className?: string;
    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;
};

export declare const Progress: ({ value, className, }: ProgressProps) => JSX_2.Element;

declare type ProgressProps = {
    value: number;
    variant?: Variant;
    size?: Size;
    radius?: Radius;
    className?: string;
};

export declare const RadioGroup: {
    (props: RadioGroupProps): JSX_2.Element;
    Item: ({ value, label, className }: RadioItemProps) => JSX_2.Element;
};

declare type RadioGroupProps = {
    children: React.ReactNode;
    defaultValue: string;
    onChange?: ({ target: { name, value } }: {
        target: {
            name: string;
            value: string;
        };
    }) => void;
    disabled?: boolean;
    name?: string;
    className?: string;
    variant?: Variant;
};

export declare const RadioItem: ({ value, label, className }: RadioItemProps) => JSX_2.Element;

declare type RadioItemProps = {
    value: string;
    label?: React.ReactNode;
    className?: string;
};

declare type Radius = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | 'full';

export declare const Select: ({ children, onChange, variant, size, radius, block, className, name, defaultValue, }: SelectInputDefaultProps) => JSX_2.Element;

export declare const SelectGroup: ({ children, className }: SelectGroupProps) => JSX_2.Element;

export declare const SelectGroupContainer: ({ className, children }: SelectGroupContainerProps) => false | JSX_2.Element;

declare type SelectGroupContainerProps = Required<PropsWithChildren> & {
    className?: string;
};

declare type SelectGroupProps = Required<PropsWithChildren> & {
    className?: string;
};

export declare const SelectGroupTitle: ({ children, className }: SelectGroupTitleProps) => JSX_2.Element;

declare type SelectGroupTitleProps = Required<PropsWithChildren> & {
    className?: string;
};

declare type SelectHeaderProps = Required<PropsWithChildren> & {
    className?: string;
};

declare type SelectInputDefaultProps = Required<PropsWithChildren> & {
    onChange?: ({ target: { name, value } }: {
        target: {
            name: string;
            value?: unknown;
            checked?: boolean;
        };
    }) => void;
    placeholder?: string;
    variant?: Variant;
    size?: Size;
    radius?: Radius;
    block?: boolean;
    className?: string;
    name?: string;
    defaultValue?: string;
};

export declare const SelectItem: ({ children, value, className }: SelectItemProps) => JSX_2.Element;

declare type SelectItemProps = Required<PropsWithChildren> & {
    className?: string;
    value: string;
};

export declare const SelectLabel: ({ placeholder, className }: SelectLabelProps) => JSX_2.Element;

declare type SelectLabelProps = {
    className?: string;
    placeholder: string;
};

export declare const SelectTrigger: ({ children, className }: SelectHeaderProps) => JSX_2.Element;

declare type Size = "sm" | "md" | "lg";

export declare const Stack: ({ children, className, direction, gap, align, onClick }: StackProps) => JSX_2.Element;

declare type StackProps = PropsWithChildren & {
    className?: string;
    direction?: "horizontal" | "vertical";
    align?: 'start' | 'center' | 'end';
    gap?: number | string;
    onClick?: () => void;
};

export declare const Switch: ({ children, checked, disabled, id, className, onChange, variant, }: SwitchProps) => JSX_2.Element;

export declare const SwitchLabel: ({ children, className }: SwitchLabelProps) => JSX_2.Element;

declare type SwitchLabelProps = Required<PropsWithChildren> & {
    checkboxId?: string;
    disabled?: boolean;
    className?: string;
};

declare type SwitchProps = PropsWithChildren & {
    checked?: boolean;
    disabled?: boolean;
    id?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    className?: string;
    variant?: Variant;
};

export declare const Textarea: ({ variant, radius, block, className, size, leftContent, rightContent, inputClassName, ...props }: TextAreaProps) => JSX_2.Element;

declare type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    variant?: Variant;
    radius?: Radius;
    size?: Size;
    block?: boolean;
    inputClassName?: string;
    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;
};

export declare const TextInput: ({ variant, size, radius, block, className, leftContent, rightContent, ...props }: TextInputProps) => JSX_2.Element;

declare type TextInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
    variant?: Variant;
    size?: Size;
    radius?: Radius;
    block?: boolean;
    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;
};

export declare const Toast: ({ message, variant, title, className, onClose }: ToastProps) => JSX_2.Element;

declare type ToastPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';

declare type ToastProps = {
    title?: React.ReactNode;
    message?: React.ReactNode;
    variant?: Variant;
    radius?: Radius;
    className?: string;
    onClose?: () => void;
};

declare type ToastType = {
    title: string;
    message?: string;
    duration?: number;
    onClose?: () => void;
    position?: ToastPosition;
    exiting?: boolean;
};

export declare const useComponentStyle: () => ComponentStyleContext_2;

export declare const useForm: <T extends Record<string, any>>({ defaultValue, validations }: FormProps_2<T>) => {
    handleSubmit: (onSubmit: () => Promise<void>, e: FormEvent) => Promise<void>;
    handleChange: <V>(name: string, value: V) => void;
    formData: T;
    errors: T;
    isSubmitting: boolean;
    reset: () => void;
};

declare type UseFormReturnType = ReturnType<typeof useForm>;

export declare const useToast: () => {
    toast: ({ title, message, duration, onClose, position }: ToastType) => void;
    position: ToastPosition;
    setPosition: Dispatch<SetStateAction<ToastPosition>>;
    renderToastContainer: () => ReactPortal;
};

export declare interface ValidationRules<T> {
    name?: Partial<keyof T>;
    pattern?: RegExp;
    valid?: (value: Partial<T>) => boolean;
    message?: string;
    required?: boolean;
}

declare type Variant = 'fill' | 'outline';

export { }
