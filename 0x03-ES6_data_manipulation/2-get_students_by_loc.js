export default function getStudentsByLocation(studentsLst, loc) {
  return studentsLst.filter((student) => student.location === loc);
}
