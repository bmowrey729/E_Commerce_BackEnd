const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');


// find all tags
router.get('/', (req, res) => {  
  Tag.findAll().then((tagData)=>{
    res.json(tagData);
  })  
});

// find a single tag by its `id`
router.get('/:id', (req, res) => {  
  Tag.findByPk(req.params.id).then((tagData) => {
    res.json(tagData);
  });
});

// create a new tag
router.post('/', (req, res) => {  
  Tag.create(req.body)
    .then((newTag) => {
      res.json(newTag);
    })
    .catch((err) => {
      res.json(err);
    });
});

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {  
  Tag.update(    {
      // All the fields you can update and the data attached to the request body.
      id: req.body.id,
      tag_name: req.body.tag_name,      
    },
    {      
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedTag) => {
      // Sends the updated tag as a json response
      res.json(updatedTag);
    })
    .catch((err) => res.json(err));
});

// delete on tag by its `id` value
router.delete('/:id', (req, res) => {  
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedTag) => {
      res.json(deletedTag);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
