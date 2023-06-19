const {Schema, model} = require('mongoose')

const newportfolioSchema = new Schema({
    titulo:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    fecha:{
        type:String,
        require:true
    },
    categoria :{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    user:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

module.exports = model('newportafolio', newportfolioSchema)