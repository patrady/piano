import { Controller } from "../controllers/Controller";
import { MidiMessage } from "../MidiMessage";
import { MidiNoteOff } from "../MidiNoteOff";
import { MidiNoteOn } from "../MidiNoteOn";

describe("MidiMessage", () => {
  describe(".decode", () => {
    it("decodes the array into type, channel, byte1, and byte2", () => {
      expect(MidiMessage.decode(new Uint8Array([144, 39, 45]))).toEqual({
        type: 144,
        channel: 0,
        byte1: 39,
        byte2: 45,
      });

      expect(MidiMessage.decode(new Uint8Array([145, 39, 45]))).toEqual({
        type: 144,
        channel: 1,
        byte1: 39,
        byte2: 45,
      });

      expect(MidiMessage.decode(new Uint8Array([176, 64, 127]))).toEqual({
        type: 176,
        channel: 0,
        byte1: 64,
        byte2: 127,
      });
    });
  });

  describe(".for", () => {
    describe("with a type of 144", () => {
      it("returns an instance of Note On", () => {
        expect(MidiMessage.for(144, 39, 45)).toBeInstanceOf(MidiNoteOn);
      });
    });

    describe("with a type of 128", () => {
      it("returns an instance of Note Off", () => {
        expect(MidiMessage.for(128, 39, 45)).toBeInstanceOf(MidiNoteOff);
      });
    });

    describe("with a type of 176", () => {
      it("returns an instance of Controller", () => {
        expect(MidiMessage.for(176, 64, 0)).toBeInstanceOf(Controller);
      });
    });

    describe("with an unsupported type", () => {
      it("returns undefined", () => {
        expect(MidiMessage.for(0, 0, 0)).toBeUndefined();
      });
    });
  });
});
