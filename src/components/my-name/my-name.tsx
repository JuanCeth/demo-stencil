import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-name',
  styleUrl: 'my-name.css',
  shadow: true
})
export class MyName {

  @Prop() name: string;

  @Prop() surname: string;

  public proyectos: any;
  public textInput!: HTMLInputElement;

  componentWillLoad() {
   this.proyectos = [{
     id: 1,
     description: 'Regdash'
   }, {
     id: 2,
     description: 'DB Wallet'
   }, {
     id: 3,
     description: 'TSB Project'
   }, {
     id: 4,
     description: 'Solvia Web'
   }, {
     id: 5,
     description: 'ODP BS'
   }];
  }

  handleClick() {
    alert('Received the button click!');
  }

  handleSubmit(ev: Event) {
    ev.preventDefault();
    alert(this.textInput);
  }

  render() {
    return (
      <div class="my-name">
        Hello, World! I'm <span class="name">{this.name}</span><span class="surname"> {this.surname}</span>
        <my-work job="Frontend Developer" enterprise="GFT IT Consulting"/>
        <span>He participado en los proyectos:</span>
        <div>
          {this.proyectos.map((proyecto) =>
            <div key={proyecto.id}>
              <div>{proyecto.id}: <div>{proyecto.description}</div></div>

            </div>,
          )}
        </div>
        <div>Handling an event when clicking the button
          <button onClick={this.handleClick.bind(this)}>Click Me!</button>
        </div>
        <div class="formulario">
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" ref={(el) => this.textInput = el as HTMLInputElement}/>
            </label>
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    );
  }
}
