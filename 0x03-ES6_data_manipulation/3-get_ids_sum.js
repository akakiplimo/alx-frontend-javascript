export default function getStudentIdsSum(studentLst) {
  return studentLst.reduce((sum, current) => sum + current.id, 0);
}
