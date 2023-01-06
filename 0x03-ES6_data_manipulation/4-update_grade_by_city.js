export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  return studentsList.filter((std) => std.location === city).map((std) => ({ ...std, grade: newGrades.filter((g) => g.studentId === std.id).map((g) => g.grade)[0] || 'N/A' }));
}
