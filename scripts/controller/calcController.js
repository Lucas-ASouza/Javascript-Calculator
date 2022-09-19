class CalcController{
    
    constructor(){

        this._operation = [];
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
        this.initButtonsEvents();
    }

    initialize(){

        this.setLastNumberToDisplay();
        //Puxa o metódo de limpar o display da calculadora//

        this.setDisplayDateTime();
        /*Puxa o metódo para atualizar em tempo real assim que
        a pagina carregar*/
        
        setInterval(() => {

            this.setDisplayDateTime();
            
        }, 1000);
        /*Repete o metódo no intervalo de 1000 milisegundos*/
    }

    addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false);

        });

    }

    clearAll(){

        this._operation = [];

        this.setLastNumberToDisplay();

    }
    clearEntry(){

        this._operation.pop();

        this.setLastNumberToDisplay();

    }

    getLastOperation(){

        return this._operation[this._operation.length-1];
        // recupera o ultimo valor inserido no array
    }

    isOperator(value){

        return ['+', '-', '*', '%', '/'].indexOf(value) > -1;
        // verifica se o value é uma dos operadores
        
    }

    setLastOperation(value){

        this._operation[this._operation.length-1] = value;

    }

    pushOperation(value){

        this._operation.push(value);

        if (this._operation.length > 3){

            this.calc();

        }

    }

    calc(){

        let last = this._operation.pop();
        let result = eval(this._operation.join(""));

        if (last == "%"){

            result /= 100;

            this._operation = [result];

        }else{

        this._operation = [result, last];
       
        }

        this.setLastNumberToDisplay();

    }

    setLastNumberToDisplay(){

        let lastNumber;

        for (let i = this._operation.length-1; i >= 0; i--){

            if (!this.isOperator(this._operation[i])){
                lastNumber = this._operation[i];
                break;
            }

        }
        if(!lastNumber) lastNumber = 0;

        this.displayCalc = lastNumber;

    }
    addOperation(value){

       // console.log(value);
        if (isNaN(this.getLastOperation())){
            //não é um número
            if (this.isOperator(value)){
                //se era operador, Trocar o operador
                this.setLastOperation(value);
            } else if(isNaN(value)){
                //outra coisa
                //console.log('b ', value);
            }
              else{

                this.pushOperation(value);

                this.setLastNumberToDisplay();

            }   

        } else {

            if (this.isOperator(value)){

                this.pushOperation(value);

            } else{

            //ultima entrada é número            
           let newValue = this.getLastOperation().toString() + value.toString();
           this.setLastOperation(parseInt(newValue)); 
           
           this.setLastNumberToDisplay();

            }
  
        }

        //console.log(this._operation)

    }

    setError(){

        this.displayCalc = "error";
    }

    execBtn(value){
        switch (value){

            case 'ac':
                this.clearAll();
               break;
            case 'ce':
                this.clearEntry();
                break;
            case 'soma':
                this.addOperation('+');
                break;
            case 'subtracao':
                this.addOperation('-');
                break;
            case 'divisao':
                this.addOperation('/');
                break;
            case 'multiplicacao':
                this.addOperation('*');
                break;
            case 'porcento':
                this.addOperation('%');
                break;
            case 'igual':

                break;
            case 'ponto':
                this.addOperation('.');
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':    
            case '5':    
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;                   
            default:
                this.setError();
                                     
        }
    }
    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
       
        buttons.forEach((btn, index)=>{

            this.addEventListenerAll(btn, 'click drag', e => {

               let textBtn = btn.className.baseVal.replace("btn-","");
                
               this. execBtn(textBtn);
            });

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e =>{

                btn.style.cursor = "pointer";

            })

        });

    }    
    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this.locale,{
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this.locale);
        /*Metódo para atualizar em tempo real a data e a hora. */

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