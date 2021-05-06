const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

 // find all categories
router.get('/', (req, res) => {  
  Category.findAll().then((catData)=>{
    res.json(catData);
  })  
});

// find category by id
router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id).then((catData) => {
    res.json(catData);
  });

});  

// create new product
router.post('/', (req, res) => {
  Category.create(req.body)
    .then((newProd) => {
      res.json(newprod);
    })
    .catch((err) => {
      res.json(err);
    });
});

// update a category by its `id` value
router.put('/:id', (req, res) => {  
  Category.update(
    {      
      id: req.body.id,
      category_name: req.body.category_name,      
    },
    {
        where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedCategory) => {
      // Sends the updated category as a json response
      res.json(updatedCategory);
    })
    .catch((err) => res.json(err));
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {  
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedCat) => {
      res.json(deletedCat);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
