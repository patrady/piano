import { MidiNoteOff } from "../MidiNoteOff";

describe("MidiNoteOff", () => {
  describe(".matches", () => {
    describe("when the type is 128", () => {
      it("returns true", () => {
        expect(MidiNoteOff.matches(128)).toBeTruthy();
      });
    });

    describe("when the type not 128", () => {
      it("returns false", () => {
        expect(MidiNoteOff.matches(144)).toBeFalsy();
      });
    });
  });

  describe(".parse", () => {
    it("returns a instance of Note Off", () => {
      expect(MidiNoteOff.parse("NOTE_OFF 1643695200000 85")).toEqual(
        new MidiNoteOff(85, new Date(2022, 1, 1))
      );
    });
  });

  describe("#toString", () => {
    it("formats the string", () => {
      expect(new MidiNoteOff(85, new Date(2022, 1, 1)).toString()).toEqual(
        "NOTE_OFF 1643695200000 85"
      );
    });
  });
});
