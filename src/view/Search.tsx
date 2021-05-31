import React, {useEffect} from 'react'
import {newsServices} from '../services'
import {AppReduxState} from '../redux'
import { useSelector } from 'react-redux';


const Search: React.FC = () => {
    const news = useSelector((state: AppReduxState) => state)

    const getData = async () => {
        await newsServices.getNews()
    }

    useEffect(() => {
        getData()
    }, [])
    
    console.log(news, 'asdasd')
    return (
        <div>
            <h1 className="font-black">Search</h1>
        </div>
    )
}

export default Search
