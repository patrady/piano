import { Note } from "@patrady/chord-js";

export class MidiNoteOn {
  static type = 144; // 1001 000

  public note: Note;

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
    pitch: number,
    public velocity: number,
    public timestamp = new Date()
  ) {
    this.note = Note.fromMidi(pitch);
  }

  toString() {
    return [
      "NOTE_ON",
      this.timestamp.getTime(),
      this.note.getMidiValue(),
      this.velocity,
    ].join(" ");
  }
}
