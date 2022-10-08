import { Controller } from "./Controller";

export class PedalController extends Controller {
  static controller = 64;

  static equals(controller: number) {
    return PedalController.controller === controller;
  }

  constructor(value: number, timestamp: Date = new Date()) {
    super(64, value, timestamp);
  }

  isOff() {
    return this.value < 64;
  }

  isOn() {
    return this.value >= 64;
  }
}
