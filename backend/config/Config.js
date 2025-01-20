import { connect } from "mongoose";

connect('mongodb+srv://huseynssaf206:af206task@clusterproducts.eynig.mongodb.net/')
.then(()=>{
    console.log("connected db");
    
})