import { PedalController } from "./controllers/PedalController";

export class MidiController {
  static status = 176; // 1011 0000

  static matches(status: number) {
    return MidiController.status === status;
  }

  static for(controller: number, value: number, timestamp = new Date()) {
    if (PedalController.equals(controller)) {
      return new PedalController(value, timestamp);
    }
  }

  static parse(line: string) {
    const [, timestamp, controller, value] = line.split(" ");

    return MidiController.for(
      parseInt(controller),
      parseInt(value),
      new Date(parseInt(timestamp))
    );
  }
}
