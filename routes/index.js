const tasksRouter = require("./tasks.router")
const servicesRouter = require("./services.router")

function routerApi(app) {
app.use('/tasks', tasksRouter)
app.use('/servicios', servicesRouter)
}

module.exports = routerApi;
