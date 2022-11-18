import { MidiNoteOff } from "../MidiNoteOff";
import { MidiNoteOn } from "../MidiNoteOn";
import { Song } from "../Song";

const recordedAt = new Date(2022, 1, 1, 0, 0, 0, 0);
const maryHadALittleLambNotes = [
  new MidiNoteOn(52, 34, new Date(recordedAt.getTime() + 0)),
  new MidiNoteOff(52, new Date(recordedAt.getTime() + 114)),
  new MidiNoteOn(50, 35, new Date(recordedAt.getTime() + 600)),
  new MidiNoteOff(50, new Date(recordedAt.getTime() + 711)),
  new MidiNoteOn(48, 38, new Date(recordedAt.getTime() + 1154)),
  new MidiNoteOff(48, new Date(recordedAt.getTime() + 1281)),
  new MidiNoteOn(50, 46, new Date(recordedAt.getTime() + 1723)),
  new MidiNoteOff(50, new Date(recordedAt.getTime() + 1855)),
  new MidiNoteOn(52, 39, new Date(recordedAt.getTime() + 2328)),
  new MidiNoteOff(52, new Date(recordedAt.getTime() + 2426)),
  new MidiNoteOn(52, 35, new Date(recordedAt.getTime() + 2846)),
  new MidiNoteOff(52, new Date(recordedAt.getTime() + 2991)),
  new MidiNoteOn(52, 33, new Date(recordedAt.getTime() + 3450)),
  new MidiNoteOff(52, new Date(recordedAt.getTime() + 4120)),
  new MidiNoteOn(50, 48, new Date(recordedAt.getTime() + 4552)),
  new MidiNoteOff(50, new Date(recordedAt.getTime() + 4709)),
  new MidiNoteOn(50, 47, new Date(recordedAt.getTime() + 5098)),
  new MidiNoteOff(50, new Date(recordedAt.getTime() + 5225)),
  new MidiNoteOn(50, 38, new Date(recordedAt.getTime() + 5697)),
  new MidiNoteOff(50, new Date(recordedAt.getTime() + 6327)),
  new MidiNoteOn(52, 40, new Date(recordedAt.getTime() + 6837)),
  new MidiNoteOff(52, new Date(recordedAt.getTime() + 7038)),
  new MidiNoteOn(55, 49, new Date(recordedAt.getTime() + 7395)),
  new MidiNoteOff(55, new Date(recordedAt.getTime() + 7548)),
  new MidiNoteOn(55, 50, new Date(recordedAt.getTime() + 7906)),
  new MidiNoteOff(55, new Date(recordedAt.getTime() + 8546)),
  new MidiNoteOn(52, 39, new Date(recordedAt.getTime() + 8990)),
  new MidiNoteOff(52, new Date(recordedAt.getTime() + 9195)),
  new MidiNoteOn(50, 37, new Date(recordedAt.getTime() + 9520)),
  new MidiNoteOff(50, new Date(recordedAt.getTime() + 9706)),
  new MidiNoteOn(48, 43, new Date(recordedAt.getTime() + 10026)),
  new MidiNoteOff(48, new Date(recordedAt.getTime() + 10221)),
  new MidiNoteOn(50, 43, new Date(recordedAt.getTime() + 10559)),
  new MidiNoteOff(50, new Date(recordedAt.getTime() + 10745)),
  new MidiNoteOn(52, 41, new Date(recordedAt.getTime() + 11110)),
  new MidiNoteOff(52, new Date(recordedAt.getTime() + 11289)),
  new MidiNoteOn(52, 41, new Date(recordedAt.getTime() + 11625)),
  new MidiNoteOff(52, new Date(recordedAt.getTime() + 11790)),
  new MidiNoteOn(52, 38, new Date(recordedAt.getTime() + 12169)),
  new MidiNoteOff(52, new Date(recordedAt.getTime() + 12337)),
  new MidiNoteOn(52, 46, new Date(recordedAt.getTime() + 12712)),
  new MidiNoteOff(52, new Date(recordedAt.getTime() + 12902)),
  new MidiNoteOn(50, 43, new Date(recordedAt.getTime() + 13231)),
  new MidiNoteOff(50, new Date(recordedAt.getTime() + 13414)),
  new MidiNoteOn(50, 41, new Date(recordedAt.getTime() + 13751)),
  new MidiNoteOff(50, new Date(recordedAt.getTime() + 13939)),
  new MidiNoteOn(52, 43, new Date(recordedAt.getTime() + 14265)),
  new MidiNoteOff(52, new Date(recordedAt.getTime() + 14443)),
  new MidiNoteOn(50, 45, new Date(recordedAt.getTime() + 14803)),
  new MidiNoteOff(50, new Date(recordedAt.getTime() + 14989)),
  new MidiNoteOn(48, 28, new Date(recordedAt.getTime() + 15351)),
  new MidiNoteOff(48, new Date(recordedAt.getTime() + 16158)),
];
const song = new Song(maryHadALittleLambNotes, recordedAt);

describe("Song", () => {
  describe("#getStartTime", () => {
    it("returns the start date", () => {
      expect(song.getStartTime()).toEqual(new Date(2022, 1, 1));
    });
  });
});
