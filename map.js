const iconos = [
	{ icono: document.querySelector('#figuramap'), tooltip: document.querySelector('#tooltip'), offsetX: 2.07, offsetY: 1.07 },
	{ icono: document.querySelector('#figuramap1'), tooltip: document.querySelector('#tooltip1'), offsetX: 2.07, offsetY: 1.07 },
	{ icono: document.querySelector('#figuramap2'), tooltip: document.querySelector('#tooltip2'), offsetX: 2.07, offsetY: 1.07 },
	{ icono: document.querySelector('#figuramap3'), tooltip: document.querySelector('#tooltip3'), offsetX: 2.07, offsetY: 1.07 },
	{ icono: document.querySelector('#figuramap4'), tooltip: document.querySelector('#tooltip4'), offsetX: 2.07, offsetY: 1.07 },
	{ icono: document.querySelector('#figuramap5'), tooltip: document.querySelector('#tooltip5'), offsetX: 2.07, offsetY: 1.07 },
	{ icono: document.querySelector('#figuramap6'), tooltip: document.querySelector('#tooltip6'), offsetX: 2.07, offsetY: 1.07 },
	{ icono: document.querySelector('#figuramap7'), tooltip: document.querySelector('#tooltip7'), offsetX: 2.07, offsetY: 1.07 },
  ];
  
  const calcularPosicionTooltip = (icono, tooltip, offsetX, offsetY) => {
	// Calculamos las coordenadas del icono.
	const x = icono.offsetLeft;
	const y = icono.offsetTop;
  
	// Calculamos el tamaño del tooltip.
	const anchoTooltip = tooltip.clientWidth;
	const altoTooltip = tooltip.clientHeight;
  
	// Calculamos donde posicionaremos el tooltip.
	const izquierda = x - (anchoTooltip / offsetX);
	const arriba = y - (altoTooltip * offsetY);
  
	tooltip.style.left = `${izquierda}px`;
	tooltip.style.top = `${arriba}px`;
  };
  
  const calcularTodasLasPosiciones = () => {
	iconos.forEach(({ icono, tooltip, offsetX, offsetY }) => {
	  calcularPosicionTooltip(icono, tooltip, offsetX, offsetY);
	});
  };
  
  window.addEventListener('load', calcularTodasLasPosiciones);
  window.addEventListener('resize', calcularTodasLasPosiciones);
  
  iconos.forEach(({ icono, tooltip }) => {
	let timer;
	
	icono.addEventListener('mouseenter', () => {
	  tooltip.classList.add('activo');
	  calcularPosicionTooltip(icono, tooltip, icono.offsetX, icono.offsetY);
	});
  
	icono.addEventListener('mouseleave', () => {
	  timer = setTimeout(() => {
		tooltip.classList.remove('activo');
	  }, 500);
	});
  
	tooltip.addEventListener('mouseenter', () => clearTimeout(timer));
	tooltip.addEventListener('mouseleave', () => tooltip.classList.remove('activo'));
  });
