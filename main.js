var typed = new Typed(".text", {
    strings: ["Beginner Web", "Development", "Frontend"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });

  function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
  }

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar a");

  function updateActiveLink() {
    let currentSectionId = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;
      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });

    // Jika di paling atas (Home)
    if (window.scrollY < 100) {
      document.querySelector('.navbar a[href="#home"]').classList.add("active");
    }
  }

  window.addEventListener("scroll", updateActiveLink);

  // Tambahkan saat link diklik juga (biar langsung nyala)
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });


  const scrollTopBtn = document.querySelector('.top');
const sectionIds = ['contact', 'project', 'skills', 'about', 'home']; // urutan dari bawah ke atas

document.querySelector('.top').addEventListener('click', function(e) {
  e.preventDefault();

  const scrollPosition = window.scrollY;
  let targetSection = null;

  for (let i = 0; i < sectionIds.length; i++) {
    const section = document.getElementById(sectionIds[i]);
    if (section.offsetTop < scrollPosition - 10) {
      targetSection = section;
      break;
    }
  }

  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

// Menyembunyikan tombol jika sudah di paling atas
window.addEventListener('scroll', () => {
  if (window.scrollY <= 10) {
    scrollTopBtn.style.display = 'none';
  } else {
    scrollTopBtn.style.display = 'block';
  }
});

// Jalankan sekali saat halaman dimuat
if (window.scrollY <= 10) {
  scrollTopBtn.style.display = 'none';
}
