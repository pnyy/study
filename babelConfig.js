module.exports = (type)=>{
  const presets =  [
    ["@babel/preset-env", {
      "modules": false,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      },
      "useBuiltIns": "entry"
    }],
    "@babel/preset-react"
  ]
  const plugins = [
    "@babel/plugin-transform-runtime",
    // Stage 2
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    "@babel/plugin-proposal-function-sent",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-throw-expressions",
    // Stage 3
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-syntax-import-meta",
    ["@babel/plugin-proposal-class-properties", { "loose": false }],
    "@babel/plugin-proposal-json-strings",
  ];
  if(type==='client'){
    plugins.push(["import", { "libraryName": "antd", "libraryDirectory": "es", "style":true }])
  }
  return {
    presets,
    plugins
  }
}