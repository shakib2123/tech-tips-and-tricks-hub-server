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
exports.CommentServices = void 0;
const comment_model_1 = require("./comment.model");
const createCommentIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield comment_model_1.Comment.create(payload);
    return result;
});
const getCommentsFromDB = (postId, author) => __awaiter(void 0, void 0, void 0, function* () {
    let filter = {};
    if (postId) {
        filter.postId = postId;
    }
    if (author && author !== "undefined") {
        filter.author = author;
    }
    const result = yield comment_model_1.Comment.find(filter).populate("userId");
    return result;
});
const updateCommentFromDB = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id, comment, }) {
    const result = yield comment_model_1.Comment.findByIdAndUpdate(id, { comment }, { new: true });
    return result;
});
const deleteCommentFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield comment_model_1.Comment.findByIdAndDelete(id);
    return result;
});
exports.CommentServices = {
    createCommentIntoDB,
    getCommentsFromDB,
    deleteCommentFromDB,
    updateCommentFromDB,
};
