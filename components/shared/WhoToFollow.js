import FollowItem from "./FollowItem";

const WhoToFollow = () => {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <header className="text-lg font-bold">Who to follow</header>

      <div className="mt-4 space-y-4">
        <FollowItem
          image="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          name="John Doe"
          username="johndoe"
        />

        <FollowItem
          image="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          name="John Doe"
          username="johndoe"
        />

        <FollowItem
          image="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          name="John Doe"
          username="johndoe"
        />

        <FollowItem
          image="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          name="John Doe"
          username="johndoe"
        />
      </div>
    </div>
  );
};

export default WhoToFollow;
