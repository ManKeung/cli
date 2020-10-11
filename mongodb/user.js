const {mongoose, types} = require('../db/mongodb')
const Schrma = mongoose.Schema

const UserSchema = new Schrma({
    username: {
        type: types.String,
        unique: true
    },
    password: types.String,
    name: types.String,
    age: types.Number,
    sex: types.String,
    tel: types.Number,
    status: {
        type: types.Number,
        default: 1
    }
})

module.exports = mongoose.model('User', UserSchema, 'user')