"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostServices = void 0;
const post_model_1 = require("./post.model");
const createPostIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield post_model_1.Post.create(payload);
    return result;
});
const getMyPostsFromDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield post_model_1.Post.find({ userEmail: email }).populate("userId");
    return result;
});
const getPostFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield post_model_1.Post.findById(id).populate("userId");
    return result;
});
const getAllPostsFromDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { sortValue, searchValue, filterValue, page, limit } = payload;
    const filter = {};
    if (searchValue) {
        filter.$or = [
            { category: { $regex: searchValue, $options: "i" } },
            { description: { $regex: searchValue, $options: "i" } },
        ];
    }
    else if (filterValue) {
        filter.category = filterValue;
    }
    let sort = {};
    if (sortValue === "-createdAt") {
        sort = { createdAt: -1 };
    }
    else if (sortValue === "createdAt") {
        sort = { createdAt: 1 };
    }
    let skip = 0;
    const limitValue = Number(limit) || 1;
    if (page) {
        skip = (Number(page) - 1) * limitValue;
    }
    const result = yield post_model_1.Post.find(filter)
        .sort(sort)
        .skip(skip)
        .limit(limitValue)
        .populate("userId");
    if (sortValue === "upvote") {
        result.sort((a, b) => b.upvote.length - a.upvote.length);
    }
    else if (sortValue === "downvote") {
        result.sort((a, b) => b.downvote.length - a.downvote.length);
    }
    return result;
});
const updateVoteIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (payload.voteType === "downvote") {
        const post = yield post_model_1.Post.findOne({ _id: payload.postId });
        if (post.downvote.includes(payload === null || payload === void 0 ? void 0 : payload.userId)) {
            // User has already downvoted, so we remove the downvote
            const result = yield post_model_1.Post.findOneAndUpdate({ _id: payload.postId }, { $pull: { downvote: payload.userId } }, { new: true });
            return result;
        }
        else {
            // User has not downvoted yet, so we add the downvote
            const result = yield post_model_1.Post.findOneAndUpdate({ _id: payload.postId }, { $addToSet: { downvote: payload.userId } }, { new: true });
            return result;
        }
    }
    else if (payload.voteType === "upvote") {
        const post = yield post_model_1.Post.findOne({ _id: payload.postId });
        if (post.upvote.includes(payload.userId)) {
            // User has already upvoted, so we remove the upvote
            const result = yield post_model_1.Post.findOneAndUpdate({ _id: payload.postId }, { $pull: { upvote: payload.userId } }, { new: true });
            return result;
        }
        else {
            // User has not upvoted yet, so we add the upvote
            const result = yield post_model_1.Post.findOneAndUpdate({ _id: payload.postId }, { $addToSet: { upvote: payload.userId } }, { new: true });
            return result;
        }
    }
});
exports.PostServices = {
    createPostIntoDB,
    getMyPostsFromDB,
    getPostFromDB,
    updateVoteIntoDB,
    getAllPostsFromDB,
};
