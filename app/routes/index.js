const catchRoutes = require('./catch_routes')

module.exports = function (app, db) {
  catchRoutes(app, db)
}
