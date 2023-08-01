class SuperHeaderComponent extends HTMLElement{ // definisce che questa classe sia estesa all'html

constructor(){
    super();

   this.attachShadow({mode: 'open'}) //shadowroot gestisce quello che in js standard è il document 
}

connectedCallback(){

this.render()


    //this.shadowRoot.innerHTML = '<h1>  Game Platform  </h1>'
}

render(){

    const style = document.createElement('style');
    style.innerHTML = `h1{color: ${this.getAttribute('title-color')}}`;
    this.shadowRoot.appendChild(style);


    const h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode(this.getAttribute('super-title')));
    this.shadowRoot.appendChild(h1)

    const page2Link = document.createElement('a')
    page2Link.appendChild(document.createTextNode('Vai alla pagina 2'));
    page2Link.href = './page2.html';
    this.shadowRoot.appendChild(page2Link);

}

}

customElements.define('super-header', SuperHeaderComponent); //definisce che questa classe venga associata all element creato da me