/**
 * Track section visibility with Google Analytics (production only)
 */

/**
 * Track when sections come into view using IntersectionObserver
 * @param sections - Array of section IDs to track (e.g., ['profile', 'experience'])
 * @param threshold - Visibility threshold (0-1, default: 0.01 = 1%)
 */
export function trackSections(
  sections: string[],
  threshold: number = 0.01
): void {
  // Only track sections in production
  if (!import.meta.env.PROD) {
    return;
  }

  // Wait for the window to load
  window.addEventListener("load", () => {
    const trackedSections = new Set<string>();

    // Create IntersectionObserver to track when sections come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;

          // Track section when it becomes visible
          if (entry.isIntersecting && !trackedSections.has(sectionId)) {
            trackedSections.add(sectionId);

            if (typeof (window as any).gtag !== "undefined") {
              (window as any).gtag("event", "section_view", {
                event_category: "Engagement",
                event_label: sectionId,
                value: sections.indexOf(sectionId) + 1,
              });
            }
          }
        });
      },
      {
        threshold,
        rootMargin: "0px",
      }
    );

    // Observe each section
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });
  });
}
