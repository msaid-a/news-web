import React, {useEffect, useState} from 'react'
import {newsServices} from '../services'
import {AppReduxState} from '../redux'
import { useSelector } from 'react-redux';
import {Card, Layout, Container, Text, Loading} from '../Component'
import {useLocation, useHistory} from 'react-router-dom'
interface props {

}

const Search: React.FC<props > = (props) => {
    const news = useSelector((state: AppReduxState) => state)
    const [loading, setLoading] = useState<Boolean>(false)
    const search = useLocation().search
    const history = useHistory()

    const getData = async () => {
        setLoading(true)
        await newsServices.getNews(search.replace('?q=', ''))
        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    const searchData = (e : any) => {
        if (e.keyCode === 13) {
            history.push(`/search?q=${e.target.value}`)
          }
    }

    return  (
        <Layout loading={loading} elementSearch={<input onKeyUp={searchData} className="mx-2.5 block text-gray-700 text-sm font-bold mb-2 border search" placeholder="Search" />}>
            <Container className=" 2xl:px-16 2xl:pl-44 grid 2xl:grid-cols-4 gap-4 md:grid-cols-3 md:px-10 md:pl-32">
            {news.news.news.map(val => (
                    <Card headImage={val.urlToImage ? val.urlToImage : "https://storage.googleapis.com/stateless-www-knowkpop-com/2020/01/048f86ff-world-health.jpg"}>
                            <Text.Paragraph className="my-1">{val.title.length > 80 ? val.title.substring(0,80) + '...' : val.title}</Text.Paragraph>
                    </Card>
            ))}
            </Container>
        </Layout>
    )
}

export default Search
