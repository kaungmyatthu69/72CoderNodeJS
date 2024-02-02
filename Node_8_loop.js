let students =["John", "Jane", "Jack", "Jill", "James" ]
for (let i = 0; i < students.length; i++) {
    console.log(students[i])
}
for (let student of students) {
    console.log(student)
}
students.forEach((student) => { console.log(student) }
)
for (let student in students) {
    console.log(student)
}