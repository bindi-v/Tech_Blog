//const router = require('express').Router();
const express= require("express")
const router = express.Router()

const {User, Post, Comment} = require("../models");

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });
  
  router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll({
        include: [User],
      });
  
      const posts = postData.map((post) => post.get({ plain: true }));
  
      res.render('allposts', { posts });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  router.get('/post/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          User,
          {
            model: Comment,
            include: [User],
          },
        ],
      });
  
      if (postData) {
        const post = postData.get({ plain: true });
  
        res.render('singlepost', { post });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;