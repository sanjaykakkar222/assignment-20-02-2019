let a = [ //Array a
    {
        type: 'A',
        percentage: 10
    },
    {
        type: 'B',
        percentage: 5
    },
    {
        type: 'C',
        percentage: 20
    },
    {
        type: 'D',
        percentage: 70
    },
    {
        type: 'E',
        percentage: 2
    }
]

function calculateTax(type = 'D', amount = 0) { //calculate Tax
    var percent = 0;

    for (let i = 1; i < 5; i++) {


        if (type == a[i].type) {

            percent = a[i].percentage;
        }
    }
    var amountDeduct = amount * (percent / 100);
    calculategst
    var finalresult = {
        "type": type,
        "Total amount": amount,
        "percent": percent,
        "amount deducted": amountDeduct,
        "Amount after deduction": amount - amountDeduct
    };

    return finalresult; //final result will return 5 parameters


}

console.log('C', 100);
