import UserAvatar from "../assets/profile_avatar.png";

import Retweet from "../assets/retweet.svg";
import Heart from "../assets/heart.svg";
import Reach from "../assets/reach.svg";
import Share from "../assets/share.svg";
import PropTypes from "prop-types"; // ES6
// import Icon from "./Icon";
import Comment from "../assets/comment.svg";
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { getRelativeTime } from "../lib/utils";

Tweet.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  postedAt: PropTypes.number.isRequired,
  tweetText: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  retweets: PropTypes.string.isRequired,
  likes: PropTypes.string.isRequired,
  reach: PropTypes.string.isRequired,
};


function Tweet({
  id = "",
  tweetText,
  postedAt,
  comments = 0,
  retweets = 0,
  likes = 0,
  reach = 0,
}) 

{ 

  const formValues = useContext(UserContext);
  const userData = formValues.formData;
  console.log(postedAt);
  return (
    <div
      data-tweet-id={id}
      className="box-border flex h-min border-b border-neutral-700 px-4 py-2"
    >
      <div className="mr-4 h-12 min-w-fit">
        <img
          src={UserAvatar}
          alt="User Picture"
          className="h-12 w-12 rounded-full"
        />
      </div>
      <div className="w-full">
        <div className="mb-1">
          <div className="mb-1 text-neutral-50 flex gap-1">
            <span className="text-base font-medium">{userData.name}</span>
            <span className="text-neutral-500">@{userData.name.replace(/\s/g, '').toLowerCase()}</span>
            <span className="text-neutral-500">•</span>
            <span className="text-neutral-500">{getRelativeTime(postedAt)}</span>
          </div>
          <p className="font-regular text-0.9rem text-neutral-50">
            {tweetText}
          </p>
        </div>
        <div className="flex items-center justify-between py-3 text-neutral-500 lg:pr-5">
          {/* <Icon type="Comment" value={comments} /> */}
          <div className="flex items-center justify-between gap-0.3rem">
            <img src={Comment} />
            <span className="text-sm font-normal text-neutral-500">
              {comments}
            </span>
          </div>

          <div className="flex items-center justify-between gap-0.3rem">
            <img src={Retweet} />
            <span className="text-sm font-normal text-neutral-500">
              {retweets}
            </span>
          </div>
          <div className="flex items-center justify-between gap-0.3rem">
            <img src={Heart} />
            <span className="text-sm font-normal text-neutral-500">
              {likes}
            </span>
          </div>
          <div className="flex items-center justify-between gap-0.3rem">
            <img src={Reach} />
            <span className="text-sm font-normal text-neutral-500">
              {reach}
            </span>
          </div>
          <div className="flex items-center justify-between gap-0.3rem">
            <img src={Share} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
