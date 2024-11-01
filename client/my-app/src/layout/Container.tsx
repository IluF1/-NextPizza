import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Container = ({ children, className, ...props }: Props) => (
    <div className='p-header' {...props}>
        {children}
    </div>
)
