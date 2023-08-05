import React from "react";
import { Tree } from "react-d3-tree";
import { useMyContext } from "./MyContext";
// import ScenarioMap from "./ScenarioMap";


const myTreeData = [
  {
    name: "Root",
    children: [
      {
        name: "You see the recruiter",
        children: [
          {
            name: "Ignore",
            children: [
              { name: "", children: [{}, {}] },
              { name: "", children: [{}, {}] },
            ],
          },
          {
            name: "Ask Him More",
            children: [
              {
                name: "More about Navy?",
                children: [
                  {
                    name: "Job Choice?",
                    children: [
                      {
                        name: "Absolutely!",
                        children: [{}, {}],
                      },
                      { name: "", children: [{}, {}] },
                    ],
                  },
                  {
                    name: "Navy Benefits?",
                    children: [
                      { name: "", children: [{}, {}] },
                      { name: "", children: [{}, {}] },
                    ],
                  },
                ],
              },
              {},
            ],
          },
        ],
      },
    ],
  },
  {
    name: "More about Navy?",
    children: [
      {
        name: "Job Choice?",
        children: [
          {
            name: "Absolutely!",
            children: [{}, {}],
          },
          { name: "", children: [{}, {}] },
        ],
      },
      {
        name: "Navy Benefits?",
        children: [
          { name: "", children: [{}, {}] },
          { name: "", children: [{}, {}] },
        ],
      },
    ],
  },
];

const DecisionTree = () => {
  const { decisionMade } = useMyContext();

  const getNodeStyle = (node) => {
    if (node.name === decisionMade) {
      return { fill: "green" };
    }
    return null;
  };

  console.log(decisionMade);
  return (
    <div style={{ width: "100%", height: "90vh" }}>
      <Tree
        data={myTreeData}
        orientation="vertical"
        translate={{ x: 850, y: 150 }}
        nodeSvgShape={{
          shape: "circle",
          shapeProps: { r: 10 },
          shapeStyle: getNodeStyle,
        }}
      />
    </div>
  );
};

export default DecisionTree;
