/**
 * Utility function to handle smooth scrolling to sections
 * Accounts for the fixed navbar height
 */
export function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId)
  if (!section) return

  // Get the navbar height to offset the scroll position
  const navbar = document.querySelector("nav")
  const navbarHeight = navbar ? navbar.offsetHeight : 0

  // Calculate the position to scroll to
  const sectionPosition = section.getBoundingClientRect().top
  const offsetPosition = sectionPosition + window.pageYOffset - navbarHeight - 20 // 20px extra padding

  // Scroll to the section
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  })
}

