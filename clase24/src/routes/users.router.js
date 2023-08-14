import { Router } from 'express';
import Courses from '../dao/dbManagers/courses.js';
import passport from "passport";
import Users from "../dao/dbManagers/users.js";
import jwt from "jsonwebtoken";

const router = Router();
const coursesManager = new Courses();
const usersManager = new Users()

router.get("/", async (req, res) => {
    let users = await usersManager.getAll();
    if (!users)
      return res
        .status(500)
        .send({ status: "error", error: "No pude traer informacion" });
  
    res.send({ status: "success", payload: users });
  });
  
  router.post("/", async (req, res) => {
    const { first_name, last_name, email, dni, birthDate, gender } = req.body;
    if(!first_name || !last_name || !email || !dni || !birthDate || !gender) 
        return res.status(400).send({status:'error',error:'incomplete data'})
    let result = await usersManager.saveUser({
      first_name,
      last_name,
      email,
      dni,
      birthDate,
      gender,
    });
    if(!result) return res.status(500).send({status:'success',payload:result})
    res.send({ status: "success", payload: result });
});

router.post("/:uid/courses/:cid", async (req, res) => {
    const { uid, cid } = req.params;
    const course = await coursesManager.getById(cid);
  
    if (!course)
      return res.status(404).send({ status: "error", error: "Course not found" });
    const user = await usersManager.getById({ _id: uid });
    if (!user)
      return res.status(404).send({ status: "error", error: "User not found" });
  
    let courseExist = user.courses.some((c) => c._id.toString() === cid);
    if (!courseExist)
      return res
        .status(404)
        .send({ status: "error", error: "User not found in this course" });
  
    user.courses.push(course._id);
    course.students.push(user._id);
    await usersManager.updateUser(uid, user);
    await coursesManager.updateCourse(cid, course);
    res.send({ status: "success", message: "user add to course" });
  });
  

export default router;