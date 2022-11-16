const routes = [{
    path: '/',
    component: () => import('layouts/Main.vue'),
    children: [{
      path: '',
      component: () => import('src/pages/Home.vue')
    }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
