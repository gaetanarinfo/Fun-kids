const routes = [{
    path: '/',
    component: () => import('layouts/Main.vue'),
    children: [{
        path: '',
        component: () => import('src/pages/Home.vue')
      },
      {
        path: '/level',
        component: () => import('src/pages/Level.vue')
      },
      {
        path: '/level/:user_id',
        component: () => import('src/pages/Level.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
