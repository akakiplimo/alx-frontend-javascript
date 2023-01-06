export default function getStudentIdsSum(studentsLst) {
  return studentsLst.reduce((sum, current) => sum + current.id, 0);
}
