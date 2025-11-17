import React from "react";
import testimonialsData from "../../../testimonials.json";
import {
  Container,
  Title,
  Card,
  Avatar,
  Name,
  Role,
  Company,
  Text,
  Stars,
} from "./style";

import nanicaLogo from "../../images/nanicaLogo.jpg";
import magaluLogo from "../../images/magaluLogo.jpg";
import imgVixtra from "../../images/vixtraLogo.png";
import chale from "../../images/chale.png";
import canaltech from "../../images/Canaltech_logo.png";
import dsv from "../../images/dsvLogo.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LineBottom } from "../line";

const imageMap = {
  nanica: nanicaLogo,
  magalu: magaluLogo,
  vixtra: imgVixtra,
  chale: chale,
  canaltech: canaltech,
  dsv: dsv,
};

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

export function Testimonials() {
  return (
    <Container>
      <LineBottom />
      <Title>Compromisso com qualidade e frescor que você sente no sabor</Title>
      <Slider {...sliderSettings}>
        {testimonialsData.map((item, index) => (
          <div key={index}>
            <Card>
              <Avatar src={imageMap[item.image]} alt={item.name} />
              <Stars style={{ fontSize: "24px", color: "gold" }}>
                {"★".repeat(item.rating)}
              </Stars>
              <Name>{item.name}</Name>
              <Role>{item.role}</Role>
              <Company>{item.company}</Company>
              <Text>"{item.testimonial}"</Text>
            </Card>
          </div>
        ))}
      </Slider>
    </Container>
  );
}
