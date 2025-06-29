import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function downloadResume() {
  // Create a resume download link
  const link = document.createElement("a");
  link.href = "/resume.pdf"; // Direct file path from public directory
  link.download = "Mayank_Savaliya_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
} 