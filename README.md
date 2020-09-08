# Advanced Bootstrap Blocks

Lightweight, flexible block framework for building Bootstrap 4 layouts and 
page-templates in the WordPress editor. 

This is an experimental version of advanced-bootstsrap-blocks for WordPress 
5.5.x and beyond. Expect breaking changes.

## Requirements

Advanced Bootstrap Blocks relies on `wp-scripts` under the hood and requires
`node` and `npm` to build from source.

Docker is recommended for running a local copy of WordPress. This project includes a 
basic `docker-compose.yml` configuration to get you started.

Are these instructions giving you trouble? Please report an [issue](https://github.com/shrthnd/advanced-bootstrap-blocks-v2/issues).

## Plugin Development

### Getting Started

**Clone this repository**
  ```sh
  git clone https://github.com/shrthnd/advanced-bootstrap-blocks-v2
  ```

**Install dependencies**
  ```sh
  cd advanced-bootstrap-blocks-v2
  npm install
  ```

**Run WordPress (apache, php, mysql) with Docker**
  ```sh 
  docker-compose up -d # start
  docker-compose logs wordpress # view apache logs
  docker-compose logs database # view database logs
  docker-compose stop # stop
  ```

### Available Scripts

* `npm run lint:js` will report errors based on a combination of .eslintrc 
settings and .editorconfig settings
* `npm run format:js` may do unexpected things to your code based on the 
settings defined in .prettierrc.js
* `npm run test:unit` will run all tests inside ./src/\_\_tests\_\_ (or any 
file with name.test.js)
* `npm run test:unit:update` will update unit-test snapshots


### Further Reading

* [@wordpress/scripts](https://github.com/WordPress/gutenberg/blob/master/packages/scripts/README.md)
