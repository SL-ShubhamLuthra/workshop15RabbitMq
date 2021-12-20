const amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost', (err, connection) => {
    if (err) {
        console.log(err)
    }
    connection.createChannel((err, channel) => {
        if (err) {
            console.log(err)
        }
        queue = 'myQueue'

        channel.assertQueue(queue, { durable: false })
        channel.consume(queue, (msg) => {
            console.log(`2nd subscriber Received Message:${msg.content.toString()}`)
                channel.ack(msg);

        }


        )

    })

})