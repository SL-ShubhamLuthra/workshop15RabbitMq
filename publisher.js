const amqp=require('amqplib/callback_api')

amqp.connect('amqp://localhost',(err,connection)=>{
    if(err)
    {
            console.log(err)
    }
    connection.createChannel((err,channel)=>{
        if(err)
        {
            console.log(err);
        }
        queue='myQueue'
        message='Hello,My name is Shubham'

        channel.assertQueue(queue,{durable:false});
                
        channel.sendToQueue(queue,Buffer.from(message))
        setTimeout(()=>{
            connection.close()
        },1000)
    
    })

   

    
})