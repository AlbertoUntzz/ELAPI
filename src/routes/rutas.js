const { Router } = require('express');
const router = Router()

router.get('/test', (req, res) => {
    const data = {
        "name": "tenis",
        "website": "tenis.com"
    }
    res.json()
});


module.exports = router;