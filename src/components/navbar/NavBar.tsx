import { Logo } from "../logo/Logo"
import { IconButton } from "../button/IconButton"
import { HamburgerButton } from "../HamburgerButton"

export const NavBar = () => {
    return (
        <header className="flex items-center justify-between pb-5">
            <Logo/>
            <IconButton>
                <HamburgerButton/>
            </IconButton>
        </header>
    )
}