import React, { useMemo } from "react";
import Tree from "../3dmodels/Tree";
import Rock from "../3dmodels/Rock";
import Shiba from "../3dmodels/Shiba";

export type ModelType = "tree" | "rock" | "shiba";

interface ModelComponentProps {
  model: ModelType;
}

const ModelComponent = (props: ModelComponentProps) => {
  const model = useMemo(() => {
    switch (props.model) {
      case "tree":
        return <Tree />;
      case "rock":
        return <Rock />;
      case "shiba":
        return <Shiba />;
      default:
        return null;
    }
  }, [props.model]);

  return <div style={{ display: "flex", flex: 1 }}>{model}</div>;
};

export default ModelComponent;
