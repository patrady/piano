import { PedalController } from "./controllers/PedalController";
import { MidiMessage } from "./MidiMessage";
import { MidiNoteOff } from "./MidiNoteOff";
import { MidiNoteOn } from "./MidiNoteOn";
import { Song } from "./Song";

type NoteDownCallback = (midiNote: MidiNoteOn) => void;
type NoteUpCallback = (midiNote: MidiNoteOff) => void;
type PedalDownCallback = (controller: PedalController) => void;
type PedalUpCallback = (controller: PedalController) => void;

export class Midi {
  private onNoteDownObservers: NoteDownCallback[] = [];
  private onNoteUpObservers: NoteUpCallback[] = [];
  private onPedalDownObservers: PedalDownCallback[] = [];
  private onPedalUpObservers: PedalUpCallback[] = [];
  private song: Song = new Song();

  public start() {
    navigator
      .requestMIDIAccess()
      .then((access) => this.onSuccess(access))
      .catch((e) => console.error(e));
  }

  public record() {
    this.song = new Song();
    this.song.start();

    this.onNoteDown((m) => this.song.addNote(m));
    this.onNoteUp((m) => this.song.releaseNote(m));
    this.onPedalDown(() => this.song.addPedal());
    this.onPedalUp(() => this.song.releasePedal());
  }

  public stopRecording() {
    console.log(this.song.getNotes().map((message) => message.toString()));
  }

  public onNoteDown(callback: NoteDownCallback) {
    this.onNoteDownObservers.push(callback);
  }

  public onNoteUp(callback: NoteUpCallback) {
    this.onNoteUpObservers.push(callback);
  }

  public onPedalDown(callback: PedalDownCallback) {
    this.onPedalDownObservers.push(callback);
  }

  public onPedalUp(callback: PedalUpCallback) {
    this.onPedalUpObservers.push(callback);
  }

  private onSuccess(access: WebMidi.MIDIAccess) {
    const inputs = access.inputs.values();

    for (
      let input = inputs.next();
      input && !input.done;
      input = inputs.next()
    ) {
      input.value.onmidimessage = this.onMessage.bind(this);
    }
  }

  private onMessage({ data }: WebMidi.MIDIMessageEvent) {
    const { type, byte1, byte2 } = MidiMessage.decode(data);

    const message = MidiMessage.for(type, byte1, byte2);

    if (message instanceof MidiNoteOn) {
      this.onNoteDownObservers.forEach((observer) => observer(message));
    } else if (message instanceof MidiNoteOff) {
      this.onNoteUpObservers.forEach((observer) => observer(message));
    } else if (message instanceof PedalController) {
      if (message.isOn()) {
        this.onPedalDownObservers.forEach((observer) => observer(message));
      } else {
        this.onPedalUpObservers.forEach((observer) => observer(message));
      }
    }
  }
}
