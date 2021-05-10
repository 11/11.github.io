import 'views/view-homepage'
import 'views/view-about'

import 'views/blogs/an-introduction-to-rendering-on-the-web'

/*
 * TODO: figure out how to make this work
 * Purpose: wait to load files when requested from the router
 *   - prevents importing/loading all website routes on startup
 */
// async function lazyLoad(viewFilepath) {
//   await import (viewFilepath);
// }


export const ROUTING_TABLE = [
  /****** TOP LEVEL ROUTES: *****/
  { path: '/', component: 'view-homepage' },
  { path: '/about', component: 'view-about' },

  /****** BLOG ROUTES ******/
  {
    path: '/an-introduction-to-rendering-on-the-web',
    component: 'an-introduction-to-rendering-on-the-web'
  },
]
