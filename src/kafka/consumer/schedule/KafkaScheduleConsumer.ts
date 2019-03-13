import { Client, HighLevelConsumer } from "kafka-node";
import uuid from "uuid";
import KafkaServiceConsumer from "../KafkaConsumer";

export default class KafkaScheduleConsumer extends KafkaServiceConsumer {

    constructor(clientInstance: Client, topics: any, options: any) {
        super(clientInstance, topics, options);
      }

    public init() {
        super.on("message", function(decodedMessage) {

         console.log(decodedMessage);
            //Events is a Sequelize Model Object. 
            return {
                data: decodedMessage.value
            };
        });
         
        super.on("error", function(err) {
            console.log("error", err);
        });
    }

}