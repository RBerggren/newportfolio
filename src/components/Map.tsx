import React from "react";
import {
  Annotation,
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/europe.json";

const Map = () => {
  return (
    <ComposableMap
      style={{ width: "100%", height: "100%" }}
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -53.0, 0],
        scale: 1200,
      }}
    >
      <ZoomableGroup center={[18.06324, 59.334591]}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="grey"
                stroke="#FFFFFF"
                strokeWidth={0.5}
              />
            ))
          }
        </Geographies>
        <Annotation
          subject={[21.47944, 65.31717]}
          dx={-90}
          dy={-30}
          connectorProps={{
            stroke: "white",
            strokeWidth: 2,
            strokeLinecap: "round",
          }}
        >
          <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
            From Piteå
          </text>
        </Annotation>

        <Annotation
          subject={[18.06324, 59.334591]}
          dx={-90}
          dy={-30}
          connectorProps={{
            stroke: "white",
            strokeWidth: 2,
            strokeLinecap: "round",
          }}
        >
          <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
            Living in Stockholm
          </text>
        </Annotation>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default Map;
