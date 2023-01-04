const { app } = require('./app')
const port = process.env.PORT || 9000

if (require.main === module) {
    app.listen(port, () => console.log('listening on port ' + port))
}

module.exports.app = app
