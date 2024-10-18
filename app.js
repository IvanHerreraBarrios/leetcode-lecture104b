function addition(a, b) {
	return a + b;
}

function num_of_digits(num){
    if(num < 0){
        return num.toString().length - 1
    }
    return num.toString().length
}

function countTrue(arr){
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            count++
        }
    }
    return count 
}

function addName(obj, name, value){
    obj[name] = value 
    return obj
}

function generation(x, y){
    const obj = {
        "-3": {m: "great grandfather", f:"great grandmother"},
        "-2": {m: "grandfather", f:"grandmother"},
        "-1": {m:"father", f:"mother"},
        "0": {m: "me", f:"me"},
        "1": {m:"son", f:"daughter"},
        "2": {m:"grandson", f:"granddaughter"},
        "3": {m: "great grandson", f: "great granddaughter"}
    }
    return obj[x][y]
}