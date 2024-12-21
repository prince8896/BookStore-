const mongoose =require('mongoose');

const bookSchima = mongoose.Schema({
    name:{
        type:String,
      //  required:true
    },
    title:{
      type:String,
      //  required:true
    },
    price:{
        type:Number,
         //  required:true
        
    },
    category:{
        type:String,
        //required:true
    },
    image:{
        type:String
    }
})

const Book = mongoose.model('Book',bookSchima);

module.exports= Book;