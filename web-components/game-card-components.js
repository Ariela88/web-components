class GameCardComponent extends HTMLElement{ // definisce che questa classe sia estesa all'html

    constructor(){
        super();
    
       this.attachShadow({mode: 'open'}) //shadowroot gestisce quello che in js standard è il document 
    }
    
    connectedCallback(){

    
      this.render()
    }

    render(){

        const title = this.getAttribute('game-title');

        

        this.shadowRoot.innerHTML = '';
        const div = document.createElement('div');
        this.shadowRoot.appendChild(div)

       const h3 = document.createElement('h3')
       h3.appendChild(document.createTextNode(title))
       div.appendChild(h3);


       }

    }
    
    
    
    customElements.define('game-card', GameCardComponent) //definisce che questa classe venga associata all element creato da me