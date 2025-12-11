/**
 * Lazy load Google Analytics in production only
 */

/**
 * Load Google Analytics scripts lazily (only in production)
 * @param measurementId - Google Analytics measurement ID
 */
export function loadAnalytics(measurementId: string): void {
  // Only load GA in production environment
  if (!import.meta.env.PROD) {
    console.log("[GA] Skipped: Not in production environment");
    return;
  }

  let gaLoaded = false;

  function loadGA(): void {
    if (gaLoaded) return;
    gaLoaded = true;

    // Create and inject the GA script
    const script = document.createElement("script");
    script.type = "text/partytown";
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Initialize dataLayer and gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]): void {
      window.dataLayer.push(args);
    }
    (window as any).gtag = gtag;
    gtag("js", new Date());
    gtag("config", measurementId);
  }

  // Load GA when browser is idle
  if (typeof requestIdleCallback !== "undefined") {
    requestIdleCallback(loadGA, { timeout: 2000 });
  } else {
    // Fallback: load after window load event
    if (document.readyState === "complete") {
      setTimeout(loadGA, 1000);
    } else {
      window.addEventListener("load", () => {
        setTimeout(loadGA, 1000);
      });
    }
  }

  // Also load on first user interaction for faster tracking
  const events = ["mousedown", "keydown", "touchstart", "scroll"];
  const interactionHandler = () => {
    loadGA();
    events.forEach((event) => {
      document.removeEventListener(event, interactionHandler);
    });
  };

  events.forEach((event) => {
    document.addEventListener(event, interactionHandler, {
      once: true,
      passive: true,
    });
  });
}

// Extend Window interface for dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}
