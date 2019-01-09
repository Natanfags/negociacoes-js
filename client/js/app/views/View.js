class View {

    constructor(elemento) {

        this._elemento = elemento;
    }

    template() {

        throw new Error('O método tempalte deve ser implementado');
    }
        
    update(model) {
        
        this._elemento.innerHTML = this.template(model);
    }
}