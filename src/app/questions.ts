export class Questions{
    question : string;
    choices :any ;
    answer: string;
    

    constructor(question : string, choices: any, answer: string){
        this.question = question;
        this.choices = choices;
        this.answer = answer;
    }
}