// single selection
// multiple selevction
import data from "./data";
import "./accordion.css";

import { useState } from "react";

const accordion = () => {
  const [selected, setSelected] = useState(null);
  const hanndleSingleSelection = (curid) => {
    console.log(curid);
    setSelected(curid === selected ? null : curid);
  };

  return (
    <div className="wrapper ">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div className="tittle"
              onClick={() => hanndleSingleSelection(dataItem.id)}
              >
                <h3>{dataItem.question}</h3>
                <span >
                  <button> {selected != dataItem.id ? "+" : "-"}</button>
                </span>
              </div>
              {selected === dataItem.id ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
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
