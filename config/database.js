module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfhtv89gp3jh03nsqtbg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'porfolioweb_nv8e'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '5JohjznST2zFwVjfG1ZMhMdmhvpxJm7w'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
