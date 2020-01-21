module.exports = {
  cache: {
    cacheId: "LargeReact",
    runtimeCaching: [
      {
        handler: "fastest",
        urlPattern: "/$"
      }
    ],
    staticFileGlobs: ["dist/**/*"]
  },
  manifest: {
    background: "#FFFFFF",
    title: "LargeReact",
    shortName: "PWA",
    themeColor: "#FFFFFF"
  }
};
