import dotenv from 'dotenv';
import args from './params.js';

const environment = args.mode; // development - production
console.log(environment)
// config
dotenv.config({
  path: `./.env.${environment}`
});

export default {
    PORT: process.env.PORT,
   MONGO_URI: process.env.MONGO_URI,

}