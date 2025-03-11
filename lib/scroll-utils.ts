/**
 * Utility function to handle smooth scrolling to sections
 * Accounts for the fixed navbar height
 */

declare global {
  interface Window {
    scrollToSection: (sectionId: string) => void;
  }
}

export function scrollToSection(sectionId: string) {
  setTimeout(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const navbar = document.querySelector("nav");
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    const offsetPosition = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;

    console.log("Scrolling to position:", offsetPosition);

    window.scrollTo({
      top: offsetPosition + 250,
      behavior: "smooth",
    });
  }, 100);
}

{/* Attachs window to client side only */}
if (typeof window !== 'undefined') {
  window.scrollToSection = scrollToSection;
}
