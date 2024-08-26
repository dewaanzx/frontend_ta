import LoginView from '@/views/auth/login/index.vue'
import RegisterView from '@/views/auth/register/index.vue'
import ResetView from '@/views/auth/reset/index.vue'
import VerificationView from '@/views/auth/verification/index.vue'
import NewpasswordView from '@/views/auth/newpassword/index.vue'
import SuccesschangeView from '@/views/auth/successchange/index.vue'


import ExampleLayout from '@/layouts/ExampleLayout.vue';

// middleware
import GuestMiddleware from '@/middleware/guest.middleware.js';

export default [{
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      title: 'Login',
      middleware: [GuestMiddleware],
    },
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: {
      title: 'Register',
      middleware: [GuestMiddleware],
    },
  },
  {
    path: '/reset',
    name: 'reset',
    component: ResetView,
    meta: {
      title: 'Reset',
      middleware: [GuestMiddleware],
    },
  },
  {
    path: '/verification',
    name: 'verification',
    component: VerificationView,
    meta: {
      title: 'Verification',
      middleware: [GuestMiddleware],
    },
  },
  {
    path: '/newpassword',
    name: 'newpassword',
    component: NewpasswordView,
    meta: {
      title: 'Newpassword',
      middleware: [GuestMiddleware],
    },
  },
  {
    path: '/successchange',
    name: 'successchange',
    component: SuccesschangeView,
    meta: {
      title: 'Successchange',
      middleware: [GuestMiddleware],
    },
  }
]
