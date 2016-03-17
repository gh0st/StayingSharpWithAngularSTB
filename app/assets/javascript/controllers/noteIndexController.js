angular.module('NoteWrangler').controller('NotesIndexController', function(Note, $scope) {
    $scope.notes = Note.query();

    console.log($scope.notes);
});
// angular.module('NoteWrangler').controller('NotesIndexController', function(Note, $scope) {
//     console.log('My Controller got executed');
//     Note.query().$promise.then(function(response) {
//         $scope.notes = response;
//         console.log(response);
//     });
// });
