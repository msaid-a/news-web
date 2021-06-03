import React, { CSSProperties } from 'react'
import {Header, Footer,Loading} from '..'
import {useHistory} from 'react-router-dom'
interface props {
    children: React.ReactNode,
    elementSearch?: React.ReactNode
    loading?: Boolean
    className?: string
    style?: CSSProperties
}

const Layout:React.FC<props> = (props) => {
    
    
    const history = useHistory()
    const searchData = (e : any) => {
        if (e.keyCode === 13) {
            history.push(`/search?q=${e.target.value}`)
          }
    }
    

    return (
        <div className={props.className} style={props.style}>
            <Header>
                <input type="search" onKeyUp={searchData} className="mx-2.5 block text-gray-700 text-sm font-bold mb-2 border search" placeholder="Search" />
            </Header>
                {props.children}
            <Footer />
        </div>
    )
}

export default Layout
