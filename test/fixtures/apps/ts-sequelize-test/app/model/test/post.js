"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const sequelize_typescript_1 = require("sequelize-typescript");
const user_1 = require("./user");
let post = class post extends sequelize_typescript_1.Model {
};
tslib_1.__decorate([
    sequelize_typescript_1.Column({
        primaryKey: true,
        autoIncrement: true,
    }),
    tslib_1.__metadata("design:type", Number)
], post.prototype, "id", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], post.prototype, "name", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.ForeignKey(() => user_1.default),
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", Number)
], post.prototype, "user_id", void 0);
post = tslib_1.__decorate([
    sequelize_typescript_1.Table({
        timestamps: true,
    })
], post);
exports.default = post;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBvc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0RBQXdFO0FBQ3hFLGlDQUEwQjtBQUsxQixJQUFxQixJQUFJLEdBQXpCLE1BQXFCLElBQUssU0FBUSw0QkFBVztDQWE1QyxDQUFBO0FBUkM7SUFKQyw2QkFBTSxDQUFDO1FBQ04sVUFBVSxFQUFFLElBQUk7UUFDaEIsYUFBYSxFQUFFLElBQUk7S0FDcEIsQ0FBQzs7Z0NBQ1E7QUFHVjtJQURDLDZCQUFNOztrQ0FDSztBQUlaO0lBRkMsaUNBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFJLENBQUM7SUFDdEIsNkJBQU07O3FDQUNRO0FBWkksSUFBSTtJQUh4Qiw0QkFBSyxDQUFDO1FBQ0wsVUFBVSxFQUFFLElBQUk7S0FDakIsQ0FBQztHQUNtQixJQUFJLENBYXhCO2tCQWJvQixJQUFJIn0=