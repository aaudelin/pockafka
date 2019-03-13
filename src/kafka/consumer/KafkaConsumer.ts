import { Client, HighLevelConsumer } from "kafka-node";

import { client } from "../client";

export default class KafkaServiceConsumer extends HighLevelConsumer {
    constructor(clientInstance: Client, topics: any, options: any) {
        super(clientInstance, topics, options);
      }

      
}