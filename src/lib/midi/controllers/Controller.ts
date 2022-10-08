export class Controller {
  constructor(
    public controller: number,
    public value: number,
    public timestamp = new Date()
  ) {}

  toString() {
    return `CONTROLLER ${this.timestamp.getTime()} ${this.controller} ${
      this.value
    }`;
  }
}
