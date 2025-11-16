let images = [];
let idx = 0;


function fetchImages() {
  document.getElementById('status').innerText = "Loading images...";
  images = [];
  idx = 0;
  let loaded = 0;
  const n = 5;
  for(let i=0;i<n;i++) {

    fetch('https://picsum.photos/400/250?random=' + Math.floor(Math.random()*10000))
      .then(response => {
        images.push(response.url);
        loaded++;
        if (loaded === n) {
          showImg();
          document.getElementById('status').innerText = "";
        }
      })
      .catch(() => {
        loaded++;
        if (loaded === n) {
          showImg();
          document.getElementById('status').innerText = "Some images failed to load.";
        }
      });
  }
}

function showImg() {
  document.getElementById('carousel-img').src = images.length > 0 ? images[idx] : "";
}

function prevImg() {
  if(images.length === 0) return;
  idx = (idx - 1 + images.length) % images.length;
  showImg();
}

function nextImg() {
  if(images.length === 0) return;
  idx = (idx + 1) % images.length;
  showImg();
}


window.onload = fetchImages;
