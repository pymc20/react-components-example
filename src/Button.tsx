interface ButtonProps {
    style: any
    title: string
    onClick: any
}

const Button = (props:ButtonProps) => {
    return (
        <button
            style={props.style}
            onClick={props.onClick}
        >
            {props.title}
        </button>
    )
}

export default Button