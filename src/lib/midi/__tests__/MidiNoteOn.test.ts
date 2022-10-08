import { MidiNoteOn } from "../MidiNoteOn";

describe("MidiNoteOn", () => {
  describe(".matches", () => {
    describe("when the type is 144", () => {
      it("returns true", () => {
        expect(MidiNoteOn.matches(144)).toBeTruthy();
      });
    });

    describe("when the type not 144", () => {
      it("returns false", () => {
        expect(MidiNoteOn.matches(128)).toBeFalsy();
      });
    });
  });

  describe(".parse", () => {
    it("returns a instance of Note On", () => {
      expect(MidiNoteOn.parse("NOTE_ON 1643695200000 85 128")).toEqual(
        new MidiNoteOn(85, 128, new Date(2022, 1, 1))
      );
    });
  });

  describe("#toString", () => {
    it("formats the string", () => {
      expect(new MidiNoteOn(85, 128, new Date(2022, 1, 1)).toString()).toEqual(
        "NOTE_ON 1643695200000 85 128"
      );
    });
  });
});
