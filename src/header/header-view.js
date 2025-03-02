import createElement from "../utilities/creator.js";
import {
    headerParams,
    mainTitleParams,
    nightBtnParams,
    wrapperIconBtnParams,
    wrapperHeaderElementParams,
} from "./params/header-params.js";
import nightMode from "../controller/nightMode.js";
import filterCreator from "../filter-notes/filter-notes.js";

const createHeader = () => {
    const headerElement = createElement(headerParams);
    const wrapperHeaderElement = createElement(wrapperHeaderElementParams);
    const mainTitle = createElement(mainTitleParams);
    const nightModeBtn = createElement(nightBtnParams);
    const wrapperIconElement = createElement(wrapperIconBtnParams);
    const input = filterCreator();

    headerElement.insertAdjacentElement("beforeend", mainTitle);
    headerElement.insertAdjacentElement("beforeend", wrapperHeaderElement);
    wrapperHeaderElement.insertAdjacentElement("beforeend", input);
    wrapperHeaderElement.insertAdjacentElement("beforeend", nightModeBtn);
    nightModeBtn.insertAdjacentElement("beforeend", wrapperIconElement);

    nightModeBtn.addEventListener("click", nightMode);

    return headerElement;
};

export default createHeader;
