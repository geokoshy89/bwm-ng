const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const rentalSchema=new Schema({
  title:{type:String,required:true,max:[120,'Too lone, max is 120 characters']},
  city:{type:String,required:true,lowerCase:true},
  street:{type:String,required:true,min:[4,'Too short,min is 4 characters']},
  category:{type:String,required:true,lowerCase:true},
  image:{type:String,required:true},
  bedrooms:Number,
  shared:Boolean,
  description:{type:String,required:true},
  dailyRate:Number,
  createdAt:{type:Date,default:Date.now},
  user:{ type:Schema.Types.ObjectId,ref:'User' },
  bookings:[{type:Schema.Types.ObjectId,ref:'Booking'}]
});

module.exports=mongoose.model('Rental',rentalSchema);
