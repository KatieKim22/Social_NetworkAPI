const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
    // get all users
    async getUsers(req, res) {
        try {
            let allUsers = await User.find()
            return res.json(allUsers);
        } catch (e) {
            console.log(e.message)
        }
    },
    // get single user by id
    async getUserbyId(req, res) {
        try {
            const userbyId = await User.findOne({ _id: req.params.userId })
            return res.json(userbyId)
        } catch (e) {
            console.log(e.message)
        }
    },
    // post a new user
    async postUser(req, res) {
        try {
            const newUser = await User.create(req.body)
            return res.json(newUser)
        } catch (e) {
            console.log(e.message)
        }
    },
    // update a user
    async updateUser(req, res) {
        try {
            const updateUser = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            )
            return res.json(updateUser)
        } catch (e) {
            console.log(e.message)
        }
    },
    // delete a user
    async deleteUser(req, res) {
        try {
            const deleteUser = await User.findOneAndDelete({ _id: req.params.userId })
            return res.json(deleteUser)
        } catch (e) {
            console.log(e.message)
        }
    },
    // add friends to friends list
    async addFriend(req, res) {
        try {
            const newFriend = await User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet: { friends: req.params.friendId } }, { new: true })
            return res.json(newFriend)
        } catch (e) {
            console.log(e.message)
        }
    },
    // remove friend
    async removeFriend(req, res) {
        try {
            const deleteFriend = await User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } }, { new: true })
            return res.json(deleteFriend)
        } catch (e) {
            console.log(e.message)
        }
    }
}