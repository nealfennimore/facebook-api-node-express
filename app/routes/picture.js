const express = require('express');
const router = express.Router();
const FB = require('facebook');
const querify = require('utils/query');

// GET /picture/:id
router.get('/:id', (req, res)=> {
    const { id } = req.params;
    const query = querify(req.query);

    FB.napi(`${id}/picture${query}`, (err, resp)=>{
        if(err) {
            return res.json({
                error: true,
                message: err
            });
        }
        res.json(resp);
    });
});

module.exports = router;