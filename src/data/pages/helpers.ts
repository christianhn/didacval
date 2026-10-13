import { faqPage } from "../structuredData";
import type { PageBlock } from "./types";

/**
 * JSON-LD adicional que se deduce de los bloques de una página.
 *
 * Hoy sólo hay FAQPage, pero se extrae de los mismos bloques que pinta el
 * acordeón: si alguien edita la respuesta en el .ts, cambia a la vez en la
 * pantalla y en el marcado, que es exactamente lo que exige el validador de
 * Rich Results.
 */
export const blocksJsonLd = (blocks: readonly PageBlock[]) => {
  const faq = blocks.find((block) => block.kind === "faq");
  return faq?.kind === "faq" ? [faqPage(faq.data.items)] : [];
};