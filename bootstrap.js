"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var inversify_express_utils_1 = require("inversify-express-utils");
var inversify_1 = require("inversify");
var bodyParser = require("body-parser");
var types_1 = require("./constant/types");
var tags_1 = require("./constant/tags");
var home_1 = require("./controller/home");
var user_1 = require("./controller/user");
var user_2 = require("./service/user");
var t_user_1 = require("./entity/t_user");
var typeorm_1 = require("typeorm");
// load everything needed to the Container
var container = new inversify_1.Container();
container.bind(inversify_express_utils_1.TYPE.Controller).to(home_1.HomeController).whenTargetNamed(tags_1.default.HomeController);
container.bind(inversify_express_utils_1.TYPE.Controller).to(user_1.UserController).whenTargetNamed(tags_1.default.UserController);
container.bind(types_1.default.UserService).to(user_2.UserService);
typeorm_1.createConnection({
    driver: {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        database: 'hh',
        username: 'hh_user',
        password: 'password'
    },
    entities: [
        t_user_1.User
    ],
    autoSchemaSync: true,
}).then(function () {
    // start the server
    var server = new inversify_express_utils_1.InversifyExpressServer(container);
    server.setConfig(function (app) {
        app.use(bodyParser.urlencoded({
            extended: true
        }));
        app.use(bodyParser.json());
    });
    var app = server.build();
    app.listen(3000);
    console.log('Server started on port 3000 :)');
});
//# sourceMappingURL=bootstrap.js.map