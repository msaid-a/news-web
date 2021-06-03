import React, {HtmlHTMLAttributes, useEffect, useState} from 'react'
import {newsServices} from '../services'
import {AppReduxState} from '../redux'
import { useSelector } from 'react-redux';
import {Container, Break, Text, Card, Layout, Loading} from '../Component'
import Carousel from "react-multi-carousel";
import {articles} from '../model/index'
import "react-multi-carousel/lib/styles.css";
import {useHistory} from 'react-router-dom'


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1920 },
      items: 5
    },
    standarDesktop: {
        breakpoint: { max: 1919, min: 1368 },
        items: 4,
        slidesToSlide: 3 // optional, default to 1.
      },
    desktop: {
        breakpoint: { max: 1367, min: 1024 },
        items: 2,
        slidesToSlide: 3 // optional, default to 1.
      },
    
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 2 // optional, default to 1.
      },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
  };
  


const Main: React.FC = () => {
    const news = useSelector((state: AppReduxState) => state)
    const [health, setHealth] = useState<articles[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const history = useHistory()


    const getData = async () => {
        setLoading(true)
        await newsServices.getHeadline('business')
        await Promise.resolve(newsServices.getHeadlineNoRedux('health')).then(value => {
            setHealth(value.articles)
        })
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
            <Container loading={loading} className="px-12" >
                <Text.Heading h={5}> Top Headline About Businiess </Text.Heading>
                <Break height={20} />
                <Carousel 
                    responsive={responsive}
                    infinite={true}
                    autoPlaySpeed={400}
                    keyBoardControl={true}
                    transitionDuration={400}
                    containerClass="carousel-container"
                    >
                    {news.headline.headline.map(val=> (
                        <Card headImage={val.urlToImage ? val.urlToImage : "https://storage.googleapis.com/stateless-www-knowkpop-com/2020/01/048f86ff-world-health.jpg"}>
                                <Text.Paragraph className="my-1">{val.title.length > 80 ? val.title.substring(0,80) + '...' : val.title}</Text.Paragraph>
                        </Card>
                    ))}
                </Carousel>
                <Break height={100}></Break>
                <Text.Heading h={3}> Top Headline About Health </Text.Heading>

                <Carousel 
                    responsive={responsive}
                    swipeable={false}
                    draggable={false}
                    infinite={true}
                    autoPlaySpeed={400}
                    keyBoardControl={true}
                    transitionDuration={400}
                    containerClass="carousel-container"
                    >
                    {health.length > 0 && health.map(val => (
                        <Card headImage={val.urlToImage ? val.urlToImage : "https://storage.googleapis.com/stateless-www-knowkpop-com/2020/01/048f86ff-world-health.jpg"}>
                        <Text.Paragraph className="my-1">{val.title.length > 80 ? val.title.substring(0,80) + '...' : val.title}</Text.Paragraph>
                        </Card>
                        ))}
                </Carousel>
            
            </Container>
    )
}

export default Main
