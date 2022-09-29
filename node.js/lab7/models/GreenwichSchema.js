const mogoose = require('mogoose')
const GreenwichSchema = mogoose.GreenwichSchema({
    _id: String,
    subject: String, 
    code: Int32,
    teacher: String
});

var GreenwichModel = mogoose.model("mobile", GreenwichSchema, "mobile")

module.exports = GreenwichModel