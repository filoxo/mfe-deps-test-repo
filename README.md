# mfe-dependencies-test-fixtures

These packages serve as the fixtures used for developing against and testing [mfe-dependency-analyzer](https://github.com/filoxo/mfe-dependency-analyzer). The intent is these should match real world applications. There's going to be a little bit of everything in here.

## Packages

The various packages will have different setups to ensure widest support and to find edge cases. While some of the tests in mfe-dependencies-analyzer are created in-memory, these are the opposite. To best approximate real-world scenarios we need to have real files, configs, packages/node_modules, resolution, etc.

Below is a summary of the packages.

- **home**
  - framework: react
  - externals: [...webpack-single-spa-react.externals, rxjs]
  - bundler: Webpack

## Development

- `git clone` this project
- `yarn install`
- `yarn bootstrap` to install packages deps
