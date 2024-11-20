module.exports = {
  presets: ["next/babel", "@babel/preset-typescript"],
  plugins: [["@babel/plugin-transform-react-jsx", { runtime: "automatic" }]],
};
