const router=require('express').Router();

router.get('/', (req,res)=>{
    res.redirect('/notes');
});
router.get('/about', (req,res)=>{
    res.render('about');
});

module.exports = router;