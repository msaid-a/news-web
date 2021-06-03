import React, { CSSProperties } from 'react'
import {Header, Footer,Loading} from '..'

interface props {
    children: React.ReactNode,
    elementSearch?: React.ReactNode
    loading?: Boolean
    className?: string
    style?: CSSProperties
}

const index:React.FC<props> = (props) => {
    return (
        <div className={props.className} style={props.style}>
            <Header>
                {props.elementSearch}
            </Header>
                {props.loading ? <Loading/> : props.children}
            <Footer />
        </div>
    )
}

export default index
