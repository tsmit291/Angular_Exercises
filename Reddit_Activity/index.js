var app = angular.module("redditApp", []);
app.controller("MyController", function($scope){

  $scope.posts = [];
  $scope.comments = [];
  $scope.buttonText = "Submit New Post";
  $scope.commentText = "Submit New Comment";
  $scope.commentButton= "Show All Comments";

  $scope.newPost = function(){
    var post = {};
    post.title = $scope.title;
    post.image = $scope.image;
    post.description = $scope.description;
    post.author = $scope.author;
    post.date = $scope.date;
    $scope.posts.push(post);
    $scope.title = null;

    $scope.newComments = function(){
      var allComments = {};
      allComments.usercomment = $scope.usercomment;
      allComments.commentor = $scope.commentor;
      $scope.comments.push(allComments);
    }
    $scope.posts.push(comments);
  }


  });
