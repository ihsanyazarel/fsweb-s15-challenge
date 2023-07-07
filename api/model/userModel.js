const db = require("../../data/dbConfig");

const insertUser = async (user) => {
    await db("users").insert(user)
    return findUserByUserName(user.username)
}

const findUserByUserName = (username) => {
    return db("users").where("username", username).first()
}

const getAllUsers = () => {
    return db("users")
}


module.exports = {
    insertUser,
    findUserByUserName,
    getAllUsers
}