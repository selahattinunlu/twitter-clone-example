import { useRouter } from "next/router";
import { useState } from "react";
import supabase from "../lib/supabase";

import Navbar from "../components/shared/Navbar";
import Search from "../components/shared/Search";
import Trends from "../components/shared/Trends";
import WhoToFollow from "../components/shared/WhoToFollow";
import TweetInput from "../components/shared/TweetInput";
import Tweet from "../components/shared/Tweet";
import { useEffect } from "react";

const Timeline = () => {
  const router = useRouter();
  const [tweets, setTweets] = useState([]);

  const user = supabase.auth.user();
  console.log(user);

  useEffect(() => {
    (async () => {
      const { data: tweets, error } = await supabase
        .from("tweets")
        .select("*, profile:profile_id (name, username)")
        .order("created_at", { ascending: false });

      setTweets(tweets);
    })();
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-12">
      <div className="col-span-2 pr-4">
        <Navbar />
      </div>
      <div className="col-span-6 border-l border-r">
        <div className="border-b py-4 px-4">
          <TweetInput />
        </div>

        <div className="mt-4 px-4 divide-y">
          {tweets.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
        </div>
      </div>
      <div className="col-span-4 space-y-4 py-4 pl-4">
        <Search />
        <Trends />
        <WhoToFollow />
      </div>
    </div>
  );
};

export default Timeline;
