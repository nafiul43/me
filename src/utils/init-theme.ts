/**
 * Theme initialization and management utilities
 */

/**
 * Initialize theme on page load (must be called inline in <head> to prevent FOUC)
 */
export function initTheme(): void {
  // Default to dark mode if nothing is set in localStorage
  const theme =
    (typeof localStorage !== "undefined" && localStorage.getItem("theme")) ||
    "dark";
  
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
  const theme = localStorage.getItem("theme") || "dark";
  const themeMeta = document.querySelector<HTMLMetaElement>(
    'meta[name="theme-color"]'
  );
  
  if (themeMeta) {
    themeMeta.content = theme === "dark" ? "#1a202c" : "#ffffff";
  }
}
