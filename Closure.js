const Money_Box = (Coins) => {
    var SeveCoins = 0;
    SeveCoins += Coins;

    console.log(`MoneyBox $${SeveCoins}`);
};
Money_Box(5);
Money_Box(10);









const Money_Box = () => {


    var SaveCoins = 0;
    const CountCoins = (Coins) => {
        SaveCoins += Coins;

        console.log(`MoneyBox $${SaveCoins}`);


    };
    return CountCoins;

};



let My_Money_Box = Money_Box();

My_Money_Box(4);
My_Money_Box(6);
My_Money_Box(16);


// Ay Un error Lo Solucionas Tarea 