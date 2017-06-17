angular.module('directivePractice').controller('lessonCtrl', function($scope) {

    $scope.lessons = ['Service', 'Routing', 'Directive', 'Review', 'Firebase',
        'No server Project', 'Node', 'Express', 'Mongo'
    ];
    $scope.test = 'Two-way-data-binding';


    $scope.announceDay = function(lesson, day) {
        if (day === undefined) {
            alert('This class does not exist');
        } else {
            alert(lesson + ' is active on ' + day + '.')
        }

    }

})