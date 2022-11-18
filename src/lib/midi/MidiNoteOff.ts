import { Note } from "@patrady/chord-js";

export class MidiNoteOff {
  static type = 128; // 1000 0000
  public note: Note;
  public readonly velocity = 0;

  static matches(type: number) {
    return MidiNoteOff.type === type;
  }

  static parse(line: string) {
    const [, timestamp, pitch] = line.split(" ");

    return new MidiNoteOff(parseInt(pitch, 10), new Date(parseInt(timestamp)));
  }

  constructor(pitch: number, public timestamp = new Date()) {
    this.note = Note.fromMidi(pitch);
  }

  toString() {
    return `NOTE_OFF ${this.timestamp.getTime()} ${this.note.getMidiValue()}`;
  }
}
