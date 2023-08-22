function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

loco();

var split = "";

const h2 = document.querySelector("#page2 h2").textContent.split(" ");
// console.log(h2)

for (let letters of h2) {
  split += `<span>${letters} </span>`;

  document.querySelector("#page2 h2").innerHTML = split;
}

// ____________________________________

const new_h2 = document.querySelector("#page2 h2");
// console.log(new_h2);

let span = new_h2.querySelectorAll("span");
// console.log(span);

var target_span = null;
var target_span2 = null;

// ____________________________________

// make target span equal to word from where we want to break the word

for (let spanElement of span) {
  if (spanElement.textContent.trim() === "yourbuilding's") {
    target_span2 = spanElement;
  }
}

for (let spanElement of span) {
  if (spanElement.textContent.trim() === "digitalbacked") {
    target_span = spanElement;
  }
}

// ____________________________________

// console.log(target_span);
// console.log(target_span2);

// ____________________________________

// Adding br between targeted span

if (target_span2) {
  var br2 = document.createElement("br");

  var text_part2 = target_span2.textContent.split("yourbuilding's");

  var new_Text2 = "your<br>building's ";

  // console.log(new_Text2)
  target_span2.innerHTML = new_Text2;
}

if (target_span) {
  var br = document.createElement("br");
  var text_part = target_span.textContent.split("digitalbacked");
  // console.log(text_part)

  var new_Text = "digital<br>backed ";
  // console.log(new_Text)

  target_span.innerHTML = new_Text;
}

const new_h = document.querySelectorAll("#page2 h2 span");

// console.log(new_h)

//_____________________________________

gsap.to("#page2 h2 span", {
  scrollTrigger: {
    trigger: "#page2 h2 span",
    start: "top bottom",
    end: "bottom 40%",
    // markers:true,
    scroller: "#main",
    scrub: 0.5,
  },
  stagger: 1,
  color: "white",
});

// ___________________________________

// canvas part
function canvas() {
  const canvas = document.querySelector("#page3>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
./Magma-main/frames00007.png
./Magma-main/frames00010.png
./Magma-main/frames00013.png
./Magma-main/frames00016.png
./Magma-main/frames00019.png
./Magma-main/frames00022.png
./Magma-main/frames00025.png
./Magma-main/frames00028.png
./Magma-main/frames00031.png
./Magma-main/frames00034.png
./Magma-main/frames00037.png
./Magma-main/frames00040.png
./Magma-main/frames00043.png
./Magma-main/frames00046.png
./Magma-main/frames00049.png
./Magma-main/frames00052.png
./Magma-main/frames00055.png
./Magma-main/frames00058.png
./Magma-main/frames00061.png
./Magma-main/frames00064.png
./Magma-main/frames00067.png
./Magma-main/frames00070.png
./Magma-main/frames00073.png
./Magma-main/frames00076.png
./Magma-main/frames00079.png
./Magma-main/frames00082.png
./Magma-main/frames00085.png
./Magma-main/frames00088.png
./Magma-main/frames00091.png
./Magma-main/frames00094.png
./Magma-main/frames00097.png
./Magma-main/frames00100.png
./Magma-main/frames00103.png
./Magma-main/frames00106.png
./Magma-main/frames00109.png
./Magma-main/frames00112.png
./Magma-main/frames00115.png
./Magma-main/frames00118.png
./Magma-main/frames00121.png
./Magma-main/frames00124.png
./Magma-main/frames00127.png
./Magma-main/frames00130.png
./Magma-main/frames00133.png
./Magma-main/frames00136.png
./Magma-main/frames00139.png
./Magma-main/frames00142.png
./Magma-main/frames00145.png
./Magma-main/frames00148.png
./Magma-main/frames00151.png
./Magma-main/frames00154.png
./Magma-main/frames00157.png
./Magma-main/frames00160.png
./Magma-main/frames00163.png
./Magma-main/frames00166.png
./Magma-main/frames00169.png
./Magma-main/frames00172.png
./Magma-main/frames00175.png
./Magma-main/frames00178.png
./Magma-main/frames00181.png
./Magma-main/frames00184.png
./Magma-main/frames00187.png
./Magma-main/frames00190.png
./Magma-main/frames00193.png
./Magma-main/frames00196.png
./Magma-main/frames00199.png
./Magma-main/frames00202.png
`;
    return data.split("\n")[index];
  }

  const frameCount = 67;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: `#page3`,
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page3",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
    // markers:true,
  });
}
canvas();

// ____________________________________

// page4 text decoration

var split_page4 = "";

const h1 = document.querySelector("#page4 h1").textContent.split(" ");
// console.log(h1)

for (let letters of h1) {
  split_page4 += `<span>${letters} </span>`;

  document.querySelector("#page4 h1").innerHTML = split_page4;
}

gsap.to("#page4 h1 span", {
  scrollTrigger: {
    trigger: "#page4 h1 span",
    start: "top bottom",
    end: "bottom 40%",
    // markers:true,
    scroller: "#main",
    scrub: 0.5,
  },
  stagger: 1,
  color: "white",
});

// ____________________________________

// page5 canvas decoration

function page5_canvas() {
  const canvas = document.querySelector("#page5>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
./Magma-main/bridges00004.png
./Magma-main/bridges00007.png
./Magma-main/bridges00010.png
./Magma-main/bridges00013.png
./Magma-main/bridges00016.png
./Magma-main/bridges00019.png
./Magma-main/bridges00022.png
./Magma-main/bridges00025.png
./Magma-main/bridges00028.png
./Magma-main/bridges00031.png
./Magma-main/bridges00034.png
./Magma-main/bridges00037.png
./Magma-main/bridges00040.png
./Magma-main/bridges00043.png
./Magma-main/bridges00046.png
./Magma-main/bridges00049.png
./Magma-main/bridges00052.png
./Magma-main/bridges00055.png
./Magma-main/bridges00058.png
./Magma-main/bridges00061.png
./Magma-main/bridges00064.png
./Magma-main/bridges00067.png
./Magma-main/bridges00070.png
./Magma-main/bridges00073.png
./Magma-main/bridges00076.png
./Magma-main/bridges00079.png
./Magma-main/bridges00082.png
./Magma-main/bridges00085.png
./Magma-main/bridges00088.png
./Magma-main/bridges00091.png
./Magma-main/bridges00094.png
./Magma-main/bridges00097.png
./Magma-main/bridges00100.png
./Magma-main/bridges00103.png
./Magma-main/bridges00106.png
./Magma-main/bridges00109.png
./Magma-main/bridges00112.png
./Magma-main/bridges00115.png
./Magma-main/bridges00118.png
./Magma-main/bridges00121.png
./Magma-main/bridges00124.png
./Magma-main/bridges00127.png
./Magma-main/bridges00130.png
./Magma-main/bridges00133.png
./Magma-main/bridges00136.png
./Magma-main/bridges00139.png
./Magma-main/bridges00142.png
./Magma-main/bridges00145.png
./Magma-main/bridges00148.png
./Magma-main/bridges00151.png
./Magma-main/bridges00154.png
./Magma-main/bridges00157.png
./Magma-main/bridges00160.png
./Magma-main/bridges00004.png
./Magma-main/bridges00163.png
`;
    return data.split("\n")[index];
  }

  const frameCount = 55;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: `#page5`,
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page5",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
    // markers:true,
  });
}
page5_canvas();

// ____________________________________

// #page6 animation

var split_page6 = "";

const page6_h1 = document.querySelector("#page6 h1").textContent.split(" ");
// console.log(page6_h1)

for (let letters of page6_h1) {
  split_page6 += `<span>${letters} </span>`;

  document.querySelector("#page6 h1").innerHTML = split_page6;
}

gsap.to("#page6 h1 span", {
  scrollTrigger: {
    trigger: "#page6 h1 span",
    start: "top bottom",
    end: "bottom 40%",
    // markers:true,
    scroller: "#main",
    scrub: 0.5,
  },
  stagger: 1,
  color: "white",
});

// ____________________________________
// page7 canvas

function page7_canvas() {
  const canvas = document.querySelector("#page7>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
https://thisismagma.com/assets/home/lore/seq/1.webp?2
https://thisismagma.com/assets/home/lore/seq/2.webp?2
https://thisismagma.com/assets/home/lore/seq/3.webp?2
https://thisismagma.com/assets/home/lore/seq/4.webp?2
https://thisismagma.com/assets/home/lore/seq/5.webp?2
https://thisismagma.com/assets/home/lore/seq/6.webp?2
https://thisismagma.com/assets/home/lore/seq/7.webp?2
https://thisismagma.com/assets/home/lore/seq/8.webp?2
https://thisismagma.com/assets/home/lore/seq/9.webp?2
https://thisismagma.com/assets/home/lore/seq/10.webp?2
https://thisismagma.com/assets/home/lore/seq/11.webp?2
https://thisismagma.com/assets/home/lore/seq/12.webp?2
https://thisismagma.com/assets/home/lore/seq/13.webp?2
https://thisismagma.com/assets/home/lore/seq/14.webp?2
https://thisismagma.com/assets/home/lore/seq/15.webp?2
https://thisismagma.com/assets/home/lore/seq/16.webp?2
https://thisismagma.com/assets/home/lore/seq/17.webp?2
https://thisismagma.com/assets/home/lore/seq/18.webp?2
https://thisismagma.com/assets/home/lore/seq/19.webp?2
https://thisismagma.com/assets/home/lore/seq/20.webp?2
https://thisismagma.com/assets/home/lore/seq/21.webp?2
https://thisismagma.com/assets/home/lore/seq/22.webp?2
https://thisismagma.com/assets/home/lore/seq/23.webp?2
https://thisismagma.com/assets/home/lore/seq/24.webp?2
https://thisismagma.com/assets/home/lore/seq/25.webp?2
https://thisismagma.com/assets/home/lore/seq/26.webp?2
https://thisismagma.com/assets/home/lore/seq/27.webp?2
https://thisismagma.com/assets/home/lore/seq/28.webp?2
https://thisismagma.com/assets/home/lore/seq/29.webp?2
https://thisismagma.com/assets/home/lore/seq/30.webp?2
https://thisismagma.com/assets/home/lore/seq/31.webp?2
https://thisismagma.com/assets/home/lore/seq/32.webp?2
https://thisismagma.com/assets/home/lore/seq/33.webp?2
https://thisismagma.com/assets/home/lore/seq/34.webp?2
https://thisismagma.com/assets/home/lore/seq/35.webp?2
https://thisismagma.com/assets/home/lore/seq/36.webp?2
https://thisismagma.com/assets/home/lore/seq/37.webp?2
https://thisismagma.com/assets/home/lore/seq/38.webp?2
https://thisismagma.com/assets/home/lore/seq/39.webp?2
https://thisismagma.com/assets/home/lore/seq/40.webp?2
https://thisismagma.com/assets/home/lore/seq/41.webp?2
https://thisismagma.com/assets/home/lore/seq/42.webp?2
https://thisismagma.com/assets/home/lore/seq/43.webp?2
https://thisismagma.com/assets/home/lore/seq/44.webp?2
https://thisismagma.com/assets/home/lore/seq/45.webp?2
https://thisismagma.com/assets/home/lore/seq/46.webp?2
https://thisismagma.com/assets/home/lore/seq/47.webp?2
https://thisismagma.com/assets/home/lore/seq/48.webp?2
https://thisismagma.com/assets/home/lore/seq/49.webp?2
https://thisismagma.com/assets/home/lore/seq/50.webp?2
https://thisismagma.com/assets/home/lore/seq/51.webp?2
https://thisismagma.com/assets/home/lore/seq/52.webp?2
https://thisismagma.com/assets/home/lore/seq/53.webp?2
https://thisismagma.com/assets/home/lore/seq/54.webp?2
https://thisismagma.com/assets/home/lore/seq/55.webp?2
https://thisismagma.com/assets/home/lore/seq/56.webp?2
https://thisismagma.com/assets/home/lore/seq/57.webp?2
https://thisismagma.com/assets/home/lore/seq/58.webp?2
https://thisismagma.com/assets/home/lore/seq/59.webp?2
https://thisismagma.com/assets/home/lore/seq/60.webp?2
https://thisismagma.com/assets/home/lore/seq/61.webp?2
https://thisismagma.com/assets/home/lore/seq/62.webp?2
https://thisismagma.com/assets/home/lore/seq/63.webp?2
https://thisismagma.com/assets/home/lore/seq/64.webp?2
https://thisismagma.com/assets/home/lore/seq/65.webp?2
https://thisismagma.com/assets/home/lore/seq/66.webp?2
https://thisismagma.com/assets/home/lore/seq/67.webp?2
https://thisismagma.com/assets/home/lore/seq/68.webp?2
https://thisismagma.com/assets/home/lore/seq/69.webp?2
https://thisismagma.com/assets/home/lore/seq/70.webp?2
https://thisismagma.com/assets/home/lore/seq/71.webp?2
https://thisismagma.com/assets/home/lore/seq/72.webp?2
https://thisismagma.com/assets/home/lore/seq/73.webp?2
https://thisismagma.com/assets/home/lore/seq/74.webp?2
https://thisismagma.com/assets/home/lore/seq/75.webp?2
https://thisismagma.com/assets/home/lore/seq/76.webp?2
https://thisismagma.com/assets/home/lore/seq/77.webp?2
https://thisismagma.com/assets/home/lore/seq/78.webp?2
https://thisismagma.com/assets/home/lore/seq/79.webp?2
https://thisismagma.com/assets/home/lore/seq/80.webp?2
https://thisismagma.com/assets/home/lore/seq/81.webp?2
https://thisismagma.com/assets/home/lore/seq/82.webp?2
https://thisismagma.com/assets/home/lore/seq/83.webp?2
https://thisismagma.com/assets/home/lore/seq/84.webp?2
https://thisismagma.com/assets/home/lore/seq/85.webp?2
https://thisismagma.com/assets/home/lore/seq/86.webp?2
https://thisismagma.com/assets/home/lore/seq/87.webp?2
https://thisismagma.com/assets/home/lore/seq/88.webp?2
https://thisismagma.com/assets/home/lore/seq/89.webp?2
https://thisismagma.com/assets/home/lore/seq/90.webp?2
https://thisismagma.com/assets/home/lore/seq/91.webp?2
https://thisismagma.com/assets/home/lore/seq/92.webp?2
https://thisismagma.com/assets/home/lore/seq/93.webp?2
https://thisismagma.com/assets/home/lore/seq/94.webp?2
https://thisismagma.com/assets/home/lore/seq/95.webp?2
https://thisismagma.com/assets/home/lore/seq/96.webp?2
https://thisismagma.com/assets/home/lore/seq/97.webp?2
https://thisismagma.com/assets/home/lore/seq/98.webp?2
https://thisismagma.com/assets/home/lore/seq/99.webp?2
https://thisismagma.com/assets/home/lore/seq/100.webp?2
https://thisismagma.com/assets/home/lore/seq/101.webp?2
https://thisismagma.com/assets/home/lore/seq/102.webp?2
https://thisismagma.com/assets/home/lore/seq/103.webp?2
https://thisismagma.com/assets/home/lore/seq/104.webp?2
https://thisismagma.com/assets/home/lore/seq/105.webp?2
https://thisismagma.com/assets/home/lore/seq/106.webp?2
https://thisismagma.com/assets/home/lore/seq/107.webp?2
https://thisismagma.com/assets/home/lore/seq/108.webp?2
https://thisismagma.com/assets/home/lore/seq/109.webp?2
https://thisismagma.com/assets/home/lore/seq/110.webp?2
https://thisismagma.com/assets/home/lore/seq/111.webp?2
https://thisismagma.com/assets/home/lore/seq/112.webp?2
https://thisismagma.com/assets/home/lore/seq/113.webp?2
https://thisismagma.com/assets/home/lore/seq/114.webp?2
https://thisismagma.com/assets/home/lore/seq/115.webp?2
https://thisismagma.com/assets/home/lore/seq/116.webp?2
https://thisismagma.com/assets/home/lore/seq/117.webp?2
https://thisismagma.com/assets/home/lore/seq/118.webp?2
https://thisismagma.com/assets/home/lore/seq/119.webp?2
https://thisismagma.com/assets/home/lore/seq/120.webp?2
https://thisismagma.com/assets/home/lore/seq/121.webp?2
https://thisismagma.com/assets/home/lore/seq/122.webp?2
https://thisismagma.com/assets/home/lore/seq/123.webp?2
https://thisismagma.com/assets/home/lore/seq/124.webp?2
https://thisismagma.com/assets/home/lore/seq/125.webp?2
https://thisismagma.com/assets/home/lore/seq/126.webp?2
https://thisismagma.com/assets/home/lore/seq/127.webp?2
https://thisismagma.com/assets/home/lore/seq/128.webp?2
https://thisismagma.com/assets/home/lore/seq/129.webp?2
https://thisismagma.com/assets/home/lore/seq/130.webp?2
https://thisismagma.com/assets/home/lore/seq/131.webp?2
https://thisismagma.com/assets/home/lore/seq/132.webp?2
https://thisismagma.com/assets/home/lore/seq/133.webp?2
https://thisismagma.com/assets/home/lore/seq/134.webp?2
https://thisismagma.com/assets/home/lore/seq/135.webp?2
https://thisismagma.com/assets/home/lore/seq/136.webp?2

`;
    return data.split("\n")[index];
  }

  const frameCount = 136;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: `#page7`,
      start: `top top`,
      end: `250% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page7",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
    // markers:true,
  });
}
page7_canvas();

// ____________________________________

gsap.to(".page7_circle", {
  scrollTrigger: {
    trigger: ".page7_circle",
    start: "top center",
    end: "bottom top",
    // markers:true,
    scroller: "#main",
    scrub: 0.5,
  },
  // bacgroundColor:"#0a3bce91",
  scale: 1.5,
});

gsap.to(".inner_circle", {
  scrollTrigger: {
    trigger: ".inner_circle",
    start: "top center",
    end: "bottom top",
    // markers:true,
    scroller: "#main",
    scrub: 0.5,
  },
  backgroundColor: "#0a3bce91",
});

gsap.to(".inner_circle h1", {
  scrollTrigger: {
    trigger: ".inner_circle h1",
    start: "top bottom",
    end: "bottom top",
    // markers: true,
    scroller: "#main",
    scrub: 0.5,
  },
  fontSize: "6vw",
  opacity: 0.6,
  onStart:time(),
});


// const load_number = document.querySelector(".inner_circle h1");

var a = 0;
function time(){
    setInterval(()=>{
        a = a +  Math.floor(Math.random()*20);
        if(a < 100){
            document.querySelector(".inner_circle h1").innerText =  a + "%";  
        }else{
            a = 100
            document.querySelector(".inner_circle h1").innerText =  a + "%";
        }
    } ,450)

}

// time()
