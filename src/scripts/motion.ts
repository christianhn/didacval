export const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Solo en punteros finos. Lenis se queda fuera del táctil a propósito: el
 * scroll nativo de iOS ya es fluido, y poner un interpolador encima solo añade
 * retardo al gesto.
 *
 * Ojo: esto NO controla si los triggers de ScrollTrigger corren o no. Esos
 * (el footer pineado, el scrub de Details) sí van también en móvil. Lo que los
 * hace seguros allí es no refrescarlos nunca mientras se hace scroll: ver
 * `ScrollTrigger.config({ ignoreMobileResize: true })` en Layout y los guards
 * por ancho en Header, Footer y Faq.
 */
export const supportsScrollChoreography = () =>
  window.matchMedia("(pointer: fine) and (hover: hover)").matches;