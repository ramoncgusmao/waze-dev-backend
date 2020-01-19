module.exports = function parseStringAsArray(arrayAsString){
    return arrayAsString.split(',').map(texto => texto.trim());
}