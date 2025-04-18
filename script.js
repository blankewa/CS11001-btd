  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("#leftNav ul li a");

  window.addEventListener("scroll", () => {
    let scrollY = window.scrollY + window.innerHeight / 3;

    sections.forEach((section, i) => {
      if (
        scrollY >= section.offsetTop &&
        scrollY < section.offsetTop + section.offsetHeight
      ) {
        navLinks.forEach(link => link.classList.remove("active"));
        navLinks[i].classList.add("active");
      }
    });
  });sections