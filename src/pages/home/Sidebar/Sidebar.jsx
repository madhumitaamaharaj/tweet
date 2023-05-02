import React, {  useState } from "react";
import styles from "./Sidebar.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { Dialog, DialogContent} from "@mui/material";
import UserLogout from '../Logout/UserLogout'
import Tweet from "../Tweet/Tweet";
import { useRecoilState } from "recoil";
import { reRender } from "../../../atom/reRender";

const Sidebar = () => {
  const navigate = useNavigate();
  const [showTweetBox, setShowTweetBox] = useState(false); const [atomRender, setAtomRender] = useRecoilState(reRender);

  function handleTweet() {
    setShowTweetBox(true)
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

  function handleNavigate(path) {
    navigate(path);
  }


  return (
    <>
      <div className={styles.Sidebar}>
        <div className={styles.sidebar__twitterIcons}>
          <TwitterIcon
            className={styles.sidebar_twittericon}
            sx={{
              color: "#51b6f5 ",
              marginLeft: "0rem",
              fontSize: "2.1875rem",
              justifyContent: "center",
            }}
          />

          <div className={styles.icons}>
            <p onClick={() => handleNavigate("/")}>
              <span>
                <HomeIcon
                  sx={{
                    direction: "row",
                    alignItems: "center",
                    corsor: "pointer",
                  }}
                />
              </span>
              Home
            </p>

            <p onClick={() => handleNavigate("/explore")}>
              <span>
                <TagIcon />
              </span>
              Explore
            </p>

            <p onClick={() => handleNavigate("/notifications")}>
              <span>
                <NotificationsNoneIcon />
              </span>
              Notifications
            </p>
            <p onClick={() => handleNavigate("/messages")}>
              <span>
                <MailOutlineIcon />
              </span>
              Messages
            </p>

            <p onClick={() => handleNavigate("/bookmarks")}>
              <span>
                <BookmarkBorderIcon />
              </span>
              Bookmarks
            </p>

            <p onClick={() => handleNavigate("/twitterblue")}>
              <span>
                <TwitterIcon />
              </span>
              Twitter blue
            </p>

            <p onClick={() => handleNavigate("/profiles")}>
              <span>
                <PermIdentityIcon />
              </span>
              profile
            </p>

            <p onClick={() => handleNavigate("/more")}>
              <span>
                <MoreHorizIcon />
              </span>
              More
            </p>
          </div>

          <Button
            className={styles.sidear_button}
            onClick={handleTweet}
            sx={{
              backgroundColor: "#51b6f5",
              color: "white",
              border: "none",
              fontWeight: "900",
              textTransform: "inherit",
              borderRadius: "1.875rem" /*30px*/,
              height: "3.125rem" /*50px*/,
              width: "100%",
              paddingLeft: "1.25rem" /*20px */,
              "&:hover": {
                backgroundColor: "#51b6f5",
                color: "white",
              },
            }}
          >
            Tweet
          </Button>

          <Dialog open={showTweetBox} onClose={() => setShowTweetBox(false)}>
            <DialogContent
              sx={{
                height: "300px",
                width: "500px",
              }}
            >
              <Tweet />
            </DialogContent>
          </Dialog>
            <UserLogout/>
        </div>
      </div>
    </>
  );
};

export default Sidebar;