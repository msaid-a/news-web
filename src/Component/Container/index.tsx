import React, { CSSProperties, ReactNode } from 'react'
import classNames from 'classnames'
import {Header, Footer} from '../index'
import './style.css'

interface props {
    loading?: string,
    children: ReactNode,
    style?: CSSProperties,
    className?: string
}


const Container:React.FC<props> = (props) => {

const containerClass = classNames('container custom-header', props.className)

    return (
        <div>
            <div style={props.style} className={containerClass}>
                {props.children}
            </div>
        </div>
    )
}

export default Container
