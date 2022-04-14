import express, { Router } from 'express';
const router: Router = express.Router();

const signup = require('./signup');
const user = require('./user');
const blog = require('./blog');
const like = require('./like');

router.get('/user', user);
router.post('/signup', signup);
router.post('/blog', blog);
router.get('/like/:blogId', like);

module.exports = router;
