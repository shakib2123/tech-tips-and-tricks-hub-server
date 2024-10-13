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
exports.FollowServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const user_model_1 = require("../User/user.model");
const mongoose_1 = require("mongoose");
const createFollowIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield (0, mongoose_1.startSession)();
    session.startTransaction();
    try {
        const follower = yield user_model_1.User.findOneAndUpdate({ _id: payload.followerId }, { $addToSet: { following: payload.followingId } }, { new: true, session } // Include session here
        );
        if (!follower) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Follower not found");
        }
        const following = yield user_model_1.User.findOneAndUpdate({ _id: payload.followingId }, { $addToSet: { followers: payload.followerId } }, { new: true, session } // Include session here
        );
        if (!following) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Following not found");
        }
        yield session.commitTransaction();
        session.endSession();
        return follower;
    }
    catch (error) {
        yield session.abortTransaction();
        session.endSession();
        console.error("Error during transaction:", error);
        throw new AppError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, error.message || "Something went wrong");
    }
});
const createUnfollowIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield (0, mongoose_1.startSession)();
    session.startTransaction();
    try {
        const follower = yield user_model_1.User.findOneAndUpdate({ _id: payload.followerId }, { $pull: { following: payload.followingId } }, { new: true, session });
        if (!follower) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Follower not found");
        }
        const following = yield user_model_1.User.findOneAndUpdate({ _id: payload.followingId }, { $pull: { followers: payload.followerId } }, { new: true, session });
        if (!following) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Following not found");
        }
        yield session.commitTransaction();
        session.endSession();
        return follower;
    }
    catch (error) {
        yield session.abortTransaction();
        session.endSession();
        console.error("Error during transaction:", error);
        throw new AppError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, error.message || "Something went wrong");
    }
});
exports.FollowServices = { createFollowIntoDB, createUnfollowIntoDB };
