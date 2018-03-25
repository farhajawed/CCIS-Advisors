module.exports = function() {
    var mongoose = require("mongoose");

    var UserSchema = mongoose.Schema({
        username: {type: String, required: true},
        password: String,
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        reputationPoints: Number,

        facebook: {
            token: String,
            id: String,
            displayName: String
        },
        threads: [{type: mongoose.Schema.ObjectId, ref: "Thread"}],
        dateCreated: {type: Date, default: Date.now}
    }, {collection: "assignment.user"});

    return UserSchema;
};