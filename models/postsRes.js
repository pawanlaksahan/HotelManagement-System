const mongoose = require('mongoose');

const postSchemaRes = new mongoose.Schema({
    Name:{
        type:String,
        required: true
    },
    ID:{
        type:String,
        required: true
    },
    Phone_No:{
        type:String,
        required: true
    },
    Check_In:{
        type:String,
        required: true
    },
    Check_Out:{
        type:String,
        required: true
    },
    No_Of_Rooms:{
        type:String,
        required: true
    }


});

//DB name is Room_Reservations
//created module export to the DB
module.exports = mongoose.model('Room_Reservations',postSchemaRes);