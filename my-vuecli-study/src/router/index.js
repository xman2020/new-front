import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Login from '@/components/child/Login'
import My from '@/components/child/My'
import Simple from '@/components/child/Simple'
import Student from '@/components/child/Student'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'login',
          name: 'login',
          component: Login
        },
        {
          path: 'my',
          name: 'my',
          component: My
        },
        {
          path: 'simple',
          name: 'simple',
          component: Simple
        },
        {
          path: 'student',
          name: 'student',
          component: Student
        }
      ]
    }
  ]
})
