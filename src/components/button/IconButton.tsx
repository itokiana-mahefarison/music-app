import { HTMLAttributes } from "react"
import './css/index.css'

export const IconButton = (props: IconButtonProps) => {
    return (
        <button className="button icon-button" {...props}>
            {props.icon || props.children}
        </button>
    )
}

export type IconButtonProps = HTMLAttributes<HTMLButtonElement> & {
    icon?: React.ReactNode
}