// //Overview: There are two images, one blurred and one not blurred.
// //  To acheive the unblur effect, a clipping mask with a bunch of circles
// //  is used on the blurred image.
// var svg = d3.select("svg")
//
// var width = 450;
// var height = 300;
//
// //Config
// var circleRadius = 40;
// var blurAmount = 17;
// var clipDelay = 200;
// var clipDuration = 6000;
// var clipEase = 'quad';
//
// //CLIP
// var clips = svg.append('svg:defs')
//     .append('svg:mask')
//     .attr({id: 'mask'});
//
// //Blur filter
// var defs = svg.append('svg:defs');
// var filterBlur = defs.append('svg:filter')
// 	.attr({ id: 'blur' });
// filterBlur.append('feGaussianBlur')
// 		.attr({
//       		'in': "SourceGraphic",
//       		'stdDeviation': blurAmount
// 		});
//
// //IMAGE
// var imageUrl = 'http://s3.amaxonws.com/vasir-assets/svg-filters/gollum.jpg';
//
// //Add blurred image
// svg.append('svg:image')
//     .attr({
//       x: 0,
//       y: 0,
//       filter: 'url(#blur)',
//       'xlink:href': imageUrl,
//       width: 800,
//       height: 500,
//       fill: '#336699'
//     })
//
// //MASK
// //  Add masked image (regular, non blurred image which will be revealed
// var mask = svg.append('svg:image')
//     .attr({
//         x: 0,
//         y: 0,
//         'xlink:href': imageUrl,
//         'mask': 'url(#mask)',
//         width: 800,
//         height: 500, filter: 'url(#blur2)',
//         fill: '#336699'
//     });
//
//   var addMask = function addMask(x,y){
//         //To achieve the unblur effect, we add circles to the clip mask
//         var clip = clips.append('svg:circle')
//             .attr({
//                 cx: x,
//                 cy: y,
//                 r: circleRadius,
//                 fill: '#ffffff',
//                 'class': 'clipCircle'
//             });
//       return clip;
//     };
//
// var lastMove = new Date();
//
// // var clicking = false;
//
// var mouseMove = function move(e){
//   if (new Date() - lastMove < 18){
//     return false;
//   }
//   lastMove = new Date();
//     //erase on mouse over
//     var x = parseInt(d3.event.pageX - 25 + circleRadius/2,10);
//     var y = parseInt(d3.event.pageY - circleRadius,10);
//
//     //Add mask
//     var clip = addMask(x,y);
//
//     // var fill = '#000000';
//     // var r = 0;
//     // if(clicking){
//     //     var fill = '#ffffff';
//     //     var r = circleRadius;
//     // }
//
//     clip.transition().ease(clipEase)
//         .delay(clipDelay)
//         // (400).duration(7000)
//         .duration(clipDuration)
//         .attr({
//             fill: '#000000'
//             // fill:
//
//             r: 0
//             // r
//         })
//         .each('end', function end(){
//             this.remove();
//         })
//
// };
//
// //attach event
// svg.on('mousemove', mouseMove);
// // svg.on('mousedown', function(){ clicking = true; });
// // svg.on('mouseup', function(){ clicking = false; });

// Change style of navbar on scroll
window.onscroll = function() {newNavbar()};
function newNavbar() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 3200 || document.documentElement.scrollTop > 3200) {
        navbar.className = "topnavChanged";
    } else {
        navbar.className = "topnav";
    }
}





// code for canvas



// context = document.getElementById('canvasInAPerfectWorld').getContext("2d");
// $('#canvas').mousedown(function(e){
//   var mouseX = e.pageX - this.offsetLeft;
//   var mouseY = e.pageY - this.offsetTop;
//
//   paint = true;
//   addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
//   redraw();
// });
//
// $('#canvas').mousemove(function(e){
//   if(paint){
//     addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
//     redraw();
//   }
// });
//
// $('#canvas').mouseup(function(e){
//   paint = false;
// });
//
// var clickX = new Array();
// var clickY = new Array();
// var clickDrag = new Array();
// var paint;
//
// function addClick(x, y, dragging)
// {
//   clickX.push(x);
//   clickY.push(y);
//   clickDrag.push(dragging);
// }
//
// function redraw(){
//   context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
//
//   context.strokeStyle = "#df4b26";
//   context.lineJoin = "round";
//   context.lineWidth = 5;
//
//   for(var i=0; i < clickX.length; i++) {
//     context.beginPath();
//     if(clickDrag[i] && i){
//       context.moveTo(clickX[i-1], clickY[i-1]);
//      }else{
//        context.moveTo(clickX[i]-1, clickY[i]);
//      }
//      context.lineTo(clickX[i], clickY[i]);
//      context.closePath();
//      context.stroke();
//   }
// }

// function which writes text on the page
