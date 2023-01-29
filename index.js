var school = [
    {
        id: 1,
        name: "Ahmad",
        level: "tow",
        isSenior: false
    },
    {
        id: 2,
        name: "Ali",
        level: "tow",
        isSenior: false
    },
    {
        id: 3,
        name: "Mohamad",
        level: "tow",
        isSenior: false
    }
];
function printStr(school) {
    for (var i in school) {
        console.log(school[i]);
    }
}
printStr(school);
