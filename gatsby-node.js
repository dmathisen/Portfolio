exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    // running build
    // ignore scripts that use browser properties (window/document/etc)
    actions.setWebpackConfig({
      module: {
        rules: [
          { test: /materialize-css/, use: loaders.null() }
        ]
      }
    })
  }
}