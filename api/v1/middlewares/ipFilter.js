module.exports=(req,res,next)=>{
    const allowIps=['::1','1.5.88.99'];// רשימת כתובות IP מורשות לגישה לשרת
    for(let i=0;i<allowIps.length;i++){
        if(req.ip==allowIps[i]){
            return next();
        }
    }
    return res.status(401).json({msg:`You Are Not Authorized`});
};