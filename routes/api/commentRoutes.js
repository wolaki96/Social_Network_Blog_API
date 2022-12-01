const router = require('express').Router();
const {
    getComment,
    getSingleComment,
    createComment,
    updateComment,
    deleteComment
} = require('../../controllers/commentController');

router.route('/').get(getComment).post(createComment);

router.route('/:courseId')
    .get(getSingleComment)
    .put(updateComment)
    .delete(deleteComment);

    module.exports = router;