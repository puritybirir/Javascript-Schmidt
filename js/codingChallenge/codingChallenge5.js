var John = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTip: function () {
        this.tips= [];
        this.finalValues = [];

        for(i=0; i<this.bills.length; i++){
            // Determine percentage based on tipping rules
            var bill = this.bills[i]
            if (bill[i]< 50){
                percentage = .2;
            } else if (bill[i] >= 50 && bill[i] < 200){
                percentage = .15;
            } else {
                percentage = .1;
            }

            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill* percentage;
        }
    }
}

var Mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTip: function () {
        this.tips= [];
        this.finalValues = [];

        for(i=0; i<this.bills.length; i++){
            // Determine percentage based on tipping rules
            var bill = this.bills[i]
            if (bill[i]< 100){
                percentage = .2;
            } else if (bill[i] >= 100 && bill[i] < 300){
                percentage = .1;
            } else {
                percentage = .25;
            }

            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill* percentage;
        }
    }
}

function calcAverage (tips) {
    var sum = 0;
    for (var i =0; i < tips.length; i++){
        sum = sum + tips[i];
    }
    return sum/tips.length;
}


John.calcTip();
Mark.calcTip();

console.log(John, Mark)
John.average = calcAverage(John.tips);
Mark.average = calcAverage(Mark.tips);


console.log(John);
console.log(Mark);