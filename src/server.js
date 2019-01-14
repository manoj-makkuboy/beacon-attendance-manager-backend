// require packages
const Koa = require("koa");
const router = require("koa-router")();
const mount = require("koa-mount");

// create an instance of the Koa object
const app = new Koa();
// mount the route
app.use(mount(require("./router/helloWorld.js")));
app.use(router.routes()); // route middleware
if (require.main === module) {
  app.listen(3000); // default
  console.log('Access sample endpoint by http://localhost:3000/helloWorld');
}


