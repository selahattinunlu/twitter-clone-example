import Image from "next/image";
import {
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
  ReplyIcon,
} from "@heroicons/react/solid";

const Tweet = () => {
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
            <div className="font-bold">John Doe</div>
            <div className="text-gray-400">@johndoe</div>
            <div className="text-gray-400">3h</div>
          </div>
          <button>
            <DotsHorizontalIcon className="w-4 h-4 text-gray-300" />
          </button>
        </header>
        <div className="py-2">Hello World</div>
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
