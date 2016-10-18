(function() {
	'use strict';

	angular
		.module('barebone.around')
		.controller('aroundController', aroundController);

	aroundController.$inject = ['$scope', 'aroundController'];

	/* @ngInject */
	function aroundController($scope, aroundController) {
		var vm = angular.extend(this, {
			entries: aroundController
			
		});
var stage;
 
	var canvas = document.getElementById("canvas");
    if (!canvas || !canvas.getContext) return;
		
	stage = new createjs.Stage(canvas);  
    stage.enableMouseOver(true);
    stage.mouseMoveOutside = true; 
    createjs.Touch.enable(stage);
    
    var imgList = ["images/360/32.jpg",
					"images/360/31.jpg",
					"images/360/30.jpg",
					"images/360/29.jpg",
					"images/360/28.jpg",
					"images/360/27.jpg",
					"images/360/26.jpg",
					"images/360/25.jpg",
					"images/360/24.jpg",
					"images/360/22.jpg",
					"images/360/21.jpg",
					"images/360/20.jpg",
					"images/360/19.jpg",
					"images/360/18.jpg",
					"images/360/17.jpg",
					"images/360/16.jpg",
					"images/360/15.jpg",
					"images/360/14.jpg",
					"images/360/13.jpg",
					"images/360/12.jpg",
					"images/360/11.jpg",
					"images/360/10.jpg",
					"images/360/9.jpg",
					"images/360/8.jpg",
					"images/360/7.jpg",
					"images/360/6.jpg",
					"images/360/5.jpg",
					"images/360/4.jpg",
					"images/360/3.jpg",
					"images/360/2.jpg",
					"images/360/1.jpg"
                   ];  
    var images = [], loaded = 0, currentFrame = 0, totalFrames = imgList.length; 
    var rotate360Interval, start_x;
    
    var bg = new createjs.Shape();
    stage.addChild(bg);  
    
    var bmp = new createjs.Bitmap();	  
    stage.addChild(bmp);
    
    var myTxt = new createjs.Text("HTC One", '24px Ubuntu', "#ffffff");
    myTxt.x = myTxt.y =20;
    myTxt.alpha = 0.08;
    stage.addChild(myTxt);   
    
    
    function load360Image() {
        var img = new Image();
        img.src = imgList[loaded];
        img.onload = img360Loaded;
        images[loaded] = img;   
    }
    
    function img360Loaded(event) {
        loaded++;        
        bg.graphics.clear()
        bg.graphics.beginFill("#222").drawRect(0,0,stage.canvas.width * loaded/totalFrames, stage.canvas.height);
        bg.graphics.endFill();
        
        if(loaded==totalFrames) start360();
        else load360Image();
    }

    
    function start360() {
        document.body.style.cursor='none';
        
        // 360 icon
        var iconImage = new Image();
        iconImage.src = "images/360/ynDcT.png";
        iconImage.onload = iconLoaded;        
       
        // update-draw
        update360(0);
        
        // first rotation
        rotate360Interval = setInterval(function(){ if(currentFrame===totalFrames-1) { clearInterval(rotate360Interval); addNavigation(); } update360(1); }, 25);
    }
    
    function iconLoaded(event) {
        var iconBmp = new createjs.Bitmap();
        iconBmp.image = event.target;
        iconBmp.x = 20;
        iconBmp.y = canvas.height - iconBmp.image.height - 20;
        stage.addChild(iconBmp);
    }
    
    function update360(dir) {
        currentFrame+=dir;
        if(currentFrame<0) currentFrame = totalFrames-1;
        else if(currentFrame>totalFrames-1) currentFrame = 0;
        bmp.image = images[currentFrame];
    }


    //------------------------------- 
     function addNavigation() { 
        stage.onMouseOver = mouseOver;
        stage.onMouseDown = mousePressed;        
        document.body.style.cursor='auto';
    }
    
    function mouseOver(event) {
        document.body.style.cursor='pointer';
    }
    
    function mousePressed(event) {
        start_x = event.rawX;
        stage.onMouseMove = mouseMoved;
        stage.onMouseUp = mouseUp;
        
        document.body.style.cursor='w-resize';        
    }
    
	function mouseMoved(event) {
        var dx = event.rawX - start_x;
        var abs_dx = Math.abs(dx);
        
        if(abs_dx>5) {
            update360(dx/abs_dx);
            start_x = event.rawX;
        }
	}
    
    function mouseUp(event) {
        stage.onMouseMove = null;
        stage.onMouseUp = null;         
        document.body.style.cursor='pointer';
	}    
    
    function handleTick() {	
         stage.update();
    }    
    
    document.body.style.cursor='progress';
    load360Image();
    
    
     // TICKER
    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.useRAF = true;



	
	}
})();