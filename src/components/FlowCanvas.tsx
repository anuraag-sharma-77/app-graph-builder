import { useAppStore } from "../store/useAppStore";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
} from "@xyflow/react";

const nodes = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: { label: "Frontend" },
  },
  {
    id: "2",
    position: { x: 350, y: 100 },
    data: { label: "API" },
  },
  {
    id: "3",
    position: { x: 600, y: 100 },
    data: { label: "Database" },
  },
];

const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
  },
];

export default function FlowCanvas() {
  const { setSelectedNodeId } = useAppStore();

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        onNodeClick={(_, node) => {
          setSelectedNodeId(node.id);
        }}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}