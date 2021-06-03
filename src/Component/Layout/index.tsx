import React from 'react'
import {Header, Footer,Loading} from '..'

interface props {
    children: React.ReactNode,
    elementSearch?: React.ReactNode
    loading?: Boolean
}

const index:React.FC<props> = (props) => {
    return (
        <div>
            <Header>
                {props.elementSearch}
            </Header>
                {props.loading ? <Loading/> : props.children}
            <Footer />
        </div>
    )
}

export default index
