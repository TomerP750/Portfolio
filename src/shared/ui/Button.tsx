
interface ButtonProps {
    disabled: boolean
    size: number
    className: string
    children: React.ReactNode
}

export function Button({ disabled, className, children }: ButtonProps) {
    return (
        <button disabled={disabled} className={className}>
            {children}
        </button>
    )
}