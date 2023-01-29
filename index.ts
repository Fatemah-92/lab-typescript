interface Student {
    id: number
    name: string
    level: string
    isSenior: boolean
} 

let school: Student[]= [
    {
        id:	1,
        name: "Ahmad",
        level: "tow",
        isSenior: false
    },
    {
        id:	2,
        name: "Ali",
        level: "tow",
        isSenior: false
    },
    {
        id:	3,
        name: "Mohamad",
        level: "tow",
        isSenior: false
    }
]

function printStr(school:Student[]) {
    for(let i in school) {
        console.log(school[i])      
    }
}
printStr(school)

//--------------------------------------



