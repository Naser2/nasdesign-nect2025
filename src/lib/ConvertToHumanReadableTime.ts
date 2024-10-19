/**
 * Converts Unix timestamp and duration to human-readable format.
 * @param {number} expiresAt - Unix timestamp in seconds when the session expires.
 * @param {number} expiresIn - Duration in seconds for how long the session lasts.
 * @returns {object} - An object containing human-readable time for expiration and duration.
 */
export function ConvertToHumanReadableTime(expiresAt: number, expiresIn: number) {
    const expiresAtDate = new Date(expiresAt * 1000); // Convert to milliseconds
    const currentDate = new Date();
  
    // Format dates to human-readable string
    const expiresAtReadable = expiresAtDate.toLocaleString();
    const currentReadable = currentDate.toLocaleString();
  
    // Calculate the remaining time in minutes and seconds
    const remainingTimeInSeconds = Math.max(0, expiresIn - Math.floor((Date.now() - currentDate.getTime()) / 1000));
    const minutes = Math.floor(remainingTimeInSeconds / 60);
    const seconds = remainingTimeInSeconds % 60;
  
    return {
      expiresAtReadable,
      currentReadable,
      remainingTime: `${minutes} minutes and ${seconds} seconds`
    };
  }
  
  // // Example usage:
  // const session = { expires_at: 1729282963, expires_in: 3600 };
  // const humanReadableTime = convertToHumanReadableTime(session.expires_at, session.expires_in);
  // console.log("Expires At (Human Readable):", humanReadableTime.expiresAtReadable);
  // console.log("Current Time (Human Readable):", humanReadableTime.currentReadable);
  // console.log("Remaining Time:", humanReadableTime.remainingTime);
  