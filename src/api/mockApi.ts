export const getApps = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    { id: "app-1", name: "E-Commerce App" },
    { id: "app-2", name: "CRM System" },
    { id: "app-3", name: "Analytics Dashboard" },
  ];
};
export const getGraph = async (_appId: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    nodes: [
      {
        id: "1",
        position: { x: 100, y: 100 },
        data: {
          label: "Frontend",
          status: "Healthy",
          cpu: 50,
        },
      },
      {
        id: "2",
        position: { x: 350, y: 100 },
        data: {
          label: "API",
          status: "Healthy",
          cpu: 75,
        },
      },
      {
        id: "3",
        position: { x: 600, y: 100 },
        data: {
          label: "Database",
          status: "Degraded",
          cpu: 30,
        },
      },
    ],

    edges: [
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
    ],
  };
};