import amqp from 'amqplib';

export const sendToRabbitMQ = async (data: any) => {
    const connection = await amqp.connect(process.env.RABBITMQ_URL);
    const channel = await connection.createChannel();
    const queue = process.env.QUEUE;

    await channel.assertQueue(queue, { durable: true });
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(data)));
    setTimeout(() => {
        connection.close();
    }, 500);
};
