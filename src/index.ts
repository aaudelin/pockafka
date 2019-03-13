import kafka from "kafka-node"

const express = require('express');
const app = express();
 
const client = new kafka.Client("192.168.0.112:2181");
 
const topics = [
    {
        topic: "poc-notifications"
    }
];
const options = {
    groupId: 'test',//consumer group id, default `kafka-node-group`
    // Auto commit config
    autoCommit: true,
    autoCommitIntervalMs: 5000,
    // The max wait time is the maximum amount of time in milliseconds to block waiting if insufficient data is available at the time the request is issued, default 100ms
    fetchMaxWaitMs: 500,
    // This is the minimum number of bytes of messages that must be available to give a response, default 1 byte
    fetchMinBytes: 1,
    // The maximum bytes to include in the message set for this partition. This helps bound the size of the response.
    fetchMaxBytes: 2024 * 2024,
    // If set true, consumer will fetch message from the given offset in the payloads
    fromOffset: true,
    // If set to 'buffer', values will be returned as raw buffer objects.
    encoding: 'utf8',
    keyEncoding: 'utf8',
    sessionTimeout: 10000
};

const consumer = new kafka.HighLevelConsumer(client, topics, options);

app.use((req: any, res: any, next: any) =>  {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,PUT,DELETE");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

   consumerChannel.addClient(req, res);

   console.log('Number of actives connection: ' + consumerChannel.getConnectionCount());
   
   next();
});

const sseChannel = require('sse-channel');
const consumerChannel = new sseChannel({
    cors: {
        origins: ['*'] // Defaults to []
    }
});

app.get('/events/', function (req: any, res: any) {
	console.log('Hello ! Waiting for messages...');
	req.socket.setTimeout(Number.MAX_VALUE);

	consumer.on("message", function(message) {
	    console.log(message);
	    consumerChannel.send(message.value);
	});
	 
	consumer.on("error", function(err) {
	    console.log("error", err);
	});
});

process.on("SIGINT", function() {
	console.log('close process');
    consumer.close(true, function() {
    	console.log('close consumer connection');
        process.exit();
    });
});

app.listen(process.env.PORT || 8080);