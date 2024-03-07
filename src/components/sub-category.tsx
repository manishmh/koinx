const SubCategory = ({
  category,
  onClick,
  activeCategory,
}: {
  category: string;
  onClick: (category: string) => void;
  activeCategory: string;
}) => {
  return (
    <div
      className={` font-medium pb-2 cursor-pointer capitalize
        ${
          category.toLocaleLowerCase() === activeCategory
            ? "text-blue-800 border-b-[3px] border-blue-700"
            : "text-gray-700"
        }
    `}
    onClick={() => onClick(category.toLocaleLowerCase())}
    >
      {category}
    </div>
  );
};

export default SubCategory;
