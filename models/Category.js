import {mongoose} from 'mongoose';
const Schema = mongoose.Schema;


const CategorySchema = new Schema({
categoryId: {
    type: Number,
    unique: true,
    required: true,
    minlength: 1  
},

categoryName: {
    type: String,
    required: true,
    minlength: 5
}

});

export default mongoose.model('Category', CategorySchema);