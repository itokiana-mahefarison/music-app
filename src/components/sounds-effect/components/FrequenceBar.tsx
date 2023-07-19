import { TBar } from "../hooks/useFrequenceBarHooks"

export const FrequenceBar = (props: TBar) => {
    return (
        <span className={`bar ${props.className}`} style={{height: props.height, width: 20}}></span>
    )
}