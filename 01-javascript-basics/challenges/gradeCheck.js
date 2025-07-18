const results = [
    {name: "Shad", score: 85},
    {name: "Rehan", score: 72},
    {name: "Ayaan", score: 55},
    {name: "Sahil", score: 68},
    {name: "Saif", score: 42},
];

for (let student of results) {
    if(student.score >= 75) {
        console.log(`${student.name} passed with distinction`);
    } else if(student.score >= 50) {
        console.log(`${student.name}  Passed`);
    } else {
        console.log(`${student.name} failed`)
    }
}