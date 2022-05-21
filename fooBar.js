
function fooBar() {
    for (let number = 1; number < 101; number++) {
        let result = "";
    
        if(number % 3 === 0) {
            result = "Foo"
        }
    
        if(number % 5 === 0) {
            result += "Bar"
        }
    
        console.log(result.length > 0 ? result : number)
    }
}

fooBar()

module.exports = fooBar;


