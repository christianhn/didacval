import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "./motion";

/**
 * Entrada por scroll de los bloques de las subpáginas.
 *
 * Por qué existe: una sección que aparece de golpe mientras el resto de la
 * página se mueve se lee como un salto. Es el único caso de los cinco en el que
 * la animación aporta información ("aquí hay algo más"), y por eso es la única
 * animación del sistema que se permite durar más de 300 ms.
 *
 * Tres reglas que no se negocian:
 *
 * - **Sólo `opacity` y `transform`.** Ni `height`, ni `margin`, ni `top`: cada
 *   uno de esos salta layout y paint en cada fotograma. `transform` y `opacity`
 *   se resuelven en el compositor.
 * - **Un trigger por elemento, no uno por bloque.** Un bloque alto (el panel de
 *   filas) tardaría demasiado en disparar su trigger y sus últimos elementos
 *   aparecerían de golpe. Con un trigger por elemento, cada uno entra cuando
 *   llega, y el retardo escalonado hace que el efecto sea de cascada.
 * - **Progresivo.** El estado inicial lo pone GSAP, no el CSS: si el script no
 *   llega a ejecutarse, el contenido se ve igualmente.
 *
 * El retardo escalonado se corta a `MAX_STAGGER`: en un bloque de quince
 * elementos, el último esperaría más de un segundo, que es exactamente lo que
 * hace que una interfaz se sienta lenta.
 */

/** Curva de entrada: arranca rápido, frena largo. La misma que `--ease-out-ui`. */
const EASE = "cubic-bezier(0.23, 1, 0.32, 1)";

/** Desplazamiento inicial en píxeles. Suficiente para leerse como entrada. */
const DISTANCE = 18;

const DURATION = 0.6;

/** Retardo entre elementos del mismo bloque, en segundos. */
const STAGGER = 0.06;

/** Techo del retardo acumulado: 4 elementos escalonados y ninguno más. */
const MAX_STAGGER = 0.18;

/** Cuánto antes de llegar al borde inferior de la ventana empieza a entrar. */
const START = "top 88%";

/**
 * Registra las animaciones de entrada de `[data-reveal]` dentro de `root`.
 * Idempotente: un elemento ya animado se marca y no se vuelve a animar.
 */
export function initReveals(root: ParentNode = document) {
  // Con movimiento reducido la entrada es un fundido instantáneo, no un
  // desplazamiento: el contenido aparece exactamente donde estaba.
  if (prefersReducedMotion()) return;

  gsap.registerPlugin(ScrollTrigger);

  root.querySelectorAll<HTMLElement>("[data-reveal]:not([data-reveal-ready])")
    .forEach((scope) => {
      scope.dataset.revealReady = "true";

      const items = [
        ...scope.querySelectorAll<HTMLElement>("[data-reveal-item]"),
      ];
      if (items.length === 0) return;

      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: DISTANCE },
          {
            opacity: 1,
            y: 0,
            duration: DURATION,
            ease: EASE,
            delay: Math.min(index * STAGGER, MAX_STAGGER),
            scrollTrigger: {
              trigger: item,
              start: START,
              once: true,
            },
          },
        );
      });
    });
}