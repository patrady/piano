import { MidiController } from "../MidiController";
import { PedalController } from "../controllers/PedalController";

describe("MidiController", () => {
  describe(".matches", () => {
    describe("with a status of 176", () => {
      it("returns true", () => {
        expect(MidiController.matches(176)).toBeTruthy();
      });
    });

    describe("with a status besides 176", () => {
      it("returns false", () => {
        expect(MidiController.matches(144)).toBeFalsy();
      });
    });
  });

  describe(".for", () => {
    describe("with a controller value of 64", () => {
      it("returns an instance of PedalController", () => {
        expect(MidiController.for(64, 0)).toBeInstanceOf(PedalController);
      });
    });

    describe("with an unsupported controller value", () => {
      it("returns undefined", () => {
        expect(MidiController.for(30, 0)).toBeUndefined();
      });
    });
  });

  describe(".parse", () => {
    it("returns an instance of a Controller", () => {
      expect(MidiController.parse("CONTROLLER 1643695200000 64 127")).toEqual(
        new PedalController(127, new Date(2022, 1, 1))
      );
    });
  });
});
