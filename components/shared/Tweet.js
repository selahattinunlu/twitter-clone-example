import Image from "next/image";
import { useState } from "react";
import moment from "moment";

moment.locale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "seconds",
    ss: "%ss",
    m: "a minute",
    mm: "%dm",
    h: "an hour",
    hh: "%dh",
    d: "a day",
    dd: "%dd",
    M: "a month",
    MM: "%dM",
    y: "a year",
    yy: "%dY",
  },
});

import {
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
  ReplyIcon,
} from "@heroicons/react/solid";

const Tweet = ({ tweet }) => {
  return (
    <div className="flex py-4 space-x-4">
      <div>
        <Image
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          width={40}
          height={40}
          className="rounded-full object-cover"
          alt=""
        />
      </div>
      <div className="flex-1">
        <header className="flex w-full justify-between">
          <div className="flex items-center space-x-1">
            <div className="font-bold">{tweet.profile.name}</div>
            <div className="text-gray-400">@{tweet.profile.username}</div>
            <div className="text-gray-400">
              {moment(tweet.created_at).fromNow(true)}
            </div>
          </div>
          <button>
            <DotsHorizontalIcon className="w-4 h-4 text-gray-300" />
          </button>
        </header>
        <div className="py-2">{tweet.body}</div>
        <footer className="flex space-x-8 items-center">
          <button className="text-gray-600">
            <ReplyIcon className="w-4 h-4" />
          </button>
          <button className="flex items-center space-x-1 text-gray-600">
            <ShareIcon className="w-4 h-4" />
            <span>10</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600">
            <HeartIcon className="w-4 h-4" />
            <span>10</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Tweet;
