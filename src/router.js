import Vue from 'vue'
import Router from 'vue-router'
import Skills from './components/Skills.vue'
import About from './components/About.vue'
import Work from './components/Work.vue'
import Project1 from './components/Project1.vue'
import Project2 from './components/Project2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'skills',
      component: Skills
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/project-1',
      name: 'project1',
      component: Project1
    },
    {
      path: '/project-2',
      name: 'project2',
      component: Project2
    }
  ]
})