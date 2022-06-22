const router = require('express').Router();
const { Comment, Post } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const body = {
            'body':req.body.comment,
            'user_id':req.session.user_id,
            'post_id':req.body.id
        };
        console.log(body);
        const commentData = await Comment.create(body);
        console.log(commentData);
        const comment = commentData.get({ plain: true });
        if (comment)
            res.status(201).json(comment);
        
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;