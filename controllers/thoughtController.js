const { ObjectId } = require('mongoose').Types;
const { user, thought, User, Thought } = require('../models');

module.exports = {
    // get all thoughts
    async getAllThoughts(req, res) {
        try {
            const allThoughts = await Thought.find()
            return res.json(allThoughts)
        } catch (e) {
            console.log(e.message)
        }
    },
    // get a single thought
    async getSingleThought(req, res) {
        try {
            const thoughtbyId = await Thought.findOne({ _id: req.params.thoughtId })
            return res.json(thoughtbyId)
        } catch (e) {
            console.log(e.message)
        }
    },
    // post a new thought
    async postThought(req, res) {
        try {
            const newThought = await Thought.create(req.body)
            return res.json(newThought)
        } catch (e) {
            console.log(e.message)
        }
    },
    // update a thought
    async updateThought(req, res) {
        try {
            const updateThought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            )
            return res.json(updateThought)
        } catch (e) {
            console.log(e.message)
        }
    },
    // delete a thought
    async deleteThought(req, res) {
        try {
            const deleteThought = await Thought.findOneAndDelete({ _id: req.params.thoughtId })
            return res.json(deleteThought)
        } catch (e) {
            console.log(e.message)
        }
    },
    // add a reaction
    async addReaction(req, res) {
        try {
            const newReaction = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $addToSet: { reactions: req.params.reactionId } }, { new: true })
            return res.json(newReaction)
        } catch (e) {
            console.log(e.message)
        }
    },
    // remove a reaction
    async deleteReaction(req, res) {
        try {
            const deleteReaction = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $pull: { reactions: req.params.reactionId } }, { new: true })
            return res.json(deleteReaction)
        } catch (e) {
            console.log(e.message)
        }
    },
}