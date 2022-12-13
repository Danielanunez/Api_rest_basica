module.exports = {
    home: (req,res) =>{
        return res.render('home', {
            tittle: 'Home del Proyecto',
            message: 'Hola a todos, es un mensaje creado de forma dinámica con template engines'
        })
    },
    us: (req,res) =>{
        return res.render('us', {
            title: 'Home del Nosotros',
            message: 'Hola a todos, es un mensaje creado de forma dinámica con template engines,para nuestra página'
        });
    
    }
}