import { Client, HighLevelProducer } from "kafka-node";

import { client } from "../client";

export default class KafkaService extends HighLevelProducer {
  constructor(clientInstance: Client) {
    super(clientInstance);
  }

  public sendRecord(event: {id: string, timestamp: number, data: string}, topic: string) {
      const buffer = new Buffer(JSON.stringify(event));

      const record = [
          {
              attributes: 1,
              messages: buffer,
              topic,
          },
      ];

      super.send(record, () => {console.log(record)});
  }
}
