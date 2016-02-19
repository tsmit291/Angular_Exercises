var app = angular.module("redditApp", []);
app.controller("MyController", function($scope){

  $scope.posts = [];
  $scope.buttonText= "Submit New Post";

  $scope.newPost = function(){
    var post = {};
    post.title = $scope.title;
    post.image = $scope.image;
    post.description = $scope.description;
    post.author = $scope.author;
    post.date = $scope.date;
    $scope.posts.push(post);
    $scope.title = null;
    console.log($scope.posts);
  }




});
