var a = 'Hello';
first()

function first () {
    var b = 'Hi!';
    second()

    function second(){
        var c= 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a, d);
}