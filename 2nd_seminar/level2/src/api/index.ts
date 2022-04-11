import express, { Router } from 'express';
const router: Router = express.Router();

const signup = require('./signup');
const user = require('./user');
const blog = require('./blog');
const like = require('./like');

router.get('/user', require('./user'));
router.post('/signup', signup);
router.post('/blog', require('./blog'));
router.get('/like/:blogId', require('./like'));

module.exports = router;
