module.exports = {
  apps: [
    {
      name: "dashboard-ics-frontend",
      script: "npm",
      args: "start",
      env: {
        PORT: 3001,
        NODE_ENV: "production"
      }
    }
  ]
};
