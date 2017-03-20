const express = require('express');
const router = express.Router();
const FB = require('facebook');
const querify = require('utils/query');

// GET /photos/:id
router.get('/:id', (req, res)=> {
    const { id } = req.params;
    const query = querify(req.query);

    FB.api(`${id}/photos${query}`, (err, resp)=>{
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