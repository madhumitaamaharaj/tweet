import React from "react";
import right from "./Trending.module.css";
import Search from '../Search/Search'
import { Button } from "@mui/material";
const trending = [
  {
    id: 0,
    title: "Trending",
    names: "#PremaVimanam",
    tweetsnum: "4,306 Tweets",
  },

  {
    id: 1,
    title: "Trending in India",
    names: "#Virat Kohli",
    tweetsnum: "10,999 Tweets",
  },

  {
    id: 2,
    title: "Trending in India",
    names: "#janhviKapoor",
    tweetsnum: "8,0429 Tweets",
  },
];

const TrendingSection = () => {
  const arrayDataItems = trending.map((trending) => (
    <div  className={right.trending}key={trending.id}>
      <p >{trending.title}</p>
      <h3 >{trending.names}</h3>
      <span>{trending.tweetsnum}</span>
    </div>
  ));

  return (
    <div className={right.trend_main}>
      <Search />
      <div className={right.trend}>
        <div className={right.head}>
          <h1>Whats happening</h1>
        </div>

        {/* returning arrayDataItems wrapped in <ul> */}
        <div>{arrayDataItems}</div>

        <Button
          variant="outlined"
          sx={{
            color: "rgb(29, 155, 240)",
            borderRadius: "14px",
            border: "1px solid white",
            backgroundColor: "white",
            textTransform: "none",
          }}
        >
          Show more
        </Button>
      </div>
    </div>
  );
};

export default TrendingSection;
