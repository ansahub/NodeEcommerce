import {mongoose} from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({

name: {
    type: String,
    unique: false,
    trim: true,
    minlength: 2  
},

lastname: {
    type: String,
    unique: false,
    trim: true,
    minlength: 2  
},

email: {
    type: String,
    unique: true,
    trim: true,
    minlength: 5  
},

password: {
    type: String,
    required: true,
    minlength: 3
},

admin: {
    type: Boolean,
    required: true,
    default: false
}

});

export default mongoose.model('User', UserSchema);
