/**
 * Handle hash-based navigation on initial page load
 */

import { updateThemeColor } from "./init-theme";

/**
 * Initialize hash navigation with validation
 * @param validSlugs - Array of valid hash slugs (e.g., ['#profile', '#experience'])
 */
export function initHashNavigation(validSlugs: string[]): void {
  document.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash;

    // Only query if hash exists and is not empty
    if (hash) {
      const target = document.querySelector(hash);

      if (target && validSlugs.includes(`#${target.id}`)) {
        target.scrollIntoView({ behavior: "smooth" });
        updateThemeColor();
        return;
      }
    }

    // If no hash is present, scroll to #profile and update URL
    const profileSection = document.getElementById("profile");

    if (profileSection) {
      profileSection.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", "#profile");
    }

    // Update theme-color meta tag
    updateThemeColor();
  });
}
