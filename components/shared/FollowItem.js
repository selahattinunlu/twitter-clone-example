import Image from "next/image";

const FollowItem = ({ image, name, username }) => {
  return (
    <div className="flex items-center space-x-4">
      <div>
        <Image
          src={image}
          className="object-cover rounded-full"
          width={40}
          height={40}
          alt={name}
        />
      </div>
      <div className="flex-1 text-sm">
        <div className="font-bold">{name}</div>
        <div className="text-gray-400">@{username}</div>
      </div>
      <div>
        <button className="py-1 w-24 bg-gray-700 text-white rounded-full">
          Follow
        </button>
      </div>
    </div>
  );
};

export default FollowItem;
