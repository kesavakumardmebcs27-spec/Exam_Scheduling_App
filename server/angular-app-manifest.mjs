
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/dashboard",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/exam-scheduling"
  },
  {
    "renderMode": 2,
    "route": "/result-processing"
  },
  {
    "renderMode": 2,
    "route": "/notifications"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 435, hash: 'e6f12c6fd1175c48749ba1d59c4b78eabfd3b9760fd872dde16407a0c9c78e6a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 948, hash: '218876a348bd10b75c3500282e62436d70247d5bdbda5c900e79e0958e758377', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'notifications/index.html': {size: 1850, hash: 'd08448fb2bd7aa6de403356a8d09c8d800a99892b68a4c4fcee1de5be69896c2', text: () => import('./assets-chunks/notifications_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 1750, hash: '2ce7f225f04ad7dde1e1455a17f7472621031dddd0729c427b1200dba683ea03', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'exam-scheduling/index.html': {size: 3769, hash: '652c6184cb96e75592f1ff6ac87c70a7c9f93016b19b32cbbd35d16ab5eb501f', text: () => import('./assets-chunks/exam-scheduling_index_html.mjs').then(m => m.default)},
    'result-processing/index.html': {size: 3292, hash: '9d23b9bb8fd3d55bd4f4635cd97d7d88e610cb2951f710f6fcf40f27a9e8e35d', text: () => import('./assets-chunks/result-processing_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
