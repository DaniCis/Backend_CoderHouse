import { usersModel } from "../models/users.js";

export default class Users {
    constructor() {
        console.log(" Working in mongoDb");
    }

    getAll = async () => {
        let users = await usersModel.find().populate("Courses");
        return users.map((user) => user.toObject());
    };

    saveUser = async (user) => {
        let result = await usersModel.create(user);
        return result;
    };

    getById = async (params) => {
        let result = await usersModel.findOne(params).populate("Courses").lean();
        return result;
    };

    updateUser = async (id, user) => {
        delete user._id;
        let result = await usersModel.updateOne({ _id: id }, { $set: user });
        return result;
    };
}