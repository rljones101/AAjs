/**
 * Created by Rick on 9/1/14.
 */
var animateJS = angular.module('animateJS', ['ngAnimate']);

animateJS.animation('.fade-animation',
    function(){

        var factory = {};

        factory.addClass = function(element, className, done){

            if(className === 'show'){
                element.css('opacity', 0);

                jQuery(element).animate({
                    opacity: 1
                }, done);
            }
        };

        factory.removeClass = function(element, className, done){

            if(className === 'show'){

                element.css('opacity', 1);

                jQuery(element).animate({
                    opacity: 0
                }, done);
            }
        };

        return factory;
    }
);

animateJS.directive('aajsFade', ['$animate',
    function($animate){

        return {
            scope: {
                aajsFade: '='
            },
            link: function(scope, element, attrs){

                element.addClass('fade-animation');

                scope.$watch('aajsFade', function(value){

                    //console.log(value);

                    if(value){
                        $animate.addClass(element, 'show');
                    }else{
                        $animate.removeClass(element, 'show');
                    }

                });
            }
        }
    }

]);