const choises = [
    "Recollect AZOVSTAL",
    "Make 1000 exersises",
    "Clean your place and PC",
    "Write a log",
    "Think, thar your ancestors survived for 2,6 M years ",
    "Recollect 242 days of Donetsk airport defence"   
];

function badChoise() {
    return choises[Math.floor(Math.random() * badChoise.length)];
}

exports.badChoise = badChoise;