const mongoose = require('mongoose');

const GpaRecordSchema = new mongoose.Schema({
    name: {
        type: String,
        required: function () {
            return this._userLoggedIn === true;
        }
    },
    subjects: [
        {
            subjectName: { type: String, required: true },
            grade: { type: String, required: true },
            credit: { type: Number, required: true },
        }
    ],
    gpa: { type: Number, required: true },
    _userLoggedIn: { type: Boolean, required: true } // this won't be stored, just used internally
}, { timestamps: true });

module.exports = mongoose.model('GpaRecord', GpaRecordSchema);
