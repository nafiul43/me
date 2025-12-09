/**
 * Fix accessibility issues with dynamically created iframes
 */

/**
 * Add title attributes to iframes that don't have them (e.g., Partytown iframes)
 * @param title - Title to add to iframes (default: "Third-party Analytics Scripts")
 */
export function fixIframeAccessibility(
  title: string = "Third-party Analytics Scripts"
): void {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (
          node instanceof HTMLIFrameElement &&
          !node.title
        ) {
          node.title = title;
        }
      });
    });
  });

  if (typeof MutationObserver !== "undefined") {
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }
}
