const express = require('express')
const router = express.Router()
const controller = require("./controller")
const VerifyJwt = require("./jwt")

router.get("/", controller.Home)
router.post("/auth", controller.Auth)
router.get("/profile", VerifyJwt, controller.Profile)
router.get("/dash", VerifyJwt, controller.Dash)
router.get("/verify", VerifyJwt, controller.verify)

module.exports = router