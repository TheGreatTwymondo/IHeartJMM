angular.module("MyApp").run(["$templateCache", function($templateCache) {$templateCache.put("views/home.html","<div class=\"container\" ng-controller=\"MainController as mainCtrl\">\n    <div class=\"col-md-3 classes-submenu\">\n        <ul>\n            <li ng-repeat=\"class in mainCtrl.classesData\">\n                <a ng-class=\"{ active:mainCtrl.isSet(class) }\"\n                   href=\"\" ng-click=\"mainCtrl.setClass(class)\">{{class.className}}</a>\n            </li>\n        </ul>\n    </div>\n    <div class=\"col-md-8 classes-detail-panel\">\n        <div ng-if=\"mainCtrl.getClass() == null\">\n            <h1>Pick a class from the left</h1>\n        </div>\n\n        <div ng-if=\"mainCtrl.getClass() != null\">\n            <h1>Class name: {{mainCtrl.getClass().className}}</h1>\n            <p>Description: {{mainCtrl.getClass().description}}</p>\n        </div>\n\n\n        <div></div>\n    </div>\n</div>");
$templateCache.put("views/homework.html","<div>\n    <h1>Homework</h1>\n</div>");
$templateCache.put("views/login.html","<div class=\"container\">\n    <div class=\"row col-md-4\">\n        <div class=\"center-form panel\">\n            <div class=\"panel-body\">\n                <h2 class=\"text-center\">Login</h2>\n\n                <form method=\"post\" ng-submit=\"loginCtrl.login()\" name=\"loginForm\">\n\n                    <div class=\"form-group\">\n                        <input class=\"form-control\" type=\"email\" name=\"email\"\n                               ng-model=\"loginCtrl.email\" placeholder=\"User name\" required autofocus autocomplete=\"off\">\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input class=\"form-control\" type=\"password\" name=\"password\"\n                               ng-model=\"loginCtrl.password\" placeholder=\"Password\" required autofocus autocomplete=\"off\">\n                    </div>\n\n                    <button type=\"submit\" ng-disabled=\"loginForm.$invalid\"\n                            class=\"btn btn-default btn-block btn-success\">Sign In\n                    </button>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<!--<section class=\"loginform cf\">\n    <form name=\"login\" action=\"index_submit\" method=\"get\" accept-charset=\"utf-8\">\n        <ul>\n            <li>\n                <label for=\"usermail\">Email</label>\n                <input type=\"email\" name=\"usermail\" placeholder=\"User name\" required>\n            </li>\n            <li>\n                <label for=\"password\">Password</label>\n                <input type=\"password\" name=\"password\" placeholder=\"password\" required>\n            </li>\n            <li>\n                <input type=\"submit\" value=\"Login\">\n            </li>\n        </ul>\n    </form>\n</section>-->\n");
$templateCache.put("views/overview.html","<div>\n    <h1>Overview</h1>\n</div>");
$templateCache.put("views/question.html","<div>\n    <h1>Question</h1>\n</div>");
$templateCache.put("views/student-view.html","<div>\n    <h1>Student View of Class</h1>\n</div>");
$templateCache.put("views/students.html","<div>\n    <h1>students</h1>\n</div>");
$templateCache.put("views/teacher-class.html","<div>\n    <h1>Teacher View of Class</h1>\n</div>");}]);