import jwt from 'jsonwebtoken'; 
import {errorHandler} from './error.js'; 

export const verifyToken = (req, res, next) => {
    // here we want to verify inside the cookie whether the user requesting to update is authenticated. we need to install another package called cookie parser
    const token = req.cookies.access_token; 
    if(!token){
        return next(errorHandler(401, 'Unauthorized')); 
    }
    jwt.verify(token,process.env.JWT_SECRET, (err, user) => {
        //above here,we verified the token through jwt and the results are err and user, 
        if(err){
            return next(errorHandler(401, 'Unauthorized')); 
        }
        // if there's no error, we combine the the req to the user data to get the user data
        req.user = user; 
        next(); 
        // next in our case here is  update user function found inside the route. 
    });
}; 