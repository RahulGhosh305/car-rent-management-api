const mongoose = require("mongoose");
const { Schema } = mongoose;

const customerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    selectedCar: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true })

customerSchema.methods.toJSON = function () {
    let obj = this.toObject();

    delete obj.createdAt;
    delete obj.updatedAt;
    delete obj.__v;

    return obj
}

const model = mongoose.model("customers", customerSchema)
module.exports = { CustomerModel: model }
