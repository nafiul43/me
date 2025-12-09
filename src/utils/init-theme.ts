/**
 * Theme initialization and management utilities
 */

/**
 * Initialize theme on page load (must be called inline in <head> to prevent FOUC)
 */
export function initTheme(): void {
  const theme =
    (typeof localStorage !== "undefined" && localStorage.getItem("theme")) ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");
  
  document.documentElement.classList[theme === "dark" ? "add" : "remove"](
    "dark"
  );
  
  try {
    localStorage.setItem("theme", theme);
  } catch (e) {
    // Silently fail if localStorage is not available
  }
}

/**
 * Update theme-color meta tag based on current theme
 */
export function updateThemeColor(): void {
  const theme = localStorage.getItem("theme") || "light";
  const themeMeta = document.querySelector<HTMLMetaElement>(
    'meta[name="theme-color"]'
  );
  
  if (themeMeta) {
    themeMeta.content = theme === "dark" ? "#1a202c" : "#ffffff";
  }
}
