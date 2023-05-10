const router = require("express").Router();
const Controllers = require("../controllers/users_controller");

router.post('/signup', async (req, res) => {
    try {
        const data = await Controllers.SignUp(req.body);
        return data ? res.send(data) : res.sendStatus(400);
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
})

router.get('/signin', async (req, res) => {
    try {
        const data = await Controllers.SignIn(req.body);
        return data ? res.send(data) : res.sendStatus(400);
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
})

module.exports = router;