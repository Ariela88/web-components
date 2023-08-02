class GameListComponent extends HTMLElement{ // definisce che questa classe sia estesa all'html

    constructor(){
        super();
    
       this.attachShadow({mode: 'open'}) //shadowroot gestisce quello che in js standard è il document 
       this.gamesArray = []
    }
    
    connectedCallback(){

        fetch('./games-data.json')
        .then(resp => resp.json())
        .then(res => {
          this.gamesArray = res;
        this.render(this.gamesArray);
        })
    
    }

    disconnectedCallback(){

    }

    render(games){



      this.shadowRoot.innerHTML = `
       <style> 
       .main-container{
        width:100%;
         height: 80%;
         display: flex;
       
         justify-content: space-around;
         align-items: center;
       }

       game-card{
        width: 300px;
    }
       </style> 
       
      `
     
       const mainContainer = document.createElement('div')
       this.shadowRoot.appendChild(mainContainer);
       mainContainer.classList.add('main-container')
       
       
      

       for (let i = 0; i < games.length; i++) {
        const game = games[i];

        const cardComponent = document.createElement('game-card')
        
        cardComponent.game = game;
        cardComponent.addEventListener('card-clicked',(e)=> this.removeGame(e.detail))

        

        mainContainer.appendChild(cardComponent);

       
        
       }

    }

    removeGame(title){

      this.gamesArray = this.gamesArray.filter(game => game.title !== title)

      this.render(this.gamesArray)
    
    }
    
    
    }
    
    customElements.define('game-list', GameListComponent) //definisce che questa classe venga associata all element creato da me