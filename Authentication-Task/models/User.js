const mongoose = require("mongoose");

const UserSchema = mongoose.Schema (
    {
        firstName: {
            type: String,
            required
        },
        lastName: {
            type: String,
            required
        },
        email: {
            type: String,
            required,
            unique: true
        },
        password: {
            type: String,
            required
        },
        userRole : {
            type: String,
            enum: ["users", "staff", "manager", "admin", "not assigned"],
            default: "not assigned"
        },
        isStaff : {
            type: Boolean,
            default: 0
        },
        isManager : {
            type: Boolean,
            default: 0
        },
        isAdmin : {
            type: Boolean,
            default: 0
        }
    },
    {
        timestamp: true
    }
);

module.exports = mongoose.model("Users", UserSchema);