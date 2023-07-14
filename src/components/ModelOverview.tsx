import React, { useState } from "react";
import "./ModelOverview.scss";

import ModelComponent, { ModelType } from "./ModelComponent";

const rootClassName = "model-overview";

const data = [
  { title: "Show a tree", id: "tree" as ModelType },
  { title: "Show a rock", id: "rock" as ModelType },
  { title: "Show a shiba", id: "shiba" as ModelType },
];

const ModelOverview = () => {
  const [selectedModel, setSelectedModel] = useState<ModelType>("tree");
  console.log(selectedModel);

  return (
    <div className={rootClassName}>
      <div className={`${rootClassName}--container`}>
        <div className={`${rootClassName}--container--left`}>
          {data.map((obj, i) => (
            <ul key={i} className={`${rootClassName}--container--list`}>
              <li
                key={i}
                className={`${rootClassName}--container--listItem`}
                onClick={() => setSelectedModel(obj.id)}
              >
                {obj.title}
              </li>
            </ul>
          ))}
        </div>
        <div className={`${rootClassName}--container--right`}>
          <ModelComponent model={selectedModel} />
        </div>
      </div>
    </div>
  );
};

export default ModelOverview;
