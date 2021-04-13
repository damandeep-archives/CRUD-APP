const axios=require('axios');



exports.homeRoutes=(req,res)=>{
    //making a get request to /api/users
    axios.get('http://localhost:3000/api/users')
    .then(response=>{
        res.render('index',{users:response.data});
    })
   
}

exports.add_user=((req,res)=>{
    res.render('add_user');
})


exports.updateuser=(req,res)=>{
    axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}})
    .then(function(userdata){
        res.render('updateuser',{user:userdata.data});
    })
    .catch(err=>{
        res.send(err);
    })  
}