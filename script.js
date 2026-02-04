document.addEventListener("DOMContentLoaded", () => {
  const slides = [
    {
      src: "images/buzz1.png",
      caption:
        "Browse posters across the community. Filter by what’s trending, happening now, or your interests to find what matters fast."
    },
    {
      src: "images/buzz2.png",
      caption:
        "See performance at a glance: views, saves, and audience insights, so organizers understand reach without guesswork."
    },
    {
      src: "images/buzz3.png",
      caption:
        "Save posts to your board to track deadlines and opportunities you care about. Never miss what’s next."
    }
  ];

  let index = 0;

  const slide = document.getElementById("buzz-slide");
  const captionEl = document.getElementById("buzz-caption");
  const nextBtn = document.querySelector(".buzz-next");
  const prevBtn = document.querySelector(".buzz-prev");

  if (!slide || !captionEl || !nextBtn || !prevBtn) {
    console.error("Carousel elements not found");
    return;
  }

  function render() {
    slide.src = slides[index].src;
    captionEl.textContent = slides[index].caption;
  }

  render();

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    render();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    render();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const slides = [
    { src: "images/buzz1.png", caption: "Browse posters across the community..." },
    { src: "images/buzz2.png", caption: "See performance at a glance..." },
    { src: "images/buzz3.png", caption: "Save posts to your board..." }
  ];

  let index = 0;
  const slide = document.getElementById("buzz-slide");
  const captionEl = document.getElementById("buzz-caption");
  const nextBtn = document.querySelector(".buzz-next");
  const prevBtn = document.querySelector(".buzz-prev");

  if (!slide || !captionEl || !nextBtn || !prevBtn) return;

  function render() {
    slide.src = slides[index].src;
    captionEl.textContent = slides[index].caption;
  }

  render();

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    render();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    render();
  });
});
