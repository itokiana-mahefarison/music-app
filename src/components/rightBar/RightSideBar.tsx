import { HTMLAttributes } from 'react'
import './css/index.css'

export const RigthSideBar = (props: RightSideBarProps) => {
    return (
        <div className={`right-sidebar ${props.className}`}>
            <h1 className='title'>
                {props.title}
            </h1>
            <div className='content'>
                {props.children}
            </div>
        </div>
    )
}

export type RightSideBarProps = HTMLAttributes<HTMLDivElement> & {
    title?: string
}