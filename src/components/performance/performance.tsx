import LowHighBar from "./low-high-bar";

const Performance = ({ activeCategory }: { activeCategory: string }) => {
  return (
    <div className={`bg-white rounded-t-lg p-4 space-y-6 mt-4 ${activeCategory !== "overview" && "rounded-b-lg"}`}>
      <h1 className="text-xl font-semibold text-gray-800">Performance</h1>
      <LowHighBar
        low="Today's Low"
        high="Today's High"
        lowPrice={46930.32}
        highPrice={49343.34}
        livePrice={48673.83}
      />
      <LowHighBar
        low="52W Low"
        high="52W High"
        lowPrice={16399.32}
        highPrice={49343.34}
      />
    </div>
  );
};

export default Performance;
