class SuperFooterComponent extends HTMLElement{ // definisce che questa classe sia estesa all'html

    constructor(){
        super();
    
       this.attachShadow({mode: 'open'}) //shadowroot gestisce quello che in js standard è il document 
    }
    
    connectedCallback(){
    
       this.render()
    }
    


    render(){

        this.shadowRoot.innerHTML = `
        <style> 
        @import url('./web-components/super-footer-style.css');
        </style> 
        
        <p> ©Copyright Plattform 2023  </p>`

    }
    }
    
    customElements.define('super-footer', SuperFooterComponent) //definisce che questa classe venga associata all element creato da me