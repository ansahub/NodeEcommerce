import {mongoose} from 'mongoose';

const Category = Object;

const Schema = mongoose.Schema;

const ItemSchema = new Schema({

itemId: {
    type: Number,
    unique: true,
    trim: true,
    minlength: 1  
},

itemName: {
    type: String,
    required: true,
    minlength: 5
},

price: {
    type: Number,
    required: true    
},

category: {
    type: Category,
    required: true    
}

});

export default mongoose.model('Item', ItemSchema);