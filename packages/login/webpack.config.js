const webpackMerge = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa-react-ts')

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'example',
    projectName: 'login',
    webpackConfigEnv,
    argv,
    // This is necessary so that we can resolve the TypeScript module from outside of the project
    typescriptPath: require.resolve('typescript', { paths: [__dirname] }),
  })

  return webpackMerge.smart(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
  })
}
