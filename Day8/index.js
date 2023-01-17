const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
//to cover the whole screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round"; //way of joining two lines
ctx.lineCap = "round"; //end of the line
ctx.globalCompositionOperation='multiply';//to make blemds of diffrent color.

let isDrawing = false; ///to see if the person has actually pressed the button
let lastX = 0; //to store where the line ends
let lastY = 0;
let hue = 0; //to set the color contrast
let direction = true; //to set if the stroke becomes big or becomes small


function draw(e) {
  if (!isDrawing) return; //stop the fn from running ie Drawing when mouse is not down pressed

  console.log(e);
  ctx.strokeStyle = `hsl(${hue},100%,50%)`; //we select the stroke with 0(hue)-red, Saturation-100%,lightess-50%.

  ctx.beginPath();
  ctx.moveTo(lastX, lastY); //Stat->to move to the begining position..can be 0 can be last drawing end position
  ctx.lineTo(e.offsetX, e.offsetY); //Goto->the new ending position data got from the mousemove event...
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++; //We keep increaing the hue to get diffrent colours and if it goes over 360 it becomes red and starts again.
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 100 || ctx.lineWidth<=1) {
    //to now begin in diffrent direction..ie,big to small or vice versa
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY]; //to set them to the new startin position so as to not have one continous line.
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
