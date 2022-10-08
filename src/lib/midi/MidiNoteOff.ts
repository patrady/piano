export class MidiNoteOff {
  static type = 128; // 1000 0000

  static matches(type: number) {
    return MidiNoteOff.type === type;
  }

  static parse(line: string) {
    const [, timestamp, pitch] = line.split(" ");

    return new MidiNoteOff(parseInt(pitch, 10), new Date(parseInt(timestamp)));
  }

  constructor(public pitch: number, public timestamp = new Date()) {}

  toString() {
    return `NOTE_OFF ${this.timestamp.getTime()} ${this.pitch}`;
  }
}
