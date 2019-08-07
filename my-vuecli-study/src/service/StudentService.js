export default {
  students: [
    { id: 0, name: 'dxd', height: 175 },
    { id: 1, name: 'lh', height: 176 },
    { id: 2, name: 'hnx', height: 177 }
  ],
  getStudents () {
    return this.students
  },
  addStudent (student) {
    this.students.push(student)
  },
  delStudent (student) {
    var index = 0
    for (var student1 of this.students) {
      if (student1.id === student.id) {
        break
      }
      index++
    }
    this.students.splice(index, 1)
  }
}
