const express=require('express');
const route=express.Router();
const services=require('../services/render');

const controller=require('../controller/controller');

/*
 @description root route
 @method GET/
 */

route.get('/',services.homeRoutes);

/*
 @description add users
 @method GET/add-user
 */
route.get('/adduser',services.add_user)


/*
 @description update user
 @method GET /updateuser
 */
route.get('/updateuser',services.updateuser);

//API
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);




module.exports=route;