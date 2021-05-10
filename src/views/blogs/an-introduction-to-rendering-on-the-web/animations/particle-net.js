class Node {
  constructor(canvas, ctx, x,y,radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = randFromZero(7)/10;
    this.dy = randFromZero(7)/10;
    this.color = "#F0F0F0";

    this.canvas = canvas;
    this.ctx = ctx;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.dx > this.canvas.width || this.x + this.dx < 0) {
      this.dx = (-this.dx);
    }

    if (this.y + this.dy > this.canvas.height || this.y + this.dy < 0) {
      this.dy = (-this.dy);
    }
  }

  static distance(n1, n2) {
    return Math.sqrt(Math.pow(Math.abs(n2.x - n1.x), 2)
         + Math.pow(Math.abs(n2.y - n1.y),2));
  }
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randFromZero(num) {
  return Math.floor(Math.random() * (num*2)) - num;
}

function drawLines(ctx, node_list) {
  let threshold = 100;

  for(let i = 0; i < node_list.length; i++) {
    for(let j = 0; j < node_list.length; j++) {
      let distance = Node.distance(node_list[i], node_list[j]);

      //if the nodes aren't the same & the distance is less than ten
      if(i != j && threshold > distance) {
        ctx.beginPath();
        ctx.moveTo(node_list[i].x, node_list[i].y);
        ctx.lineTo(node_list[j].x, node_list[j].y);
        ctx.globalAlpha = distance/threshold*.5;
        ctx.strokeStyle = node_list[i].color;
        ctx.stroke(); //ctx.fill(), but for lines
        ctx.closePath();
      }
    }
  }
}


//runs the node simulation
export function runAnimation(canvas, ctx) {
  // prep nodes for the animation
  let node_list = [];
  for(let x = 0; x < 65; x++) {
    node_list.push(new Node(canvas, ctx, rand(1, canvas.width), rand(1, canvas.height), 4));
  }

  // render function that drives forward the animation
  const render = () => {
    ctx.clearRect(0,0,canvas.width, canvas.height);

    // render nodes and draw the lines that connect them
    // TODO: test if drawLines() needs to be put before
    node_list.forEach(n => n.update());
    node_list.forEach(n => n.draw());
    drawLines(ctx, node_list);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}