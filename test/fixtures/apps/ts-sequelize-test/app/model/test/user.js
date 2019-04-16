"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const sequelize_typescript_1 = require("sequelize-typescript");
const post_1 = require("./post");
let user = class user extends sequelize_typescript_1.Model {
    static async getList() {
        return this.findAll({ raw: true });
    }
};
tslib_1.__decorate([
    sequelize_typescript_1.Column({
        primaryKey: true,
        autoIncrement: true,
    }),
    tslib_1.__metadata("design:type", Number)
], user.prototype, "id", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], user.prototype, "name", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column({
        defaultValue: '',
    }),
    tslib_1.__metadata("design:type", String)
], user.prototype, "nickName", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.HasMany(() => post_1.default),
    tslib_1.__metadata("design:type", Array)
], user.prototype, "post", void 0);
user = tslib_1.__decorate([
    sequelize_typescript_1.Table
], user);
exports.default = user;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0RBQXFFO0FBQ3JFLGlDQUEwQjtBQUcxQixJQUFxQixJQUFJLEdBQXpCLE1BQXFCLElBQUssU0FBUSw0QkFBVztJQWtCM0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO0lBQ3BDLENBQUM7Q0FDRixDQUFBO0FBaEJDO0lBSkMsNkJBQU0sQ0FBQztRQUNOLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLGFBQWEsRUFBRSxJQUFJO0tBQ3BCLENBQUM7O2dDQUNRO0FBR1Y7SUFEQyw2QkFBTTs7a0NBQ0s7QUFLWjtJQUhDLDZCQUFNLENBQUM7UUFDTixZQUFZLEVBQUUsRUFBRTtLQUNqQixDQUFDOztzQ0FDYztBQUdoQjtJQURDLDhCQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBSSxDQUFDOztrQ0FDUDtBQWhCTSxJQUFJO0lBRHhCLDRCQUFLO0dBQ2UsSUFBSSxDQXFCeEI7a0JBckJvQixJQUFJIn0=