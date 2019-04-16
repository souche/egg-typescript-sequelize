"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const sequelize_typescript_1 = require("sequelize-typescript");
let book = class book extends sequelize_typescript_1.Model {
};
tslib_1.__decorate([
    sequelize_typescript_1.Column({
        primaryKey: true,
        autoIncrement: true,
    }),
    tslib_1.__metadata("design:type", Number)
], book.prototype, "id", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], book.prototype, "name", void 0);
book = tslib_1.__decorate([
    sequelize_typescript_1.Table({
        timestamps: false,
    })
], book);
exports.default = book;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0RBQTREO0FBSzVELElBQXFCLElBQUksR0FBekIsTUFBcUIsSUFBSyxTQUFRLDRCQUFXO0NBUzVDLENBQUE7QUFKQztJQUpDLDZCQUFNLENBQUM7UUFDTixVQUFVLEVBQUUsSUFBSTtRQUNoQixhQUFhLEVBQUUsSUFBSTtLQUNwQixDQUFDOztnQ0FDUTtBQUdWO0lBREMsNkJBQU07O2tDQUNLO0FBUk8sSUFBSTtJQUh4Qiw0QkFBSyxDQUFDO1FBQ0wsVUFBVSxFQUFFLEtBQUs7S0FDbEIsQ0FBQztHQUNtQixJQUFJLENBU3hCO2tCQVRvQixJQUFJIn0=