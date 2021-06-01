import React from 'react'
import logo from '../../static/images/logo.jpg'
import './style.css'

const index: React.FC = (props) => {
    return (
        <nav className="header fixed flex items-center justify-between flex-wrap bg-teal ">
            <div className="flex items-center flex-no-shrink mr-6">
                <img src={logo} width={70} style={{marginLeft: 50}} />
                <h3 className="text-lg  font-extrabold font-sans">THERE'S ALWAYS SOMETHING NEW!</h3>
            </div>
            <div className="flex flex-end">
                <input className="mx-2.5 block text-gray-700 text-sm font-bold mb-2 border search" placeholder="Search" />
            </div>
        </nav>
    )
}

export default index
