const palindromes = function (word) {
    const alphaNumeric='abcdefghijklmnopqrstuvwxyz0123456789';
    const cleaned=word
    .toLowerCase()
    .split('')
    .filter((character)=>alphaNumeric.includes(character))
    .join('');

    const reversed=cleaned.split('').reverse().join('');
    return reversed===cleaned;
};

// Do not edit below this line
module.exports = palindromes;
