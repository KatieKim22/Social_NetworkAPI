const router = require('express').Router();
const {
    getUsers,
    getUserbyId,
    postUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController');

// /api/user
router.route('/').get(getUsers).post(postUser);

// /api/user/:userId

router
    .route('/:userId')
    .get(getUserbyId)
    .put(updateUser)
    .delete(deleteUser);


// api/user/:userId/friends/:friendsId
router.route('/:userId/friends/:friendsId').post(addFriend).delete(removeFriend)

module.exports = router;