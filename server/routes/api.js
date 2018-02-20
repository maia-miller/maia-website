const bodyParser = require('body-parser')
const express = require('express')

const users = require('../db/users')

const router = express.Router()
router.use(bodyParser.json())

router.post('/signin',
  signIn,
  auth.issueJwt
)

router.post('/register',
  register,
  auth.issueJwt
)

function signIn (req, res, next) {
  users.getByName(req.body.username)
    .then(user => {
      return user || invalidCredentials(res)
    })
    .then(user => {
      return user && crypto.verifyUser(user.hash, req.body.password)
    })
    .then(isValid => {
      return isValid ? next() : invalidCredentials(res)
    })
    .catch(() => {
      res.status(400).send({
        errorType: 'DATABASE_ERROR'
      })
    })
}

function register (req, res, next) {
  users.exists(req.body.username)
    .then(exists => {
      if (exists) {
        return res.status(400).send({message: 'User exists'})
      }
      users.create(req.body.username, req.body.password)
        .then(() => next())
    })
    .catch(err => {
      res.status(400).send({message: err.message})
    })
}

function invalidCredentials (res) {
  res.status(400).send({
    errorType: 'INVALID_CREDENTIALS'
  })
}

module.exports = router
