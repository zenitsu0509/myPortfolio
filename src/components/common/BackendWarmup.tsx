"use client";

import { useEffect } from "react";

// Sends a one-time warmup request on initial visit to reduce cold-start latency for the backend.
const BackendWarmup = () => {
  useEffect(() => {
    const storageKey = "backend-warmup-sent";
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(storageKey)) return;

    sessionStorage.setItem(storageKey, "true");

    const controller = new AbortController();

    fetch("/api/qna", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: "warmup", history: [] }),
      cache: "no-store",
      signal: controller.signal,
    }).catch(() => {
      // Best-effort warmup; ignore errors to avoid blocking page load.
    });

    return () => controller.abort();
  }, []);

  return null;
};

export default BackendWarmup;
