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
exports.UserController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const user_services_1 = require("./user.services");
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const config_1 = __importDefault(require("../../config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const getUsers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { role } = req.query;
    const result = yield user_services_1.UserServices.getUsersFromDB(role);
    if (!result) {
        res.status(http_status_1.default.NOT_FOUND).json({
            success: false,
            statusCode: http_status_1.default.NOT_FOUND,
            message: "No Data Found",
            data: [],
        });
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "User retrieved successfully",
        data: result,
    });
}));
const getCurrentUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const token = (_a = req === null || req === void 0 ? void 0 : req.headers) === null || _a === void 0 ? void 0 : _a.authorization;
    if (!token) {
        throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, "You are not authorized!");
    }
    const decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwt_access_secret);
    const { email } = decoded;
    const result = yield user_services_1.UserServices.getCurrentUserFromDB(email);
    if (!result) {
        res.status(http_status_1.default.NOT_FOUND).json({
            success: false,
            statusCode: http_status_1.default.NOT_FOUND,
            message: "No Data Found",
            data: [],
        });
    }
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "User retrieved successfully",
        data: result,
    });
}));
const updateUserInfo = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.params;
    console.log(req.body);
    const result = yield user_services_1.UserServices.updateUserInfoIntoDB(email, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "User updated successfully",
        data: result,
    });
}));
const followingActivity = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, tab } = req.query;
    const result = yield user_services_1.UserServices.followingActivity(email, tab);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Users retrieved successfully",
        data: result,
    });
}));
const deleteUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const result = yield user_services_1.UserServices.deleteUserFromDB(userId);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "User deleted successfully",
        data: result,
    });
}));
exports.UserController = {
    getUsers,
    getCurrentUser,
    updateUserInfo,
    followingActivity,
    deleteUser,
};
