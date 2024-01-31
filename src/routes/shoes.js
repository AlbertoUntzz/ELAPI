const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const shoes = require('../Tenis.json');
console.log(shoes);

router.get('/', (req,res) => {
    res.json(shoes);
})

router.post('/', (req,res) => {
    const {Marca,Modelo,Tallas,Color,Precio } = req.body;
    if(Marca && Modelo && Tallas && Color && Precio) {
       const id = shoes.length + 1;
       const NewShoe = {...req.body, id};
       console.log(NewShoe)
       shoes.push(NewShoe);
       res.json(shoes);
    }else{
        res.send('wrong Request')
    }
    res.send('received');
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { Marca, Modelo, Tallas, Color, Precio } = req.body;

    if (Marca && Modelo && Tallas && Color && Precio) {
        _.each(shoes, (shoe, i) => {
            if (shoe.id == id) {
                shoes[i].Marca = Marca;
                shoes[i].Modelo = Modelo;
                shoes[i].Tallas = Tallas;
                shoes[i].Color = Color;
                shoes[i].Precio = Precio;
            }
        });
        res.json(shoes);
    } else {
        res.send('wrong Request');
    }
});




router.delete('/:id', (req,res) => {
    const { id } = req.params;
    _.each(shoes, (shoe, i) => {
        if (shoe.id == id) {
            shoes.splice(i,1);
        }
    })
    res.send(shoes);
})

module.exports = router;