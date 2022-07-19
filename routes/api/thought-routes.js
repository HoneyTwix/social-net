const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  removeThought,
  addReaction,
  updateThought,
  deleteThought,
  removeReaction
} = require('../../controllers/thought-controller');

router
  .route('/')
  .get(getAllThoughts)


// /api/thoughts/<userId>
router
  .route('/:userid')
  .get(getThoughtById)
  .post(addThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/<userId>/<thoughtId>
router
  .route('/:userId/:thoughtId')
  .put(addReaction)
  .delete(removeThought);

// /api/thoughts/<userId>/<thoughtId>/<replyId>
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;
