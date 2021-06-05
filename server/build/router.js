"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var requireAuth = function (req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
    }
    else {
        res.send('Not permitted');
    }
};
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n            <div>\n                <div>You are logged in</div>\n                <a href=\"/logout\">Logout</a>\n            </div>\n        ");
    }
    else {
        res.send("\n            <div>\n                <div>You are not logged in</div>\n            </div>\n        ");
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/login', function (req, res) {
    res.send("\n        <form method=\"POST\">\n            <div>\n                <label>Email</label>\n                <input name=\"email\"/>\n            </div>\n            <div>\n                <label>Password</label>\n                <input name=\"password\" type=\"password\"/>\n            </div>\n            <button>Submit</button>\n        </form>\n      ");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'test@gmail.com' && password === '123') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('Invalid email or password');
    }
});
router.get('/protected', requireAuth, function (req, res) {
    res.send('Welcome to the protected route');
});
exports.default = router;
