import FlowCanvas from "./components/FlowCanvas";
import { useAppStore } from "./store/useAppStore";
import { useState } from "react";

function App() {
  const {
  selectedNodeId,
  selectedAppId,
  setSelectedAppId,
} = useAppStore();;
  const [capacity, setCapacity] = useState(50);
  const [activeTab, setActiveTab] = useState("config");
  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        gridTemplateRows: "60px 1fr",
      }}
    >
      {/* Top Bar */}
      <header
        style={{
          borderBottom: "1px solid #ddd",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        <h3>App Graph Builder</h3>

        <div>
          <button>Fit View</button>
        </div>
      </header>

      {/* Main Layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "70px 1fr 300px",
          height: "100%",
        }}
      >
        {/* Left Rail */}
        <aside
          style={{
            borderRight: "1px solid #ddd",
            padding: "20px",
          }}
        >
          🏠
          <br />
          <br />
          ⚙️
        </aside>

        {/* Canvas */}
        <main>
          <FlowCanvas />
        </main>

        {/* Right Panel */}
        <aside
          style={{
            borderLeft: "1px solid #ddd",
            padding: "20px",
          }}
        >
          <h3>Apps</h3>
          <p>Selected App: {selectedAppId}</p>

          <div onClick={() => setSelectedAppId("app-1")}>
  E-Commerce App
</div>

<div onClick={() => setSelectedAppId("app-2")}>
  CRM System
</div>

<div onClick={() => setSelectedAppId("app-3")}>
  Analytics Dashboard
</div>
          <hr />

          <h3>Inspector</h3>

{selectedNodeId ? (
  <>
    <>
  <p>Node ID: {selectedNodeId}</p>

  <div
    style={{
      background: "green",
      color: "white",
      padding: "4px 8px",
      borderRadius: "12px",
      display: "inline-block",
      marginBottom: "12px",
    }}
  >
    Healthy
  </div>

  <hr />
  <div
  style={{
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
  }}
>
  <button onClick={() => setActiveTab("config")}>
    Config
  </button>

  <button onClick={() => setActiveTab("runtime")}>
    Runtime
  </button>
</div>

 {activeTab === "config" ? (
  <>
    <h4>Config</h4>

    <label>Name</label>
    <input
      type="text"
      defaultValue="Frontend Service"
      style={{ width: "100%", marginBottom: "10px" }}
    />

    <label>Capacity</label>

    <input
      type="range"
      min="0"
      max="100"
      value={capacity}
      onChange={(e) => setCapacity(Number(e.target.value))}
      style={{ width: "100%" }}
    />

    <input
      type="number"
      value={capacity}
      onChange={(e) => setCapacity(Number(e.target.value))}
      style={{ width: "100%" }}
    />
  </>
) : (
  <>
    <h4>Runtime</h4>

    <p>CPU Usage: 35%</p>
    <p>Memory: 512 MB</p>
    <p>Status: Healthy</p>
  </>
)}
</>
  </>
) : (
  <p>Select a node</p>
)}
        </aside>
      </div>
    </div>
  );
}

export default App;