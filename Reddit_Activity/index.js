var app = angular.module("redditApp", []);
app.controller("MyController", function($scope){
angular.module('app', ['ngMessages']);

  $scope.posts = [];
  // $scope.comments = [];
  $scope.buttonText = "Submit New Post";
  $scope.commentText = "Submit New Comment";
  $scope.commentButton= "Show All Comments";

  $scope.newPost = function(){
    var post = {};
    post.votes = 0;
    post.title = $scope.title;
    post.image = $scope.image;
    post.description = $scope.description;
    post.author = $scope.author;
    post.date = Date.now();
    post.comments = [];
    $scope.posts.push(post);
    $scope.title = null;
    post.displayComments = true;

    $scope.newComments = function(iteration){
      var allComments = {};
      allComments.usercomment = $scope.usercomment;
      allComments.commentor = $scope.commentor;
      iteration.comments.push(allComments);
      console.log(iteration);
    }

    $scope.toggleComments = false;
    $scope.plusOne = !$scope.plusOne;

    $scope.plusOne = function(index){
      index.votes += 1;
    };

    $scope.minusOne = function(index){
      index.votes -= 1;
    };
  }




  });
