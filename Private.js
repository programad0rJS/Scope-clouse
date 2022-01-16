const Person = () => {
    var SaveName = 'Name';

    return {
        Getname: () => {
            return SaveName;
        },
        SetName: (name) => {
            SaveName = name;
        },





    };
};


newPerson = Person();
console.log(newPerson.Getname());

newPerson.SetName('Oscar');
console.log(newPerson.Getname());
