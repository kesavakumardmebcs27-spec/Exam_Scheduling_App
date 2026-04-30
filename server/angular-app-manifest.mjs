
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Exam_Scheduling_App/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Exam_Scheduling_App/dashboard",
    "route": "/Exam_Scheduling_App"
  },
  {
    "renderMode": 2,
    "route": "/Exam_Scheduling_App/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/Exam_Scheduling_App/exam-scheduling"
  },
  {
    "renderMode": 2,
    "route": "/Exam_Scheduling_App/result-processing"
  },
  {
    "renderMode": 2,
    "route": "/Exam_Scheduling_App/notifications"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 455, hash: 'ba72aa38ec91eeb24005e4f57d8896a20d86918bce9a30e25365f8effe0f92aa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 968, hash: '3bc564193914e50b551fe479f8b7da32b79a39e8add68c1a1343ebb711a58e48', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 1770, hash: '82a5a8342f47ac5d115cd7df30e70d684ba7820060e87aaae1ac3088ea5cb272', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'notifications/index.html': {size: 1870, hash: 'c141be5a8f57033ebc083c04ebcf4a851ca9cd92725e178dd9db1ddb985a827d', text: () => import('./assets-chunks/notifications_index_html.mjs').then(m => m.default)},
    'exam-scheduling/index.html': {size: 3789, hash: 'c4ce185a00a6570a777ec55f0abf4e1ce0e5859340ff349a155ad70e02de13c4', text: () => import('./assets-chunks/exam-scheduling_index_html.mjs').then(m => m.default)},
    'result-processing/index.html': {size: 3312, hash: '9af864c1fd67e8e0fd46cd3967804685a31625a635a784fd7b6d61cf51f9ee0a', text: () => import('./assets-chunks/result-processing_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
