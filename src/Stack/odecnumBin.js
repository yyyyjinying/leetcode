import Stack from "./oStack";
const baseConverter = (decNumber, base) => {
    let rem = 0;
    let number = decNumber;
    let digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWSYZ";
    let toString = "";
    
    const stack = new Stack();
    while(number > 0) {
        rem = number % base;
        number = Math.floor(number/2);
        stack.push(rem);
    }

    while(!stack.isEmpty()) {
        toString += digits[stack.pop()];
    }

    return toString;

}

export{
    baseConverter
}