// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require plugin
//= require jquery_ujs
//= require bootstrap-sprockets
//= require_tree .



$(document).ready(function(){
     $(".ideas").hide();
     $(".education").hide();
     $(".experience").hide();
     $(".testimonials").hide();
     $(".hello-link").addClass("selected");
$(".hello-link").click(function(){
    $(".letter").show();
    $(".ideas").hide();
   $(".education").hide();
   $(".experience").hide();
   $(".testimonials").hide();
   $(".hello-link").addClass("selected");
   $(".ideas-link").removeClass("selected");
   $(".education-link").removeClass("selected");
   $(".experience-link").removeClass("selected");
   $(".testimonials-link").removeClass("selected");
});
$(".ideas-link").click(function(){
    $(".letter").hide();
    $(".ideas").show();
   $(".education").hide();
   $(".experience").hide();
   $(".testimonials").hide();
   $(".hello-link").removeClass("selected");
   $(".ideas-link").addClass("selected");
   $(".education-link").removeClass("selected");
   $(".experience-link").removeClass("selected");
   $(".testimonials-link").removeClass("selected");
});
$(".education-link").click(function(){
    $(".letter").hide();
    $(".ideas").hide();
   $(".education").show();
   $(".experience").hide();
   $(".testimonials").hide();
   $(".hello-link").removeClass("selected");
   $(".ideas-link").removeClass("selected");
   $(".education-link").addClass("selected");
   $(".experience-link").removeClass("selected");
   $(".testimonials-link").removeClass("selected");
});
$(".experience-link").click(function(){
    $(".letter").hide();
    $(".ideas").hide();
   $(".education").hide();
   $(".experience").show();
   $(".testimonials").hide();
   $(".hello-link").removeClass("selected");
   $(".ideas-link").removeClass("selected");
   $(".education-link").removeClass("selected");
   $(".experience-link").addClass("selected");
   $(".testimonials-link").removeClass("selected");
});
$(".testimonials-link").click(function(){
    $(".letter").hide();
    $(".ideas").hide();
   $(".education").hide();
   $(".experience").hide();
   $(".testimonials").show();
   $(".hello-link").removeClass("selected");
   $(".ideas-link").removeClass("selected");
   $(".education-link").removeClass("selected");
   $(".experience-link").removeClass("selected");
   $(".testimonials-link").addClass("selected");
});
   });
