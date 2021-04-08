// Code your solutions in this file
function writeCards(names) {
    let thankYou = [];
    for (let i = 0; i < names.length; i++) {
        thankYou.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    };
    return thankYou;
};


function countDown(num) {
    let i = 0;
    while (i <= num) {
        console.log(i++);
    }
    return num;
}