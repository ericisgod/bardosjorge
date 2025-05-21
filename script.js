const perfil = document.querySelector('.perfil');

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;
  perfil.style.transform = `translate(-50%, -50%) rotateY(${x}deg) rotateX(${-y}deg)`;
});
