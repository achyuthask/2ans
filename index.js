function makecapitalFirstLetter(str) {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
}
const string = prompt('Enter a string: ');

const result = makecapitalFirstLetter(string);

console.log(result);