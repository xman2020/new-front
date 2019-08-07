<template>
  <div id="student">
    <fieldset>
      <legend>
        Create new student
      </legend>
      <div>
        <label>ID:</label>
        <input type="text" v-model="newStudent.id" />
      </div>
      <div>
        <label>Name:</label>
        <input type="text" v-model="newStudent.name" />
      </div>
      <div>
        <label>Height:</label>
        <input type="text" v-model="newStudent.height" />
      </div>
      <div>
        <button v-on:click="add">Add</button>
      </div>
    </fieldset>
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Height</td>
          <td>Delete</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="s in students" v-bind:key="s.id">
          <td>{{ s.id }}</td>
          <td>{{ s.name }}</td>
          <td>{{ s.height }}</td>
          <td><button v-on:click="del(s)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import StudentService from '../../service/StudentService'

export default {
  name: 'Student',
  data () {
    return {
      newStudent: {id: 0, name: '', height: 0},
      students: []
    }
  },
  mounted () {
    this.students = StudentService.getStudents()
  },
  methods: {
    add () {
      StudentService.addStudent({...this.newStudent})
      console.log(`Add a new student: ${this.newStudent.name}`)
      // this.students.push({...this.newStudent})
      // this.newStudent = {id: 0, name: '', height: 0}
    },
    del (student) {
      StudentService.delStudent(student)
      // this.students.splice(index, 1)
    }
  }
}
</script>
