// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-events-js": () => import("/home/jimmy/projects/gatsby-theme-practice/gatsby-theme-events/src/templates/events.js" /* webpackChunkName: "component---src-templates-events-js" */),
  "component---src-templates-event-js": () => import("/home/jimmy/projects/gatsby-theme-practice/gatsby-theme-events/src/templates/event.js" /* webpackChunkName: "component---src-templates-event-js" */),
  "component---cache-dev-404-page-js": () => import("/home/jimmy/projects/gatsby-theme-practice/gatsby-theme-events/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */)
}

