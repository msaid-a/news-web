import React from 'react'
import logo from '../../static/images/logo.jpg'
import './style.css'

interface props {
    children?: React.ReactNode
}

const index: React.FC<props> = (props) => {
    return (
        <nav className="header fixed flex items-center justify-between flex-wrap bg-teal ">
            <div className="flex items-center flex-no-shrink mr-6">
                <img src={logo} width={70} style={{marginLeft: 50}} />
                <h3 className="text-lg  font-extrabold font-sans">THERE'S ALWAYS SOMETHING NEW!</h3>
            </div>
            <div className="flex flex-end">
                {props.children}
            </div>
        </nav>
    )
}

export default index
