const CONF = require('../config')

module.exports = (ctx, next) => {
    return next().catch(err => {
        if (err.status === CONF.code.TOKENERR) {
            ctx.status = CONF.code.TOKENERR
            ctx.body = {
                error: err.originalError ? err.originalError.message : err.message
            }
            return
        }

        throw err
    })
}