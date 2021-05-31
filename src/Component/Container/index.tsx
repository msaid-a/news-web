import React, { CSSProperties, ReactNode } from 'react'
import classNames from 'classnames'

interface props {
    loading?: string,
    children: ReactNode,
    style?: CSSProperties,
    className?: string
}


const Container:React.FC<props> = (props) => {

const containerClass = classNames('container', props.className)

    return (
        <div style={props.style} className={containerClass}>
            {props.children}
        </div>
    )
}

export default Container
