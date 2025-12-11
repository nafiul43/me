/**
 * Lazy load CSS stylesheets using requestIdleCallback or window.load fallback
 */

/**
 * Lazy load one or more CSS files
 * @param stylesheets - Array of stylesheet paths to load
 */
export function lazyLoadStyles(stylesheets: string[]): void {
  const loadStylesheet = (href: string) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  };

  const loadAllStylesheets = () => {
    stylesheets.forEach(loadStylesheet);
  };

  if (typeof requestIdleCallback !== "undefined") {
    requestIdleCallback(loadAllStylesheets);
  } else {
    window.addEventListener("load", loadAllStylesheets);
  }
}
