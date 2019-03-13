import kafka from "kafka-node";

const { Client } = kafka;

export const client = new Client("127.0.0.1:2181",  "kafka-consumer");


// export const client = new Client("localhost:2181", "my-client-id", {
//     retries: 2,
//     sessionTimeout: 300,
//     spinDelay: 100,
// });

