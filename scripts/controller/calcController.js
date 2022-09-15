class CalcController{
    
    constructor(){

        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        /*Manipulando o DOM, elemento do documento da página Metodo 
        querySelector serve para selecionar um elemento do DOM pela
        sua id# e manipula-lo,*/
        /*El no final está sendo usado como um sufixo, para 
        padronizad quando estamos indicando de que vem de um 
        lemento */
        this._currentDate;
        this.initialize();
        /*This. é a forma de criação de um atributo, faz 
        referência do objeto que está sendo instanciado.
        adicionar "_" após o "." torna o atributo privado*/

    }

    initialize(){
        
        setInterval(() => {

            this.displayDate = this.currentDate.toLocaleDateString(this.locale);
            this.displayTime = this.currentDate.toLocaleTimeString(this.locale);
        }, 1000);

    }
 
    get displayCalc(){

        return this._displayCalcEl.innerHTML;
        /*retorna atributo privado*/
              /* innerHTML é utilizara para selecionar 
                um elemento e inserir uma informação 
                nele no formato HTML */
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
        /* Define atributo privado*/
    }


    get displayTime(){
        this._timeEl.innerHTML;
    }


    set displayTime(value){
        return this._timeEl.innerHTML = value;
    }


    get displayDate(){
        this._dateEl.innerHTML;
    }


    set displayDate(value){
        return this._dateEl.innerHTML = value;
    }


    get currentDate(){
        return new Date;
    }

    set currentDate(value){
        this.currentDate = value;
    }

}