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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = exports.createPost = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const post_service_1 = require("./post.service");
exports.createPost = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield post_service_1.PostServices.createPostIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.CREATED,
        message: "Post created successfully",
        data: result,
    });
}));
const getMyPosts = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.params;
    const { sortValue, searchValue, filterValue, page, limit } = req.query;
    const result = yield post_service_1.PostServices.getMyPostsFromDB({
        email,
        sortValue,
        searchValue,
        filterValue,
        page,
        limit,
    });
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Posts retrieved successfully",
        data: result,
    });
}));
const getPost = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield post_service_1.PostServices.getPostFromDB(id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Post retrieved successfully",
        data: result,
    });
}));
const getAllPosts = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { sortValue, searchValue, filterValue, page, limit } = req.query;
    const result = yield post_service_1.PostServices.getAllPostsFromDB({
        sortValue,
        searchValue,
        filterValue,
        page,
        limit,
    });
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Posts retrieved successfully",
        data: result,
    });
}));
const updateVote = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const voteData = req.body;
    const result = yield post_service_1.PostServices.updateVoteIntoDB(voteData);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Voted successfully",
        data: result,
    });
}));
const updatePost = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { postId } = req.params;
    const updatedData = req.body;
    const result = yield post_service_1.PostServices.updatePostIntoDB({
        postId,
        updatedData,
    });
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Post Updated successfully",
        data: result,
    });
}));
const deletePost = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { postId } = req.params;
    const result = yield post_service_1.PostServices.deletePostFromDB(postId);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Post deleted successfully",
        data: result,
    });
}));
exports.PostController = {
    createPost: exports.createPost,
    getMyPosts,
    getPost,
    updateVote,
    getAllPosts,
    updatePost,
    deletePost,
};
