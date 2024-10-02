import { CheckWindowSize } from "./CheckWindowSize";

  // Function to trim text based on device type
  export function TextTrimmer(text) {
    const deviceType = CheckWindowSize();
  
    // Standard text lengths for mobile and iPad
    const mobileMaxLength = 125; // Adjust as needed (character length for mobile)
    const ipadMaxLength = 200;   // Adjust as needed (character length for iPad)
  
    if (deviceType === 'mobile') {
      return trimText(text, mobileMaxLength);
    } else if (deviceType === 'ipad') {
      return trimText(text, ipadMaxLength);
    } else {
      // No trimming for desktop
      return text;
    }
  }
  
  // Reusable function to trim text to the specified number of characters
  function trimText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    } else {
      return text;
    }
  }
  
  // Usage example
  const fullText = `<span class="color_14 wixui-rich-text__text dark:text-gray-400 pb-4 !text-gray-200">From low confidence, low self esteem and low skeletal muscle mass to being ODFIT. As a young kid and teenager I spent most of my years being smaller than most of my peers. I decided to put my faith in science based workouts which held true to yielding results. In 2019, beginning my fitness journey at 163lbs and a hard gainer to 2024 weighing over 200lbs bodybuilding naturally. I fell in love with helping others achieve their fitness goals and transform their diets and routines into lifestyle habits.</span>`;
  
  // Trim the text based on device type
  const trimmedText = TextTrimmer(fullText);
  
  
  // Output the trimmed text
  console.log(trimmedText);
  