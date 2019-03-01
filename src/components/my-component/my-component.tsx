import { Component, Listen, Prop } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  @Listen('keydown')
  handleKeyDown(ev: KeyboardEvent){
    console.log('ev', ev);
     alert('You have pressed a key');

  }

  @Listen('window:scroll')
  handleScroll(ev) {
    alert('Has hecho scroll' + ev);
  }

  componentWillLoad() {
    alert('El componente muestra este mensaje antes saludar al mundo');
  }

  render() {
    return (<div>Hello, World! I'm {this.getText()}
    <input type="text"></input>
    </div>);
  }
}
