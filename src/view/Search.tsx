import React, { useEffect, useState } from "react";
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
  NoData
} from "../Component";
import moment from 'moment'
import { useLocation, useHistory } from "react-router-dom";

interface props {}

const Search: React.FC<props> = (props) => {
  const news = useSelector((state: AppReduxState) => state);
  const [loading, setLoading] = useState<Boolean>(false);
  const search = useLocation().search;
  const history = useHistory();

  const getData = async () => {
    setLoading(true);
    await newsServices.getNews(search.replace("?q=", ""));
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container loading={loading}>
      {news.news.news.length === 0 ? (
        <NoData />
      ) : (
        <Container  className="2xl:px-72 xl:px-4" container>
        <Flex.Row colPerRow="3" className="mt-24">
        {news.news.news.slice(0,9).map((val) => (
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

        </Container>
      )}
    </Container>
  );
};

export default Search;
