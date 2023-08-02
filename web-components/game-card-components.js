class GameCardComponent extends HTMLElement { // definisce che questa classe sia estesa all'html

  constructor() {
    super();

    this.attachShadow({ mode: 'open' }) //shadowroot gestisce quello che in js standard è il document 
  }

  connectedCallback() {


    this.render()
  }

  render() {

    if (this.game) {


      this.shadowRoot.innerHTML = `
        <style> 
       
.card-game{
  box-shadow: 7px 3px 5px  grey;
  
  height: 300px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  background-color: rgb(198, 168, 0);
}



.card-title{
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 30px;
  color: darkred;
  text-transform: capitalize;

}

.card-author{
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.card-details{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card-yop,.card-type{
  font-size: 16px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  margin: 10px 0px;
}
        </style> 


       
    <div class="card-game"> 

        <div class="card-title">${this.game.title} </div>
        <div class="card-author"> ${this.game.author}</div>
     <div class="card-details">
        <div class="card-yop">${this.game.yop} </div>
        <div class="card-type"> ${this.game.type}</div>
        <div class="card-type"> ${this.game.isMultiplayer ? 'multiplayer' : 'single player'}</div>
     </div>
    </div>

        
       `

      const deleteBtn = document.createElement('button')
      deleteBtn.appendChild(document.createTextNode('cancellami'))
      this.shadowRoot.querySelector('.card-game').appendChild(deleteBtn)
      deleteBtn.addEventListener('click',()=> this.emitEvent())




      //  // this.shadowRoot.innerHTML = '';
      //  const div = document.createElement('div');
      //  this.shadowRoot.appendChild(div)
      //  div.classList.add('card-game')

      // const h3 = document.createElement('h3')
      // h3.appendChild(document.createTextNode(this.game.title))
      // div.appendChild(h3);

      // const h4 = document.createElement('h4')
      // h4.appendChild(document.createTextNode(this.game.author))
      // div.appendChild(h4);
      // const spanYop = document.createElement('span')
      // spanYop.appendChild(document.createTextNode(this.game.yop))
      // div.appendChild(spanYop);
      // const spanType = document.createElement('span')
      // spanType.appendChild(document.createTextNode(this.game.type))
      // div.appendChild(spanType);
      // const spanMulti = document.createElement('span')
      // spanMulti.appendChild(document.createTextNode(this.game.isMultiplayer))
      // div.appendChild(spanMulti);


    }
    //  this.shadowRoot.innerHTML = `
    //  <style> 
    //  @import url('./web-components/super-card-style.css');
    //  </style> 

    // `


  }

  emitEvent(){

    const customEvent = new CustomEvent('card-clicked', {detail: this.game.title})
    this.dispatchEvent(customEvent)
  }

}



customElements.define('game-card', GameCardComponent) //definisce che questa classe venga associata all element creato da me