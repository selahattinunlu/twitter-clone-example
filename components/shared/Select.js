import { ChevronDownIcon } from "@heroicons/react/solid";

const Select = ({ label, value, onChange, options }) => {
  return (
    <div className="w-full block border border-gray-200 rounded-lg py-2 px-4 relative">
      <label className={`text-gray-500 text-sm`}>
        <div>{label}</div>
      </label>

      <select
        className="w-full outline-none appearance-none cursor-pointer"
        value={value}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <div className="absolute right-5 top-0 flex items-center h-full pointer-events-none">
        <ChevronDownIcon className="w-8 h-8 text-gray-500" />
      </div>
    </div>
  );
};

export default Select;
