const TrendItem = ({ label, keyword, count }) => {
  return (
    <div>
      <div className="text-xs text-gray-400">{label}</div>
      <div className="font-semibold">{keyword}</div>
      <div className="text-xs text-gray-400">{count} Tweets</div>
    </div>
  );
};

export default TrendItem;
