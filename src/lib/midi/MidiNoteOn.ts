export class MidiNoteOn {
  static type = 144; // 1001 000

  static matches(type: number) {
    return MidiNoteOn.type === type;
  }

  static parse(line: string) {
    const [, timestamp, pitch, velocity] = line.split(" ");

    return new MidiNoteOn(
      parseInt(pitch, 10),
      parseInt(velocity, 10),
      new Date(parseInt(timestamp))
    );
  }

  constructor(
    public pitch: number,
    public velocity: number,
    public timestamp = new Date()
  ) {}

  toString() {
    return `NOTE_ON ${this.timestamp.getTime()} ${this.pitch} ${this.velocity}`;
  }
}
