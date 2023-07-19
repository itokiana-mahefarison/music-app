import { useCallback, useMemo } from "react"

export const useFrequenceBarHooks = (barNumber:number) => {
    const maxHeight = 100

    const getListBar = useCallback(() => {
        return [
            ...new Array(barNumber).fill(undefined).map((item, index) => (
                {
                    className: `bar-${index+1}`,
                    height: maxHeight / (-index + barNumber),
                }
            )),
            ...new Array(barNumber).fill(undefined).map((item, index) => (
                {
                    className: `bar-reverse-${index+1}`,
                    height: maxHeight / (index + 1),
                }
            ))
        ]
    }, [])

    return (
        useMemo(():TFrequenceBar => {
            return {
                bars: getListBar()
            }
        }, [])
    )
}

type TFrequenceBar = {
    bars?: Array<TBar>
}

export type TBar = {
    className?: string
    height?: string | number
    delay?: string | number
}