import { PedalController } from "../../controllers/PedalController";

describe("PedalController", () => {
  describe(".equals", () => {
    describe("when the controller is 64", () => {
      it("returns true", () => {
        expect(PedalController.equals(64)).toBeTruthy();
      });
    });

    describe("when the controller is not 64", () => {
      it("returns false", () => {
        expect(PedalController.equals(70)).toBeFalsy();
      });
    });
  });

  describe("#isOn", () => {
    describe("when the value is over the threshold", () => {
      it("returns true", () => {
        expect(new PedalController(64).isOn()).toBeTruthy();
        expect(new PedalController(65).isOn()).toBeTruthy();
      });
    });

    describe("when the value is under the threshold", () => {
      it("returns true", () => {
        expect(new PedalController(63).isOn()).toBeFalsy();
        expect(new PedalController(0).isOn()).toBeFalsy();
      });
    });
  });

  describe("#isOff", () => {
    describe("when the value is over the threshold", () => {
      it("returns true", () => {
        expect(new PedalController(0).isOff()).toBeTruthy();
        expect(new PedalController(63).isOff()).toBeTruthy();
      });
    });

    describe("when the value is under the threshold", () => {
      it("returns true", () => {
        expect(new PedalController(64).isOff()).toBeFalsy();
        expect(new PedalController(127).isOff()).toBeFalsy();
      });
    });
  });
});
