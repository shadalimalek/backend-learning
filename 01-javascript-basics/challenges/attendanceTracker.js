const students = [
    {name: "Shad", rollNumber: 12, isPresent: true},
    {name: "Saif", rollNumber: 13, isPresent: false},
    {name: "Rehan", rollNumber: 12, isPresent: true},
];

for (let student of students) {
    console.log(`${student.name} (${student.rollNumber}):`, student.isPresent ? "Present" : "Absent")
}