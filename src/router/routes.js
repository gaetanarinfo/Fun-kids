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
        path: '/cgv',
        component: () => import('src/pages/Cgv.vue')
      },
      {
        path: '/confidentialite',
        component: () => import('src/pages/Confidentialite.vue')
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
