// Function to check window size (mobile, iPad, desktop)
export function CheckWindowSize() {
    const width = window.innerWidth;
  
    if (width <= 768) {
      // Mobile screen size (width <= 768px)
      return 'mobile';
    } else if (width > 768 && width <= 1024) {
      // iPad screen size (768px < width <= 1024px)
      return 'ipad';
    } else {
      // Desktop screen size (width > 1024px)
      return 'desktop';
    }
  }
  
