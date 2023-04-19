import './css/index.css'

export const Logo = () => {
    return (
        <h1 className="font-bold text-text-black app-logo">
            {APP_NAME}
        </h1>
    )
}

const APP_NAME = "sounds"