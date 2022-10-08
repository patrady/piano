import { Controller } from "../../controllers/Controller";

describe("Controller", () => {
  describe("#toString", () => {
    it("formats the string", () => {
      expect(new Controller(64, 127, new Date(2022, 1, 1)).toString()).toEqual(
        "CONTROLLER 1643695200000 64 127"
      );
    });
  });
});
