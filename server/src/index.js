const
  Server = require('./lib/server'),
  Db = require('./lib/db'),
  Globby = require('globby');

module.exports = async (config) => {

  const { hostname, port } = config;
  const server = Server({ hostname, port });

  const db = Db(config.db);

  const context = {
    db,
    route: server.route,
    api: {}
  };

  const requires = [];
  for (let name of [ 'api', 'routes' ]) {
    requires.push(
      `./${name}/**/*.js`,
      `!./${name}/**/_*.js`
    );
  }

  for (let filename of await Globby(requires, { cwd: __dirname, absolute: true })) {
    require(filename)(context);
  }

  server.run();
};
