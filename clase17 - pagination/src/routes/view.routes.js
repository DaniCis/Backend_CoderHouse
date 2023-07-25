import {Router} from 'express';
import studentsModel from '../models/students.js';

const router = Router();

router.get('/students',async (req,res)=>{

    const { page=1 } = req.query;
    const {docs, hasNextPage,hasPrevPage,nextPage,prevPage} = await studentsModel.paginate({},{limit:10,page,lean:true})
    const students= docs
    res.render('students',{
        students,
        hasNextPage,
        hasPrevPage,
        prevPage,
        nextPage
    })
})


export default rout