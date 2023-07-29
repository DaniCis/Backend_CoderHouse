import passport from "passport";
import local from "passport-local";
import userModel from "../models/user.js";
import githubService from 'passport-github2';

const localStrategy = local.Strategy;
const initPassport =() =>
{
    passport.serializeUser((user,done)=>{
        done(null,user._id)
    });
    passport.deserializeUser(async(id,done)=>{
        let user = await githubService.findById(id);
        done(null,user);
    })


    passport.use('github', new githubService({
        clientID: "",
        clientSecret: "",
        callbackURL: "http://localhost:8080/api/session/githubcallback"
    }, async (accessToken,refreshToken,profile, done)=>
    { try{

        console.log(profile);
        let user = await userModel.findOne({email:profile.json.email})
        if(!user){
            let newUser = {
                first_name: profile._json.name,
                last_name: profile.json.last_name,
                age:18,
                email: profile._json.email,
                password:''
            }
            let result = await  userModel.create(newUser);
            done(null,result)
        }else{
            done(null,user)
        }
    }catch(error){
        return done(error)
    }

    }))

}

export default initPassport;