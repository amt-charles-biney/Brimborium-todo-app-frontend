import { faSort, faSortNumericAsc } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TableHeaders = () => {
  return (
    <ul className="flex gap-10 px-5 font-bold text-lg pb-3 text-center">
      <li className="w-[35%] text-left cursor-pointer">
        Topic <FontAwesomeIcon className="text-xs" icon={faSort} />
      </li>
      <li className="w-[15%] cursor-pointer">
        Deadline <FontAwesomeIcon className="text-sm" icon={faSortNumericAsc} />
      </li>
      <li className="w-[10%] cursor-pointer">
        Status <FontAwesomeIcon className="text-xs" icon={faSort} />
      </li>
      <li className="w-[15%] cursor-pointer">
        Project <FontAwesomeIcon className="text-xs" icon={faSort} />
      </li>
      <li className="w-[15%] cursor-pointer">
        Progress <FontAwesomeIcon className="text-xs" icon={faSort} />
      </li>
      <li className="w-[10%]">Assigned</li>
    </ul>
  );
};

export default TableHeaders;
