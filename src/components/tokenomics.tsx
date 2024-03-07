const Tokenomics = () => {
    const crowdscale = 80;
    const foundation = 20;
  return (
    <div className="p-4 bg-white rounded-lg mt-4">
      <h1 className="text-gray-800 text-2xl font-semibold">Tokenomics</h1>
      <h2 className="font-semibold text-gray-800 py-4 text-xl">
        Initial Distribution
      </h2>
      <div>
        <div></div>
        <div>
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <p className="text-gray-600">Crowdsale investors: {crowdscale}%</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <p className="text-gray-600">Foundation: {foundation}%</p>
          </div>
        </div>
      </div>
      <p className="text-gray-700 py-4">
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque
        fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat
        pendisse enim facilisi diam ut sed Quam scelerisque fermentum sapien
        morbi sodales odio sed rhoncus
      </p>
    </div>
  );
};

export default Tokenomics;
