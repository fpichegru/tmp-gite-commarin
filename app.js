import PhotoSwipeLightbox from "https://unpkg.com/photoswipe/dist/photoswipe-lightbox.esm.js";

const lightbox = new PhotoSwipeLightbox({
  gallery: "#my-gallery",
  children: "a",
  pswpModule: () => import("https://unpkg.com/photoswipe"),
});

lightbox.init();



document.addEventListener("scroll", hideTopBanner)
const header = document.querySelector("header");

function hideTopBanner(){

  if (window.scrollY > 500 && window.innerWidth > 1024){

    header.style.transform = "translateY(-9rem)"

  }else{
    header.style.transform = "translateY(0%)";

  }

}