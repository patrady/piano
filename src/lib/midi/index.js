import { MidiMessage } from "./MidiMessage";

export class Midi {
  start() {
    navigator
      .requestMIDIAccess()
      .then((access) => this.onSuccess(access))
      .catch((e) => console.error(e));
  }

  onSuccess(midiAccess) {
    const inputs = midiAccess.inputs.values();

    for (
      let input = inputs.next();
      input && !input.done;
      input = inputs.next()
    ) {
      input.value.onmidimessage = this.onMessage;
    }
  }

  onMessage({ data }) {
    const { type, byte1, byte2 } = MidiMessage.decode(data);

    console.log(MidiMessage.for(type, byte1, byte2));
  }
}
