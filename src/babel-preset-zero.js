module.exports = () => ({
  presets: [
    [
      require.resolve("@babel/preset-env"),
      { modules: "commonjs", loose: true },
    ],
    require.resolve("@babel/preset-react"),
  ],
});
