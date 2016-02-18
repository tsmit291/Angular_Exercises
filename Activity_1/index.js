var app = angular.module("taylor", []);

app.controller("MyController", function($scope){

  $scope.contractors = [];
  $scope.rate = 100;
  $scope.buttonText = "Submit Your Contractor";

  $scope.getContractor = function(){
    var contractor = {};
    contractor.name = $scope.name;
    contractor.rate = $scope.rate;
    $scope.contractors.push(contractor);
    console.log($scope.contractors);
    if ($scope.contractors.length > 3){
      $scope.buttonText="REALLY?"
    } else if ($scope.contractors.length > 0){
      $scope.buttonText="Please add another contractor";
    };
    //* if scope.contractor.length is greater than one, do something*//
  };

});
