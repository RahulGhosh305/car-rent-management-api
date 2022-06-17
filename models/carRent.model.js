const mongoose = require("mongoose");
const {Schema} = mongoose;

const status = Object.freeze({
    active: 'active',
    inactive: 'inactive',
    deleted: 'deleted',
});

const carSchema = new Schema({
    name : {
        type: String,
        required: true,
        trim: true
    },
    rentPrice : {
        type: String,
        required: true,
        trim: true
    },
    color : {
        type: String,
        required: true,
        trim: true
    },
    seat : {
        type: Number,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: Object.values(status),
        required: false,
        default: status.active
    }
}, { timestamps: true })

carSchema.methods.toJSON = function () {
    let obj = this.toObject();

    delete obj.createdAt;
    delete obj.updatedAt;
    delete obj.__v;

    return obj;
}

const model = mongoose.model("addCar", carSchema);
module.exports = {CarRentModel: model, CarRentStatus: status};