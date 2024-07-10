"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateData_middleware_1 = __importDefault(require("../middleware/validateData.middleware"));
const validation_1 = require("../validation/validation");
const users_controller_1 = require("../controllers/users.controller");
const router = (0, express_1.Router)();
router.get('/search', users_controller_1.searchUsers);
router.get('/sorted', users_controller_1.sortUsers);
router.get('/:username', (0, validateData_middleware_1.default)(validation_1.userSchema), users_controller_1.getUserAndSave);
router.get('/:username/friends', (0, validateData_middleware_1.default)(validation_1.userSchema), users_controller_1.findMutualFollowers);
router.patch('/:username', users_controller_1.updateUser);
router.delete('/:username', users_controller_1.deleteUser);
exports.default = router;
