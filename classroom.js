//getNumberOfGrades should return the number of grades.
export function getNumberOfGrades(grades){
    return grades.length;
}

//getSumGrades should return the sum of all the grades.
export function getSumGrades(grades){
    let sum = 0;
    return grades.map(sumGrade => sumGrade += sum)
}