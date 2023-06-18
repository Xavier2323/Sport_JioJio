module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "babel-plugin-styled-components",
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "~Compoents": "./src/components",
            "~Images": "./src/images",
            "~JioJio": "./src/pages/newjiopage",
            "~Notification": "./src/pages/Notification",
            "~Personal": "./src/pages/Personal",
            "~Category": "./src/pages/Category",
            "~Discover": "./src/pages/Discover",
            "~LoginProcess": "./src/screens",
            "~Pages": "./src/pages",
            "~Src": "./src",
          },
        },
      ],
    ],
  };
};
