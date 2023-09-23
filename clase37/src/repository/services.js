import UserRepository from "./userRepository.js";
import CoursesRepository from "./courseRepository.jss";
import Users from '../dao/dbManagers/users.js'
import Courses from '../dao/dbManagers/courses.js'

const userDao= new Users();
const coursesDao = new Courses()

export const userService = new UserRepository(userDao)
export const coursesService = new CoursesRepository(coursesDao)