import React, {useEffect} from 'react'
import {newsServices} from '../services'
import {AppReduxState} from '../redux'
import { useSelector } from 'react-redux';


const Main: React.FC = () => {
    const news = useSelector((state: AppReduxState) => state.news)

    const getData = async () => {
        await newsServices.getNews()
        await newsServices.getHeadline()
    }

    useEffect(() => {
        getData()
    }, [])
    
    console.log(news, 'asdasd')
    return (
        <div>
            <h1>Hello Word</h1>
        </div>
    )
}

export default Main
