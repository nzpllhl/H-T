import Vue from 'vue'
import Router from 'vue-router'
import Customers from '@/components/Customers'
import About from '@/components/About'
import Add from '@/components/Add'
import Delter from '@/components/Delter'
import Edit from '@/components/Edit'
Vue.use(Router)

export default new Router({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Customers',
      component: Customers
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Add',
      name: 'Add',
      component: Add
    },
    {
      path: '/Delter/:id',
      name: 'Delter',
      component: Delter
    },
    {
      path: '/Edit/:id',
      name: 'Edit',
      component: Edit
    },

  ]
})
