export default class courseRepository{
    constructor(dao){
        this.dao=dao
    }
    getAllCourses =()=>{
        return this.dao.getAll()
    }
    getCoursesById =(id)=>{
        return this.dao.getById(id)
    }
    createCourse =(course)=>{
        return this.dao.saveCourse(course)
    }
    update =(id,course)=>{
        return this.dao.updateCourse(id,course)
    }
}