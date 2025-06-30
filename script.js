document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio loaded!");

  // 🔁 Skills auto-rotation
  const ul = document.getElementById("skills-list");
  if (ul) {
    setInterval(() => {
      const firstItem = ul.querySelector("li");
      if (firstItem) ul.appendChild(firstItem);
    }, 1000);
  }

  // 🕸️ Spider Web Animation
  const canvas = document.getElementById("web-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let points = [];

    function createPoints(numPoints) {
      for (let i = 0; i < numPoints; i++) {
        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
    }

    function drawLine(p1, p2, maxDist) {
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < maxDist) {
        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / maxDist})`;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      points.forEach((point, index) => {
        point.x += point.vx;
        point.y += point.vy;

        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

        for (let j = index + 1; j < points.length; j++) {
          drawLine(point, points[j], 100);
        }
      });

      requestAnimationFrame(animate);
    }

    createPoints(60);
    animate();
  }
});

  function updateDateTime() {
    const now = new Date();
    
    const optionsDate = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
    const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };

    const dateStr = now.toLocaleDateString('en-IN', optionsDate);
    const timeStr = now.toLocaleTimeString('en-IN', optionsTime);

    document.getElementById('live-date').textContent = `📅 ${dateStr}`;
    document.getElementById('live-time').textContent = `⏰ ${timeStr}`;
  }
  
document.addEventListener("DOMContentLoaded", () => {
  // Load Lottie animation
  lottie.loadAnimation({
    container: document.getElementById('lottie-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
path: 'asset/animation4.json'
  });
});


document.addEventListener("DOMContentLoaded", () => {
  lottie.loadAnimation({
    container: document.getElementById("footer-lottie"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: 'asset/Animations2.json' // ✅ relative path to your file
  });
});


document.addEventListener("DOMContentLoaded", () => {
  lottie.loadAnimation({
    container: document.getElementById("about-lottie"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: 'asset/AnimationAbout.json' // ✅ relative path to your file
  });
});
