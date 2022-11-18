import { MidiController } from "./MidiController";
import { MidiNoteOff } from "./MidiNoteOff";
import { MidiNoteOn } from "./MidiNoteOn";

export abstract class MidiMessage {
  static for(type: number, byte1: number, byte2: number) {
    if (MidiController.matches(type)) {
      return MidiController.for(byte1, byte2);
    }
    if (MidiNoteOn.matches(type)) {
      return new MidiNoteOn(byte1, byte2);
    }
    if (MidiNoteOff.matches(type)) {
      return new MidiNoteOff(byte1);
    }
  }

  static decode(data: Uint8Array) {
    const [status, byte1, byte2] = data;
    const type = status & 0xf0;
    const channel = status & 0x0f;

    return { type, channel, byte1, byte2 };
  }
}
