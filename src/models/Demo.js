const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    id: { type: Number },
    Name: { type: String, maxlength: 17 },
    LastUpdate: { type: Date, default: Date.now },
    LastUpdateUserId: { type: Number },
});

dataSchema.index({ id: 1 });

const Demo = mongoose.model("Demo", dataSchema)

module.exports = Demo;
