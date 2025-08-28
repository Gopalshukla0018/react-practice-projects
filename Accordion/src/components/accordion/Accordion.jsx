// single selection
// multiple selevction
import data from "./data";
import "./accordion.css";

import {  useState } from "react";

const accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelectoion] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const hanndleSingleSelection = (curid) => {
    setSelected(curid === selected ? null : curid);
  };
  const handleMultiSelection = (curid) => {
    let copyMul = [...multiple];
    const findIndexOfCurId = copyMul.indexOf(curid);
    if (findIndexOfCurId == -1) copyMul.push(curid);
    else copyMul.splice(findIndexOfCurId, 1);
    setMultiple(copyMul);
  };


  return (
    <div className="wrapper ">
      <button
        onClick={() => {
          setEnableMultiSelectoion(!enableMultiSelection);
        }}
      >
        {enableMultiSelection
          ? "Enable Multiselection"
          : "Disable Multiselection"}
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                className="tittle"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => hanndleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>
                  <button> {selected != dataItem.id ? "+" : "-"}</button>
                </span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content"> {dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content"> {dataItem.answer}</div>
                  )}
              {/* {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div> No Data Found</div>
        )}
      </div>
    </div>
  );
};

export default accordion;
