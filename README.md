# Advanced Bootstrap Blocks

Lightweight, flexible block framework for building Bootstrap 4 layouts and 
page-templates in the WordPress editor. 

This is an experimental version of advanced-bootstsrap-blocks for WordPress 
5.5.x and beyond. Expect breaking changes.

## Requirements

Advanced Bootstrap Blocks relies on `wp-scripts` under the hood and requires
`node` and `npm` to build from source. Docker is recommended for local development and testing.

## Plugin Development

### Getting Started

#### Clone this repository

  ```sh
  git clone https://github.com/shrthnd/advanced-bootstrap-blocks-v2
  ```

#### Install dependencies

  ```sh
  cd advanced-bootstrap-blocks-v2
  npm install
  ```

### Available Scripts

* `npm run start` to watch files and recompile on change
* `npm run build` to build once
* `npm run lint:js` to report errors based on a combination of .eslintrc 
settings and .editorconfig settings
* `npm run format:js` to format code based on the 
settings in `.prettierrc.js`
* `npm run test:unit` to run tests in `src/__tests__` (or any 
file with `[name].test.js`)
* `npm run test:unit:watch` to run interactive test environment
* `npm run test:unit:update` to update unit-test snapshots

### Local Testing with WordPress

#### Configure environment variables 

  ```sh
  cp .env.sample .env # copy example
  vim .env # edit with vim or your preferred text editor
  ```

#### Run WordPress (apache, php, mysql/mariadb) with Docker 

  ```sh 
  docker-compose up -d # start
  docker-compose logs wordpress # view apache logs
  docker-compose logs database # view database logs
  docker-compose stop # stop
  ```
  
#### Reset Wordpress

  ```sh
  docker-compose down # destroy containers
  rm -rf ./docker # remove wordpress core and database
  docker-compose up -d --force-recreate # start again
  ```

## Further Reading

* @wordpress/scripts:  [README](https://github.com/WordPress/gutenberg/blob/master/packages/scripts/README.md), [source](https://github.com/WordPress/gutenberg/blob/master/packages/scripts/config/jest-unit.config.js)
