import React from 'react'
import "./Feed.css";
import FeedHeaderOption from "./FeedHeaderOption";
import PostBox from "../PostBox/PostBox";
import Post from "../Post/Post";

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import RedditIcon from '@material-ui/icons/Reddit';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

import FlipMove from 'react-flip-move';


//* STATELESS COMPONENT / FUNCTION
function Feed() {

  return (
    
    <div className="feed">
      <div className="stickyHeaderDiv">
        <div className="feed__header">
          <h2>Home</h2>
            <div className="postButton__Row">
              <FeedHeaderOption Icon={FacebookIcon} />
              <FeedHeaderOption Icon={InstagramIcon} />
              <FeedHeaderOption Icon={LinkedInIcon} />
              <FeedHeaderOption Icon={PinterestIcon} />
              <FeedHeaderOption Icon={RedditIcon} />
              <FeedHeaderOption Icon={TwitterIcon} />
              <FeedHeaderOption Icon={YouTubeIcon} /> 
            </div>
        </div>
      
      <PostBox />
      </div>
      <FlipMove>
        <Post 
        />
      </FlipMove>
  
     
     
       
    </div>
  )
}

export default Feed