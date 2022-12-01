function combine(n1: number | string, n2: number | string, resultConversion: string){
    let result;
    if(typeof n1 === 'number' && typeof n2 === 'number'){
        result = n1+n2;
    } else {
        result = n1.toString() + n2.toString();
    }
    if(resultConversion === "as-number"){
        return +result;
    } else {
        return result.toString()
    }
     
    return result;
}

const numberCombined = combine(1,2, "as-number")
console.log(numberCombined)

const stringAgesCombined = combine("1","2", "as-number")


const stringCombined = combine("1", "2", "as-text")
console.log(stringCombined);
