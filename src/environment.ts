export const environment = {
  baseUrl: process.env.BASE_URL,
  devBaseUrl: process.env.DEV_BASE_URL,
  env: process.env.NODE_ENV,
  mysql: {
    database: 'green-piece-db',
    host: '127.0.0.1',
    password: '',
    port: Number('3306'),
    username: 'root',
  },
  port: Number('3306') || 8001,
};
