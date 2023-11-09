const homeController = (req,res)=>{
    res.render('home.ejs',{'name':'foo'})
}

export {homeController}