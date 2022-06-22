const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const body = {
            ...req.body,
            'user_id':req.session.user_id,
        };
        const postData = await Post.create(body);
        const post = postData.get({ plain: true });
        if (post)
            res.status(201).json(post);
        
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updated = await Post.update(req.body,{
            where: {id: req.params.id}
        });
        if (updated.length === 1 && updated[0] === 1)
            res.status(201).json('record updated');
        
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});



module.exports = router;