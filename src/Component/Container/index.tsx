import React, { CSSProperties, ReactNode } from 'react'
import classNames from 'classnames'
import {Header, Footer, Loading} from '../index'
import './style.css'

interface props {
    loading?: Boolean,
    children: ReactNode,
    style?: CSSProperties,
    className?: string
    container?: true
}


const Container:React.FC<props> = (props) => {

const containerClass = classNames('container custom-header', props.className)

    return (
        <div>
            <div style={props.style} className={props.container ? containerClass : props.className}>
                {props.loading ? <Loading/> : props.children}
            </div>
        </div>
    )
}

export default Container
