import React, { HtmlHTMLAttributes, useEffect, useState } from "react";
import { newsServices } from "../services";
import { AppReduxState } from "../redux";
import { useSelector } from "react-redux";
import {
  Container,
  Break,
  Text,
  Card,
  Layout,
  Loading,
  Flex,
  Image,
} from "../Component";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import moment from "moment";
import MediaQuery from 'react-responsive'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1920 },
    items: 1,
  },
  standarDesktop: {
    breakpoint: { max: 1919, min: 1368 },
    items: 1,
    slidesToSlide: 3, // optional, default to 1.
  },
  desktop: {
    breakpoint: { max: 1367, min: 1024 },
    items: 1,
    slidesToSlide: 3, // optional, default to 1.
  },

  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Main: React.FC = () => {
  const news = useSelector((state: AppReduxState) => state);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingWorld, setLoadingWorld] = useState<boolean>(false);
  const [loadingSport, setLoadingSport] = useState<boolean>(false);
  const [loadingHealth, setLoadingHealth] = useState<boolean>(false);

  const getData = async () => {
    setLoading(true);
    await newsServices.getBreakingNews();
    setLoading(false);
  };

  const getDataWorld = async () => {
    setLoadingWorld(true);
    await newsServices.getHeadline("world");
    setLoadingWorld(false);
  }

  const getDataSport = async () => {
    setLoadingSport(true);
    setTimeout(async () => {
      await newsServices.getHeadlineSport();
    }, 1000)
    setLoadingSport(false);
  }
  const getDataHealth = async () => {
    setLoadingHealth(true);
    setTimeout(async () => {
      await newsServices.getHeadlineHealth();
      setLoadingHealth(false);
    }, 3000)
  }

  

  useEffect(() => {
    if (news.headline.breakingNews.length === 0)  {
      getData();
    } 

    if(news.headline.world.length === 0) {
      getDataWorld()
    }

    if(news.headline.sport.length === 0) {
      getDataSport()
    }

    if(news.headline.healt.length === 0) {
      getDataHealth()
    }

  }, []);

  console.log(news, 'zxczxc')

  return (
    <Container loading={loading || loadingHealth || loadingSport || loadingWorld} className="2xl:px-72 xl:px-4" container>
      <Container className="flex justify-center mt-12 mb-6">
        <Text.Heading h={1}> Breaking News </Text.Heading>
      </Container>
      <Break height={20} />
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={400}
        keyBoardControl={true}
        transitionDuration={400}
        arrows={false}
        showDots
      >
        {news.headline.breakingNews.map((val) => (
          <Flex.Row className="" colPerRow="2">
          <MediaQuery minWidth={1024}>
            <Flex.Col width={"30%"}>
              <Container>
                <Image
                  style={{ objectFit: "cover" }}
                  width="450px"
                  height="385px"
                  className="rounded-lg"
                  src={val.image}
                />
              </Container>
            </Flex.Col>
            <Flex.Col width={"65%"}>
              <Container className="pt-24 pl-10">
                <Text.Span>{val.source.name}</Text.Span>
                <Text.Span className="text-gray-400 ml-3 ">
                  {moment(val.publishedAt).format("DD MMM YYYY")}
                </Text.Span>
                <Text.Heading h={1} className="mt-6" onClick={() => window.open(val.url, '_blank')}>
                  {val.title}
                </Text.Heading>
                <Text.Paragraph className="text-gray-500  mt-2">
                  {val.description}
                </Text.Paragraph>
              </Container>
            </Flex.Col>
          </MediaQuery>
          <MediaQuery maxWidth={1023}>
          <Flex.Col width={"100%"}>
              <Container>
                <Image
                  style={{ objectFit: "cover" }}
                  width="450px"
                  height="385px"
                  className="rounded-lg mx-auto"
                  src={val.image}
                />
              </Container>
            </Flex.Col>
            <Flex.Col width={"100%"}>
              <Container className="pt-24 pl-10">
                <Text.Span>{val.source.name}</Text.Span>
                <Text.Span className="text-gray-400 ml-3 ">
                  {moment(val.publishedAt).format("DD MMM YYYY")}
                </Text.Span>
                <Text.Heading h={1} className="mt-6" onClick={() => window.open(val.url, '_blank')}>
                  {val.title}
                </Text.Heading>
                <Text.Paragraph className="text-gray-500  mt-2">
                  {val.description}
                </Text.Paragraph>
              </Container>
            </Flex.Col>
          </MediaQuery>
          </Flex.Row>
        ))}
      </Carousel>
      <Flex.Row colPerRow="3" className="mt-24">
        {news.headline.world.slice(0, 9).map((val) => (
          <Flex.Col>
            <Card>
              <Image
                style={{ objectFit: "cover" }}
                width="400px"
                height="250px"
                className="rounded-lg"
                src={val.image}
              />
              <Container style={{ width: 400 }} className="mt-8">
                <Text.Span>{val.source.name}</Text.Span>
                <Text.Span className="text-gray-400 ml-3 ">
                  {moment(val.publishedAt).format("DD MMM YYYY")}
                </Text.Span>
                <Text.Heading h={5} className="mt-2">
                  {val.title}
                </Text.Heading>
                <Text.Paragraph className="text-gray-500  mt-2">
                  {val.description.slice(0, 100)}
                </Text.Paragraph>
                <Text.Paragraph className="text-blue-600" onClick={() => window.open(val.url, "_blank")}>Read More..</Text.Paragraph>
              </Container>
            </Card>
          </Flex.Col>
        ))}
      </Flex.Row>

      <Flex.Row colPerRow="2">
        <Flex.Col>
          <Text.Heading h={3} className="mb-6">Sport</Text.Heading>
          {news.headline.sport.slice(0,6).map((val) => (
            <Flex.Row className="" colPerRow="2">
              <Flex.Col width={"150px"}>
                <Image
                  style={{ objectFit: "cover" }}
                  width="150px"
                  height="100px"
                  className="rounded-lg mb-6"
                  src={val.image}
                />
              </Flex.Col>
              <Flex.Col>
                <Container >
                  <Text.Span className="font-black">{val.source.name}</Text.Span>
                  <Text.Span className="text-gray-500 ml-3 ">
                    {moment(val.publishedAt).format("DD MMM YYYY")}
                  </Text.Span>
                  <Break />
                  <Text.Span onClick={() => window.open(val.url, '_blank')}>{val.title}</Text.Span>
                </Container>
              </Flex.Col>
            </Flex.Row>
          ))}
        </Flex.Col>
        <Flex.Col>
        <Text.Heading h={3} className="mb-6">Health</Text.Heading>
        {news.headline.healt.slice(0,6).map((val) => (
            <Flex.Row className="" colPerRow="2">
              <Flex.Col width={"150px"}>
                <Image
                  style={{ objectFit: "cover" }}
                  width="150px"
                  height="100px"
                  className="rounded-lg mb-6"
                  src={val.image}
                />
              </Flex.Col>
              <Flex.Col>
                <Container >
                  <Text.Span className="font-black">{val.source.name}</Text.Span>
                  <Text.Span className="text-gray-500 ml-3 ">
                    {moment(val.publishedAt).format("DD MMM YYYY")}
                  </Text.Span>
                  <Break />
                  <Text.Span onClick={() => window.open(val.url, '_blank')}>{val.title}</Text.Span>
                </Container>
              </Flex.Col>
            </Flex.Row>
          ))}
        </Flex.Col>
      </Flex.Row>
    </Container>
  );
};

export default Main;
