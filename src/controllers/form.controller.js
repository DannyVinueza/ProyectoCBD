const Portafolio = require('../models/newPortafolio')

const renderIndex = (req,res) =>{
    res.render("index");
}

const renderForm = (req,res)=>{
    res.render("formulario/form");
}

const createNew2Portafolio =async (req,res)=>{
    const {titulo, email, fecha, categoria, descripcion} = req.body
    const new2Portfolio = new Portafolio({titulo, email, fecha, categoria, descripcion})
    new2Portfolio.user = req.user._id
    await new2Portfolio.save()
    res.redirect('/portafolios')
}


module.exports = {
    renderIndex,
    renderForm,
    createNew2Portafolio
}