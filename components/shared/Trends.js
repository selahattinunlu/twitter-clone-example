import TrendItem from "./TrendItem";

const Trends = () => {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <header className="text-lg font-bold">Trends for you</header>

      <div className="space-y-4 mt-4">
        <TrendItem
          label="Trending in Turkey"
          keyword="#reactjs"
          count="1.2k Tweets"
        />

        <TrendItem
          label="Trending in Turkey"
          keyword="#javascript"
          count="24.2k Tweets"
        />

        <TrendItem
          label="Trending in Turkey"
          keyword="#nextjs"
          count="48.4k Tweets"
        />

        <TrendItem
          label="Trending in Turkey"
          keyword="#programming"
          count="250.4k Tweets"
        />
      </div>
    </div>
  );
};

export default Trends;
