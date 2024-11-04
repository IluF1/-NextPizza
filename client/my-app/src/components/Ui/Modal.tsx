import { Dispatch, HTMLAttributes, ReactNode, SetStateAction } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
    isActive: boolean
    setIsActive: Dispatch<SetStateAction<boolean>>
    children: ReactNode
}

export const Modal = ({
    isActive,
    setIsActive,
    children,
    className,
    ...props
}: Props) => {
    return (
        <div
            {...props}
            onClick={() => setIsActive(false)}
            className={`fixed inset-0 z-50 flex items-center justify-center ${
                isActive ? 'bg-black bg-opacity-90' : 'hidden'
            }`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-white p-8 rounded-lg shadow-lg ${className}`}
            >
                {children}
            </div>
        </div>
    )
}
