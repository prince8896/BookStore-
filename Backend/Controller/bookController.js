const Book =require('../Model/bookModel')


const getBook = async(req,res)=>{
try{
    const data = await Book.find();
    if(!data){
        return res.status(404).json({message:"Data  not found."})
    }
    // console.log("5"+3);
    // console.log("5"-2);
    // console.log("5"*2);
    return res.status(200).json(data)
}catch(error){
    console.log("error",error);
    return res.status(500).json({message:"Internal Server Error"});
}
}


module.exports={
    getBook
}