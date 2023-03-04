import React from "react";
import BestSellers from "../bestsellers/bestsellers";
import FlashDeals from "../flashdeals/products";
import HighDiscounts from "../highdiscounts/highdiscounts";
import TopPaintings from "../toppaintings/toppaintings";
import TopPublications from "../toppublications/toppublications";
import TopRatings from "../topratings/topratings";
import Category from "./categories";
import Header from "./header";
import NewsLetter from "./newsletter";
import Recommended from "./recommended";
import "./shared/shared.css";
// import Trending from './Trending';

const HomePages = () => {
  return (
    <div>
      <Header />
      <Recommended />
      {/* <Trending /> */}
      <Category />
      <FlashDeals />
      <HighDiscounts />
      <TopPublications />
      <BestSellers />
      <TopPaintings />
      <TopRatings />
      <NewsLetter />
    </div>
  );
};

export default HomePages;
