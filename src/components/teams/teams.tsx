import TeamsCard from "./teams-card";

const Teams = () => {
  return (
    <div className="bg-white mt-4 p-4 rounded-lg pb-8 border md:border-none shadow-sm">
      <h1 className="text-gray-800 font-semibold text-2xl">Team</h1>
      <p className="py-4 mt-2 mb-4 md:mb-0">
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed.
      </p>
      <div className="space-y-4">
        <TeamsCard
          memberName="John Smith"
          src="/john.png"
          designation="Designation here"
          about="Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed."
        />
        <TeamsCard
          memberName="Elina Smith"
          src="/elena.png"
          designation="Designation here"
          about="Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed."
        />
        <TeamsCard
          memberName="John Smith"
          src="/smith.png"
          designation="Designation here"
          about="Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed."
        />
      </div>
    </div>
  );
};

export default Teams;
