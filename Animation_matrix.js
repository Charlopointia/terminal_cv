
(function(){
  const canvas = document.getElementById('matrix');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');

  const css = getComputedStyle(document.documentElement);
  const color = (css.getPropertyValue('--accent') || '#74f0a7').trim();

  // Réglages
  let fontSize = 16;          
  let speed = 0.5;              
  let fade = 0.08;            
  let columns = 0, drops = [];

  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  function resize(){
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops = Array(columns).fill(0); 
  }

  function draw(){

    ctx.fillStyle = `rgba(13,15,20,${fade})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = color;
    ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;

    for(let i = 0; i < drops.length; i++){
      const char = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      ctx.fillText(char, x, y);

      if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
      else drops[i] += speed;
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  draw();
})();