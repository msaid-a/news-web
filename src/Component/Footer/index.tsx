import React from 'react'
import logo from '../../static/images/logo.jpg'

const index:React.FC = () => {

    return (
            <div className="border mt-14">
                <footer className="footer bg-black text-white relative pt-1 border-b-2 border-white">
                    <div className="container mx-auto px-6">
                    <div className="flex items-center flex-no-shrink mr-6">
                <h3 className="text-lg  font-extrabold font-sans my-8">THERE'S  <br/> ALWAYS SOMETHING NEW!</h3>
            </div>
                    </div>
                    <div className="container mx-auto px-6">
                        <div className=" border-t-2 border-gray-300 flex flex-col items-center">
                            <div className="sm:w-2/3 text-center py-6">
                                <p className="text-sm font-bold mb-2">
                                    © 2021 by Muhammad Said Arrafi
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
    )
}

export default index
