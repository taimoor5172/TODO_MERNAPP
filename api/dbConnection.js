const mongoose = require("mongoose");
try{
    let url = process.env.DB_URL+process.env.DB_NAME;
    mongoose.connect(url).then(() => {
        console.log('connected to MongoDB')
    }).catch((err) => console.log(err));
}
catch(err) {
    console.log(err);
}
