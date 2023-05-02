import React, { useState } from "react";
import { Avatar, Button } from "@mui/material";
import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import Textarea from "@mui/joy/Textarea";
import styles from "./Tweet.module.css";
import { useRecoilState } from "recoil";
import { reRender } from "../../../atom/reRender";

export default function Tweet() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [atomRender, setAtomRender] = useRecoilState(reRender);

  function handleTweet() {
    const newTweet = {
      content: tweetMessage,
      likeCount: 0,
      commentCount: 0,
      reTweetCount: 0,
      isLike: false,
    };
    const oldTweetList = JSON.parse(localStorage.getItem("userTweetList"));

    if (oldTweetList) {
      localStorage.setItem(
        "userTweetList",
        JSON.stringify([newTweet, ...oldTweetList])
      );
    } else {
      localStorage.setItem("userTweetList", JSON.stringify([newTweet]));
    }
    setTweetMessage("");
    setAtomRender(!atomRender);
  }
  return (
    <div className={styles.tweetBox}>
      <div className={styles.tweetInput}>
        <div className={styles.avatar}>
          <Avatar
            alt="Sourav Ganguly"
            src="https://gumlet.assettype.com/barandbench%2F2021-07%2F3e25a27f-d4e1-4f11-a28f-ebfb9e04c84c%2Fsourav.jpg?auto=format%2Ccompress&fit=max&w=1200"
            size="md"
          />
        </div>

        <Textarea
          minRows={3}
          className={styles.inputField}
          onChange={(e) => setTweetMessage(e.target.value)}
          value={tweetMessage}
          placeholder="What's happening?"
          type="text"
          sx={{
            border: "none",
            outline: "none",
          }}
        />
      </div>
      <div className={styles.iconsContainer}>
        <div className={styles.icons}>
          <PermMediaOutlinedIcon
            className={styles.icon}
            style={{ color: "skyblue" }}
          />
          <GifBoxOutlinedIcon
            className={styles.icon}
            style={{ color: "skyblue" }}
          />
          <PollOutlinedIcon
            className={styles.icon}
            style={{ color: "skyblue" }}
          />
          <InsertEmoticonOutlinedIcon
            className={styles.icon}
            style={{ color: "skyblue" }}
          />
          <EditCalendarOutlinedIcon
            className={styles.icon}
            style={{ color: "skyblue" }}
          />
          <AddLocationAltOutlinedIcon
            className={styles.icon}
            style={{ color: "skyblue" }}
          />
        </div>

        <Button
          className={styles.tweetButton}
          onClick={handleTweet}
          variant="contained"
          size="small"
          sx={{
            borderRadius: "50px",
            marginTop: "0",
            "&:hover": {
              backgroundColor: "#0c8bf2",
            },
          }}
        >
          Tweet
        </Button>
      </div>
    </div>
  );
}
