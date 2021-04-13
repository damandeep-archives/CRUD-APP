var Userdb=require('../model/model');

// creating and saving new user

exports.create=(req,res)=>{
// validate request
if(!req.body){
    res.status(400).send({message:'Content cannot be empty'});
    return;
}

//nw user
const user=new Userdb({
    name:req.body.name,
    email:req.body.email,
    gender:req.body.gender,
    status:req.body.status

})

   //save user in db
   user.save(user).then(data=>{
      // res.send(data);
      res.redirect('/adduser')
   }).catch(err=>{
       res.status(500).send({message:err.message||'Some error occured while creating a create operation'}); 
   }) 


}

//retrieve and return all users
exports.find=(req,res)=>{

    if(req.query.id){
        const id=req.query.id;
        Userdb.findById(id).then(data=>{
            if(!data)
            res.status(404).send({message:'not found user with id'+id})
            else{
                res.send(data);
            }
        }).catch(err=>{
            res.status(500).send({message:'error retrieving with id '+id})
        })


    }else{
        Userdb.find()
        .then(user=>{
            res.send(user)
        })
    
        .catch(err=>{
            res.status(500).send({message:err.message || 'Error occured while finding item in db'})
        })
    }

   
}

//update a new identified user by userid
exports.update=(req,res)=>{
    if(!req.body){
        return res.status(400).send({messgage:'data cannot be emtpty'})
    }
    const id=req.params.id;
  
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false, new:true})
    .then(data=>{
        if(!data){
        res.status(404).send({message:`Cannot Update user with ${id} Maybe not found `})
        }
        else{
            res.send(data);
        }
    }).catch(err=>{
        res.status(500).send({message:`eror update user information`})
    })


}

//Delete a user with specified userid in request
exports.delete=(req,res)=>{
    const id=req.params.id;
    Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data)
        res.stauts(404).send({message:`cannot delelte with id ${id}`})

        else{
            res.send({message:`user was deleted successfully`})
        }


    }).catch(err=>{
        res.status(500).send({message:`could not delete user with id`+id});
    });
}