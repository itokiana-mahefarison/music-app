import { useFrequenceBarHooks } from "../hooks/useFrequenceBarHooks"
import { FrequenceBar } from "./FrequenceBar"

export const SoundsFrequence = () => {

    const {bars} = useFrequenceBarHooks(10)

    return (
        <div className="frequence-bar">
            {
                bars?.map((item, index) => (
                    <FrequenceBar {...item} key={index}/>
                ))
            }
        </div>
    )
}