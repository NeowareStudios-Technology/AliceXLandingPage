/*
	LWA alice one landing page script
*/

// var vid1 = document.getElementById("video1");
// vid1.playbackRate = 2.0;

// function colorLog(message, color, fontSize, bgColor) {
//     color = color || "black";
// 		fontSize = fontSize || "small";
// 		bgColor = bgColor || "";
//
//     switch (color) {
//         case "success":
//              color = "Green";
//              break;
//         case "info":
//                 color = "DodgerBlue";
//              break;
//         case "danger":
//              color = "Red";
//              break;
//         case "warning":
//              color = "Orange";
//              break;
//         default:
//              color = color;
//     }
//
// 		switch(fontSize){
// 			case "small":
// 					 fontSize = "x-small";
// 					 break;
// 			case "regular":
// 					 fontSize = "regular";
// 					 break;
// 			case "large":
// 					fontSize = "large";
// 					break;
// 			case "xlarge":
// 					fontSize = "x-large";
// 					break;
// 			default:
// 					 fontSize = fontSize;
// 		}
//
// 		switch (bgColor) {
//         case "success":
//              bgColor = "Green";
//              break;
//         case "info":
//                 bgColor = "DodgerBlue";
//              break;
//         case "danger":
//              bgColor = "Red";
//              break;
//         case "warning":
//              bgColor = "Orange";
//              break;
//         default:
//              bgColor = bgColor;
//     }
//
//     console.log("%c " + message, "color:" + color + "; font-size:" + fontSize + ";" + "; background: " + bgColor + ";");
// }


//
// window.onload = function(){
// 	console.log("%cLeap %s", styles, "With Alice");
// }
//
// 	        var canvas = document.getElementById("renderCanvas");
// 	        var engine = new BABYLON.Engine(canvas, true);
// 	        var createScene = function () {
// 	            var scene = new BABYLON.Scene(engine);
// 							scene.clearColor = new BABYLON.Color4(0,0,0,0);
// 	            // Light
// 	            var light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(-2, 0, 0), scene);
// 	            // Camera
// 	            var camera = new BABYLON.ArcRotateCamera("Camera", -1.57, 1.0, 200, new BABYLON.Vector3.Zero(), scene);
// 	            camera.attachControl(canvas);
// 	            //Creation of a sphere
// 	            //(name of the sphere, segments, diameter, scene)
// 	            var sphere = BABYLON.Mesh.CreateSphere("sphere", 100.0, 100.0, scene);
// 	            sphere.position = new BABYLON.Vector3(0, 0, 0);
// 	            sphere.rotation.x = Math.PI;
// 	            //Add material to sphere
// 	            var groundMaterial = new BABYLON.StandardMaterial("mat", scene);
// 	            groundMaterial.diffuseTexture = new BABYLON.Texture('./assets/textures/earth.png', scene);
// 	            sphere.material = groundMaterial;
// 	            // Animations - rotate earth
// 	            var alpha = 0;
// 	            scene.beforeRender = function () {
// 	                sphere.rotation.y = alpha;
// 	                alpha -= 0.01;
// 	            };
// 	            return scene;
// 	        }
// 	        var scene = createScene();
// 	        // Register a render loop to repeatedly render the scene
// 	        engine.runRenderLoop(function () {
// 	            scene.render();
// 	        });
// 	        // Watch for browser/canvas resize events
// 	        window.addEventListener("resize", function () {
// 	            engine.resize();
// 	        });

$(document).ready( function(){

	var $investClose = $(".investClose");
	var $investPopup = $("#investPopup");
	var $overlay = $(".overlay");
  var $startover = $(".startover");
	// Onload, trigger popup
	$investPopup.show();
	$overlay.show();

	/* -------------------------
		MUST click close button to close popup.
	 ------------------------- */
	$investClose.click(function() {
			$investPopup.hide();
			$overlay.hide();
	});

    // $startover.click(function(){
    //     $("html, body").animate({
		// 			scrollTop: $("#intro").offset().top
    //     },'slow');
		// });
});
