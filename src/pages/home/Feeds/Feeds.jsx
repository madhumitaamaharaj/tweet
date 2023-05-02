import React, { useState } from "react";
import "./Feeds.css";
import { TweetData } from "../../../utils/TweetData";
import Avatar from "@mui/material/Avatar";
import VerifiedIcon from "@mui/icons-material/Verified";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { useRecoilState } from "recoil";
import { reRender } from '../../../atom/reRender';

export default function Feeds() {
  const [likeCount, setLikeCount] = useState(0);
  const [isLoad, setIsLoad] = useState(20);
  const [atomRender, setAtomRender] = useRecoilState(reRender);

  function handleLikeClick(elem) {
    if (elem.isLiked === true) {
      elem["isLiked"] = false;
      elem["likeCount"] = elem.likeCount - 1;
      setLikeCount(elem.likeCount);
    } else {
      elem["isLiked"] = true;
      elem["likeCount"] = elem.likeCount + 1;
      setLikeCount(elem.likeCount);
    }

    // console.log(elem.isLiked);
  }
  function handleCommentClick(elem) {
    if (elem.isCommented === true) {
      elem["isCommented"] = false;
      elem["commentCount"] = elem.commentCount - 1;
      setLikeCount(elem.commentCount);
    } else {
      elem["isCommented"] = true;
      elem["commentCount"] = elem.commentCount + 1;
      setLikeCount(elem.commentCount);
    }
    // console.log(elem);
  }
  function handleShareClick(elem) {
    if (elem.isShared === true) {
      elem["isShared"] = false;
      elem["reTweetsCount"] = elem.reTweetsCount - 1;
      setLikeCount(elem.reTweetsCount);
    } else {
      elem["isShared"] = true;
      elem["reTweetsCount"] = elem.reTweetsCount + 1;
      setLikeCount(elem.reTweetsCount);
    }
    // console.log(elem.isShared);
  }

  function handleOnNext() {
    setIsLoad(isLoad + 20);
  }
  return (
    <>
      <div>
        {JSON.parse(localStorage.getItem("userTweetList"))
          ? JSON.parse(localStorage.getItem("userTweetList")).map((elem, i) => {
              return (
                <div className="feeds_main_container" key={i}>
                  <div>
                    <Avatar alt="Remy Sharp" src="" />
                  </div>
                  <section className="feeds_content_section">
                    <div className="feeds_content_header">
                      <div>
                        <b>
                          {JSON.parse(localStorage.getItem("currentUser")).userFullName}
                        </b>{" "}
                        <VerifiedIcon fontSize="small" htmlColor="#2196f3" />{" "}
                        &nbsp; @
                        {JSON.parse(localStorage.getItem("currentUser")).userFullName}
                      </div>
                      <div>
                        <MoreHorizIcon />
                      </div>
                    </div>

                    <div className="feeds_content_body">
                      <p>{elem.content}</p>
                    </div>

                    <div className="feeds_content_activity">
                      <p onClick={() => handleCommentClick(elem)}>
                        <ChatBubbleOutlineOutlinedIcon
                          htmlColor={elem.isCommented ? "blue" : ""}
                        />
                        <span>{elem.commentCount}</span>
                      </p>
                      <p onClick={() => handleShareClick(elem)}>
                        <LoopOutlinedIcon
                          htmlColor={elem.isShared ? "lightGreen" : ""}
                        />
                        <span>{elem.reTweetsCount}</span>
                      </p>
                      <p onClick={() => handleLikeClick(elem)}>
                        <FavoriteBorderOutlinedIcon
                          htmlColor={elem.isLiked ? "red" : ""}
                        />
                        <span>{elem.likeCount}</span>
                      </p>
                      <p>
                        <BarChartRoundedIcon />
                        <span>100.5K</span>
                      </p>
                    </div>
                  </section>
                </div>
              );
            })
          : ""}
      </div>

      {TweetData.filter((e, i) => i < isLoad).map((elem, i) => {
        return (
          <div className="feeds_main_container" key={elem.id}>
            <div>
              <Avatar alt="Remy Sharp" src="" />
            </div>
            <section className="feeds_content_section">
              <div className="feeds_content_header">
                <div>
                  <b>{elem.tweetedBy.name}</b>
                  <VerifiedIcon fontSize="small" htmlColor="#2196f3" /> &nbsp; @
                  {elem.tweetedBy.name} . 5h
                </div>
                <div>
                  <MoreHorizIcon />
                </div>
              </div>
              <div className="feeds_content_body">
                <p>{elem.content}</p>
              </div>
              <div className="feeds_content_imgDiv">
                <img src={elem.image} alt="" />
              </div>
              <div className="feeds_content_activity">
                <p onClick={() => handleCommentClick(elem)}>
                  <ChatBubbleOutlineOutlinedIcon
                    htmlColor={elem.isCommented ? "blue" : ""}
                  />
                  <span>{elem.commentCount}</span>
                </p>
                <p onClick={() => handleShareClick(elem)}>
                  <LoopOutlinedIcon
                    htmlColor={elem.isShared ? "lightGreen" : ""}
                  />
                  <span>{elem.reTweetsCount}</span>
                </p>
                <p onClick={() => handleLikeClick(elem)}>
                  <FavoriteBorderOutlinedIcon
                    htmlColor={elem.isLiked ? "red" : ""}
                  />
                  <span>{elem.likeCount}</span>
                </p>
                <p>
                  <BarChartRoundedIcon />
                  <span>100.5K</span>
                </p>
              </div>
            </section>
          </div>
        );
      })}

      <div className="btn_loader">
        <button className="loader" onClick={handleOnNext}>
          Load More
        </button>
      </div>
    </>
  );
}
