const BuidCount = (i) => {
    let Count = i;
    const DisplayCount = () => {
        console.log(Count++);

    };

    return DisplayCount;
};

const My_Conunt = BuidCount(1);


My_Conunt();
My_Conunt();
My_Conunt();
    


const My_oTherCount = BuidCount(10);


My_oTherCount();
My_oTherCount();