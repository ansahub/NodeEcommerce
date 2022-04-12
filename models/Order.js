import {mongoose} from 'mongoose';

const Item = Object;
const Schema = mongoose.Schema;


const OrderSchema = new Schema({

orderId: {
    type: String,
    unique: true,
    trim: true,
    required: true,
    minlength: 1  
},

items: {
    type: [Item],    
    required: true
},

totalPrice: {
type: Number,
required: true
},

orderDate: {
    type: Date,
    default: Date.now,
    required: true
}

});


export default mongoose.model('Order', OrderSchema);