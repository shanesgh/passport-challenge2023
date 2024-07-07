type FaqCategorySelectionProps = {
  title: string;
  id: number;
};

function FaqCategorySelection({ title, id }: FaqCategorySelectionProps) {
  return (
    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600 list-none hover:white/80">
      <div className="flex items-center p-2 hover:white/80">
        <input
          id={title}
          type="radio"
          value=""
          name="list-radio"
          className="w-4 h-4 "
        />
        <label
          htmlFor={title}
          className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {title}
        </label>
      </div>
    </li>
  );
}

export default FaqCategorySelection;
