export const config = {
  mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase_test',
  port: process.env.PORT || 3000,
  rabbitMqUrl: process.env.RABBITMQ_URL || 'amqp://localhost',
  env: process.env.NODE_ENV || 'development',
};
