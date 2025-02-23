import createElement from "../utilities/creator.js";
import filterInputParams from "./filter-notes-params.js";

const filterCreator = () => {
    const filterInput = createElement(filterInputParams);

    return filterInput;
};

export default filterCreator;
