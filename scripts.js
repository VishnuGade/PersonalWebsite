document.addEventListener("DOMContentLoaded", function() {
    const divs = document.querySelectorAll(".PSection");
    const sidebarLinks = document.querySelectorAll(".sidebar a");
  
    function highlightActiveDiv() {
        var topDivIdx = -1
        divs.forEach((div, index) => {
            const rect = div.getBoundingClientRect();
            if (rect.bottom < 48) {
                topDivIdx = index
            }
            sidebarLinks.forEach(link => link.classList.remove("active"));
        });
        sidebarLinks[topDivIdx + 1].classList.add("active");
    }
  
    window.addEventListener("scroll", highlightActiveDiv);
    window.addEventListener("resize", highlightActiveDiv);
  
    highlightActiveDiv(); // Initial highlighting
  });