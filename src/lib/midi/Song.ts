import { MidiNoteOff } from "./MidiNoteOff";
import { MidiNoteOn } from "./MidiNoteOn";

type Note = MidiNoteOn | MidiNoteOff;

export class Song {
  private notes: Note[] = [];
  private startTime: Date;
  private isPedalDown = false;
  private sustainedNotes: MidiNoteOff[] = [];

  constructor() {
    this.startTime = new Date();
  }

  public start() {
    this.startTime = new Date();
  }

  public getStartTime() {
    return this.startTime.getTime();
  }

  public getNotes() {
    return this.notes;
  }

  public addNote(note: MidiNoteOn | MidiNoteOff) {
    this.notes.push(note);

    return this;
  }

  public addSustainedNote(note: MidiNoteOff) {
    this.sustainedNotes.push(note);

    return this;
  }

  public releaseNote(note: MidiNoteOff) {
    if (this.isSustained()) {
      return this.addSustainedNote(note);
    }

    return this.addNote(note);
  }

  public addPedal() {
    this.isPedalDown = true;
  }

  public releasePedal() {
    this.prolongNotes();
    this.resetSustainedNotes();
    this.isPedalDown = false;
  }

  public isSustained() {
    return this.isPedalDown;
  }

  private resetSustainedNotes() {
    this.sustainedNotes = [];
  }

  private prolongNotes() {
    this.sustainedNotes.forEach((note) => {
      note.timestamp = new Date();
      this.addNote(note);
    });
  }
}
