import { HTMLAttributes } from "react"
import './index.css'

export const HamburgerButton = (props: HamburgerButtonProps) => {
    return (
        <div className={`hamburger-button ${props.className}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export type HamburgerButtonProps = HTMLAttributes<HTMLDivElement>