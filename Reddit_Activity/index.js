var app = angular.module("redditApp", ['ngAnimate']);
app.controller("MyController", function($scope){


  $scope.posts = [{
      title: 'Lemons are Everything',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Lemon.jpg',
      description: 'lemons are everything my friend!',
      votes: 5,
      date: new Date('12/15/2004'),
      author: 'taylor smith',
      comments: [{usercomment: 'hey this is a comment', commentor: 'commentor'}],
      displayComments: true
      }];

  $scope.buttonText = "Submit New Post";
  $scope.commentText = "Submit New Comment";
  $scope.commentButton= "Show All Comments";
  $scope.blackVote = "color: pink";

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
    post.displayComments = true;

    $scope.newComments = function(iteration){
      var allComments = {};
      allComments.usercomment = $scope.usercomment;
      allComments.commentor = $scope.commentor;
      iteration.comments.push(allComments);
    }

    $scope.toggleComments = false;

  };

  $scope.plusOne = function(index){
    index.votes += 1;
    if (index.votes === 0){
      post.votes = $scope.blackVote;
    } else if (index.votes < 0){
      post.votes = $scope.redVote;
    } else if (index.votes > 0){
      post.votes = $scope.greenVote;
    }
  };

  $scope.minusOne = function(index){
    index.votes -= 1;
    // if (index.votes === 0){
    //   post.votes = blackVote;
    // } else if (index.votes < 0){
    //   post.votes = redVote;
    // } else (index.votes > 0){
    //   post.votes = greenVote;
    // }
  };


  });
