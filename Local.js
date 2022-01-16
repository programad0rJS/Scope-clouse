const Hello_Word = () => {
    const Hello = 'Hello Word'
    console.log(Hello);
}

Hello_Word()
// console.log(Hello);



var Scope = 'I Am Global';





const FuncionScope = () => {
    var Scope = 'I Am Just a Local'

    const Func = () => {
        return Scope
    }
    console.log(Func());





}

FuncionScope();