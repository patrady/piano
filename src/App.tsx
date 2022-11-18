import "./App.css";
import { Midi } from "./lib/midi";
import * as Tone from "tone";
import { MidiNoteOn } from "./lib/midi/MidiNoteOn";
import { MidiNoteOff } from "./lib/midi/MidiNoteOff";
import { Song } from "./lib/midi/Song";

const recordedAt = new Date(2022, 1, 1, 0, 0, 0, 0);
const maryHadALittleLamb = new Song();
maryHadALittleLamb
  .addNote(new MidiNoteOn(52, 34, new Date(recordedAt.getTime() + 0)))
  .addNote(new MidiNoteOff(52, new Date(recordedAt.getTime() + 114)))
  .addNote(new MidiNoteOn(50, 35, new Date(recordedAt.getTime() + 600)))
  .addNote(new MidiNoteOff(50, new Date(recordedAt.getTime() + 711)))
  .addNote(new MidiNoteOn(48, 38, new Date(recordedAt.getTime() + 1154)))
  .addNote(new MidiNoteOff(48, new Date(recordedAt.getTime() + 1281)))
  .addNote(new MidiNoteOn(50, 46, new Date(recordedAt.getTime() + 1723)))
  .addNote(new MidiNoteOff(50, new Date(recordedAt.getTime() + 1855)))
  .addNote(new MidiNoteOn(52, 39, new Date(recordedAt.getTime() + 2328)))
  .addNote(new MidiNoteOff(52, new Date(recordedAt.getTime() + 2426)))
  .addNote(new MidiNoteOn(52, 35, new Date(recordedAt.getTime() + 2846)))
  .addNote(new MidiNoteOff(52, new Date(recordedAt.getTime() + 2991)))
  .addNote(new MidiNoteOn(52, 33, new Date(recordedAt.getTime() + 3450)))
  .addNote(new MidiNoteOff(52, new Date(recordedAt.getTime() + 4120)))
  .addNote(new MidiNoteOn(50, 48, new Date(recordedAt.getTime() + 4552)))
  .addNote(new MidiNoteOff(50, new Date(recordedAt.getTime() + 4709)))
  .addNote(new MidiNoteOn(50, 47, new Date(recordedAt.getTime() + 5098)))
  .addNote(new MidiNoteOff(50, new Date(recordedAt.getTime() + 5225)))
  .addNote(new MidiNoteOn(50, 38, new Date(recordedAt.getTime() + 5697)))
  .addNote(new MidiNoteOff(50, new Date(recordedAt.getTime() + 6327)))
  .addNote(new MidiNoteOn(52, 40, new Date(recordedAt.getTime() + 6837)))
  .addNote(new MidiNoteOff(52, new Date(recordedAt.getTime() + 7038)))
  .addNote(new MidiNoteOn(55, 49, new Date(recordedAt.getTime() + 7395)))
  .addNote(new MidiNoteOff(55, new Date(recordedAt.getTime() + 7548)))
  .addNote(new MidiNoteOn(55, 50, new Date(recordedAt.getTime() + 7906)))
  .addNote(new MidiNoteOff(55, new Date(recordedAt.getTime() + 8546)))
  .addNote(new MidiNoteOn(52, 39, new Date(recordedAt.getTime() + 8990)))
  .addNote(new MidiNoteOff(52, new Date(recordedAt.getTime() + 9195)))
  .addNote(new MidiNoteOn(50, 37, new Date(recordedAt.getTime() + 9520)))
  .addNote(new MidiNoteOff(50, new Date(recordedAt.getTime() + 9706)))
  .addNote(new MidiNoteOn(48, 43, new Date(recordedAt.getTime() + 10026)))
  .addNote(new MidiNoteOff(48, new Date(recordedAt.getTime() + 10221)))
  .addNote(new MidiNoteOn(50, 43, new Date(recordedAt.getTime() + 10559)))
  .addNote(new MidiNoteOff(50, new Date(recordedAt.getTime() + 10745)))
  .addNote(new MidiNoteOn(52, 41, new Date(recordedAt.getTime() + 11110)))
  .addNote(new MidiNoteOff(52, new Date(recordedAt.getTime() + 11289)))
  .addNote(new MidiNoteOn(52, 41, new Date(recordedAt.getTime() + 11625)))
  .addNote(new MidiNoteOff(52, new Date(recordedAt.getTime() + 11790)))
  .addNote(new MidiNoteOn(52, 38, new Date(recordedAt.getTime() + 12169)))
  .addNote(new MidiNoteOff(52, new Date(recordedAt.getTime() + 12337)))
  .addNote(new MidiNoteOn(52, 46, new Date(recordedAt.getTime() + 12712)))
  .addNote(new MidiNoteOff(52, new Date(recordedAt.getTime() + 12902)))
  .addNote(new MidiNoteOn(50, 43, new Date(recordedAt.getTime() + 13231)))
  .addNote(new MidiNoteOff(50, new Date(recordedAt.getTime() + 13414)))
  .addNote(new MidiNoteOn(50, 41, new Date(recordedAt.getTime() + 13751)))
  .addNote(new MidiNoteOff(50, new Date(recordedAt.getTime() + 13939)))
  .addNote(new MidiNoteOn(52, 43, new Date(recordedAt.getTime() + 14265)))
  .addNote(new MidiNoteOff(52, new Date(recordedAt.getTime() + 14443)))
  .addNote(new MidiNoteOn(50, 45, new Date(recordedAt.getTime() + 14803)))
  .addNote(new MidiNoteOff(50, new Date(recordedAt.getTime() + 14989)))
  .addNote(new MidiNoteOn(48, 28, new Date(recordedAt.getTime() + 15351)))
  .addNote(new MidiNoteOff(48, new Date(recordedAt.getTime() + 16158)));

const midi = new Midi();
midi.start();

// midi.onNoteDown(({ note, velocity }) => {
//   console.log("note on");

//   synth.triggerAttackRelease(note.getScientificName(), "8n", velocity);
// });
// midi.onNoteUp(({ note }) => {
//   synth.triggerRelease();
// });
// midi.onPedalDown(() => console.log("pedal down"));
// midi.onPedalUp(() => console.log("pedal up"));

function App() {
  function func() {
    const synth = new Tone.Synth().toDestination();

    Tone.start();

    maryHadALittleLamb
      .getNotes()
      .forEach(({ note, timestamp, velocity = 0 }) => {
        const normalizedVelocity = velocity / 127.0;

        synth.triggerAttackRelease(
          note.getScientificName(),
          "4n",
          (timestamp.getTime() - maryHadALittleLamb.getStartTime()) / 1000,
          normalizedVelocity
        );
      });
  }

  return (
    <div className="App">
      <button onClick={func}>Play Mary Had a Little Lamb</button>
      <button
        onClick={() => {
          midi.record();
          Tone.start();
        }}
      >
        Record
      </button>
      <button onClick={() => midi.stopRecording()}>Stop Recording</button>
    </div>
  );
}

export default App;
