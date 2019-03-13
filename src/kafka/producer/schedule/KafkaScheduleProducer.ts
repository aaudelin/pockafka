import { Client, HighLevelProducer, Message } from "kafka-node";
import uuid from "uuid";
import KafkaService from "../KafkaProducer";

export default class KafkaScheduleProducer extends KafkaService {

  constructor(client: Client) {
    super(client);
  }

  public init() {
    super.on("message", function(message : Message) {
        // Read string into a buffer.
        var decodedMessage = message;
     
        //Events is a Sequelize Model Object. 
        return {
            data: JSON.stringify(decodedMessage.value),
            createdAt: new Date()
        };
    });
     
    super.on("error", function(err) {
        console.log("error", err);
    });
     
    process.on("SIGINT", function() {
        super.close(true, function() {
            process.exit();
        });
    });
  }
}
