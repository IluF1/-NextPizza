interface Props {
    children: string
}

export const Container = ({ children, ...props }: Props) => <div {...props}>{children}</div>
