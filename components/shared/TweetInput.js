import { useState } from "react";
import Image from "next/image";
import supabase from "../../lib/supabase";

const TweetInput = () => {
  const user = supabase.auth.user();
  const [tweet, setTweet] = useState("");

  const sendTweet = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.from("tweets").insert({
      body: tweet,
    });

    console.log(data, error);
  };

  return (
    <div className="flex space-x-4">
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
        <textarea
          type="text"
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
          placeholder="What's happening?"
          className="w-full"
        ></textarea>

        <div className="flex justify-end mt-2">
          <button
            onClick={sendTweet}
            className="bg-primary text-white py-2 px-6 rounded-full"
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default TweetInput;
