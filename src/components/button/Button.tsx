import { HTMLAttributes } from "react"
import './css/index.css'

export const Button = (props: ButtonProps) => {
    return (
        <button className="button" {...props}>
            {props.startIcon}
            {props.label}
            {props.endIcon}
        </button>
    )
}

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
    label?: string
    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
}