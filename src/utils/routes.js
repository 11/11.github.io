import 'views/view-homepage';
import 'views/view-about';
import 'views/view-contact';

import 'views/blogs/view-particle-net';

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
  { path: '/contact', component: 'view-contact' },

  /****** BLOG ROUTES ******/
  { path: '/particle-net', component: 'view-particle-net' },
]
