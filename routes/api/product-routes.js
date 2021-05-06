const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  Product.findAll().then((productData)=>{
    res.json(productData);
  })
});

// get one product
router.get('/:id', (req, res) => {
  Product.findByPk(req.params.id).then((prodData) => {
    res.json(prodData);
  });
});

// create new product
router.post('/', (req, res) => {
  Product.create(req.body)
    .then((newProd) => {
      res.json(newProd);
    })
    .catch((err) => {
      res.json(err);
    });
});
// update product
router.put('/:id', (req, res) => {
  Product.update(    {    
    id: req.body.id,
    product_name: req.body.product_name,
    price: req.body.price,
    stock: req.body.stock,
    category_id: req.body.category_id,    
  },
  {   
    where: {
      id: req.params.id,
    },
  }
)
  .then((updatedTag) => {
    // Sends the updated product as a json response
    res.json(updatedTag);
  })
  .catch((err) => res.json(err));  
});

// delete one product by its `id` value
router.delete('/:id', (req, res) => {  
  Product.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedprod) => {
      res.json(deletedprod);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
