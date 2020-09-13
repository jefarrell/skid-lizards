const imageDistort = (canvas, context, img) => {  
  function mix(a, b, l) {
    return a - (b-a) * l;
  }
  
  function upDown(v) {
    return Math.cos(v) * 0.5;
  }
  
  function render(time) {
    time *= 0.00009;
    
    let t1 = time/2;
    let t2 = time;
    
    for (let distY = 0; distY < canvas.height; distY++) {
      let v = distY / canvas.height;

      let off1 = Math.cos((v + 0.5) * mix(3, 12, upDown(t1))) * 300;
      let off2 = Math.cos((v + 0.5) * mix(3, 12, upDown(t2))) * 300;
      let off = off1 + off2;

      let srcY = distY * img.height / canvas.height + off;
      
      srcY = Math.max(0, Math.min(img.height - 1, srcY));
      context.drawImage(
        img, // image
        0,  //x-axis top-left corner
        srcY, //y-axis top-left corner
        canvas.width, // width
        1,
        0, 
        distY, 
        canvas.width, 
        1
      );
    }
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

export default imageDistort;