const express = require('express')
const router = express.Router();
const {register,login} = require('../Controllers/Auth');
const { createCategory, getAllCategory } = require('../Controllers/Category');

const { createPost ,updatePost,getPost,DeletePost,getAllPost} = require('../Controllers/Post');
const {update,Delete,getuser} = require('../Controllers/User')

//Authentication
router.route('/register').post(register);
router.route('/login').post(login);

//Acccount controls
router.route('/:id').put(update);
router.route('/:id').delete(Delete);
router.route('/:id').get(getuser);

//Posts
router.route('/post/createpost').post(createPost);
router.route('/post/updatepost/:id').put(updatePost);
router.route('/post/deletepost/:id').delete(DeletePost);
router.route('/post/getpost/:id').get(getPost);
router.route('/post/getAllpost/').get(getAllPost);

//Categories
router.route('/Categories/').post(createCategory);
router.route('/Categories/All').get(getAllCategory);


module.exports = router;