class CalcController{
    
    constructor(){
        this._displayCalc = "0";
        this._dataAtual;
        /*This. é a forma de criação de um atributo, faz 
        referência do objeto que está sendo instanciado.
        adicionar "_" após o "." torna o atributo privado*/

    }
    get displayCalc(){

        return this._displayCalc;
        /*retorna atributo privado*/
    }

    set displayCalc(valor){
        this.displayCalc = valor;
        /* Define atributo privado*/
    }
    get dataAtual(){
        return this._dataAtual;
    }
    set dataAtual(valor){
        this.dataAtual = valor;
    }
}