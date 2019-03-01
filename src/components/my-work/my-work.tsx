import { Component, Prop} from '@stencil/core';

@Component({
  tag: 'my-work',
  styleUrl: 'my-work.css',
  shadow: true
})
export class MyWork {

  @Prop() job: string;

  @Prop() enterprise: string;


  componentWillLoad() {
    alert('El componente muestra este mensaje antes de cargar');
  }

  componentWillUpdate() {
    alert('El componente muestra este mensaje antes de updatear');
  }

  componentDidLoad() {
    alert('El componente muestra este mensaje al cargar');
  }

  componentDidUpdate() {
    alert('El componente muestra este mensaje al updatear');
  }

  render() {
    return (
      <div class="my-work">
        Hello, my job is <span class="job">{this.job}</span> at <span class="enterprise">{this.enterprise}</span>
      </div>
    );
  }
}
