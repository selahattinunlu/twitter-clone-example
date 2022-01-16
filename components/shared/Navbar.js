import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  MailIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/solid";

import NavbarLink from "./NavbarLink";
import TwitterLogo from "../../assets/images/twitter-logo.svg";

const Navbar = (props) => {
  return (
    <div className="space-y-8 py-4">
      <div>
        <TwitterLogo className="w-6 h-6 text-primary" />
      </div>
      <div className="space-y-6">
        <NavbarLink Icon={HomeIcon} label="Home" href="/" active />
        <NavbarLink Icon={HashtagIcon} label="Explore" href="/explore" />
        <NavbarLink Icon={BellIcon} label="Notification" href="/notification" />
        <NavbarLink Icon={MailIcon} label="Messages" href="/messages" />
        <NavbarLink Icon={BookmarkIcon} label="Bookmark" href="/bookmark" />
        <NavbarLink Icon={ClipboardListIcon} label="List" href="/list" />
        <NavbarLink Icon={UserIcon} label="Profile" href="/profile" />
        <NavbarLink Icon={DotsCircleHorizontalIcon} label="More" href="/more" />
      </div>
      <div>
        <button className="w-full py-2 text-center bg-primary text-white rounded-full">
          Tweet
        </button>
      </div>
    </div>
  );
};

export default Navbar;
