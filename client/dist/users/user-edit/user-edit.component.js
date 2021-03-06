"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const user_service_1 = require("../../shared/services/user.service");
const router_1 = require("@angular/router");
let UserEditComponent = class UserEditComponent {
    constructor(service, route) {
        this.service = service;
        this.route = route;
        this.successMessage = '';
        this.errorMessage = '';
    }
    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        this.service.getUser(id).subscribe(user => this.user = user);
    }
    updateUser() {
        this.successMessage = '';
        this.errorMessage = '';
        this.service.updateUser(this.user)
            .subscribe(user => {
            this.successMessage = 'User was updated.';
            console.log('user was updated');
        }, err => {
            this.errorMessage = err;
            console.error(err);
        });
    }
};
UserEditComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/users/user-edit/user-edit.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.ActivatedRoute])
], UserEditComponent);
exports.UserEditComponent = UserEditComponent;
//# sourceMappingURL=user-edit.component.js.map