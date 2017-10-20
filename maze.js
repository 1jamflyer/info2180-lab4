"use strict";

$(document).ready(function(){
 var start =  $("#start");
 var end = $("#end");
 var maze = $("#maze");
 var boundary = $(".boundary");
 var gameStart = false;
 maze.mouseleave(function(){ loss() });

 start.mouseover(function(){
  $("#status").text('Move mouse to end to win the game');
  gameStart = true;
  if(boundary.hasClass('youlose')){
   boundary.removeClass('youlose');
  }
  boundary.mousemove(function(){ loss(); }) 
 });

 end.mousemove(function(){
  if(gameStart == true) won(); 
  else if(gameStart && boundary.hasClass('youlose'))  loss(); 
 
 });

 function won(){
  gameStart = false;
  $("#status").text("Congrats you won (^_^)");
 }

 function loss(){
  if(gameStart){
   gameStart = false;
   boundary.addClass('youlose');
   $("#status").text('GG you lost, Try next time');
  }
 }
})