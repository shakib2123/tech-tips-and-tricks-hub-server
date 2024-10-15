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
exports.UserServices = void 0;
const user_model_1 = require("./user.model");
const getUsersFromDB = (role) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = {
        isDeleted: false,
        role: "",
    };
    if (role) {
        filter.role = role;
    }
    const result = yield user_model_1.User.find(filter);
    return result;
});
const getCurrentUserFromDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findOne({ email });
    return result;
});
const updateUserInfoIntoDB = (email, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findOneAndUpdate({ email }, payload);
    return result;
});
const followingActivity = (email, tab) => __awaiter(void 0, void 0, void 0, function* () {
    let usersId;
    const user = yield user_model_1.User.findOne({ email });
    if (tab === "following") {
        usersId = user === null || user === void 0 ? void 0 : user.following;
    }
    else if (tab === "followers") {
        usersId = user === null || user === void 0 ? void 0 : user.followers;
    }
    const users = yield user_model_1.User.find({ _id: { $in: usersId } });
    return users;
});
const deleteUserFromDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.findOneAndUpdate({ _id: userId }, { isDeleted: true });
    return result;
});
exports.UserServices = {
    getCurrentUserFromDB,
    updateUserInfoIntoDB,
    followingActivity,
    getUsersFromDB,
    deleteUserFromDB,
};
