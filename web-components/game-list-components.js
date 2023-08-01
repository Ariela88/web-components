class GameListComponent extends HTMLElement{ // definisce che questa classe sia estesa all'html

    constructor(){
        super();
    
       this.attachShadow({mode: 'open'}) //shadowroot gestisce quello che in js standard è il document 
    }
    
    connectedCallback(){

        fetch('./games-data.json')
        .then(resp => resp.json())
        .then(res => this.render(res))
    
      this.render()
    }

    render(games){



       this.shadowRoot.innerHTML = '';
       const mainContainer = document.createElement('div')
       this.shadowRoot.appendChild(mainContainer);

       for (let i = 0; i < games.length; i++) {
        const game = games[i];

        const cardComponent = document.createElement('game-card')
        cardComponent.setAttribute('game-title', game.title)
        

        mainContainer.appendChild(cardComponent);

       
        
       }

    }
    
    }
    
    customElements.define('game-list', GameListComponent) //definisce che questa classe venga associata all element creato da me