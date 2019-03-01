import { Component, State } from '@stencil/core';

@Component({
  tag: 'my-clock',
  styleUrl: 'my-clock.css',
  shadow: false
})
export class MyClock {

  timer: number;

  @State() time: number = Date.now();

  componentDidLoad() {
    this.timer = window.setInterval(() => {
      this.time = Date.now();
    }, 1000);
  }

  componentDidUnload() {
    window.clearInterval(this.timer);
  }

  render() {
     const time = new Date(this.time).toLocaleTimeString();

    return (
      <div class="time">{ time }</div>
    );
  }
}
