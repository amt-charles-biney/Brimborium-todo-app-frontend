/**
 * Truncates a text to a specified maximum length and adds an ellipsis if needed.
 *
 * @param {string} text - The input text to be truncated.
 * @param {number} maxLength - The maximum length to which the text should be truncated.
 * @returns {string} The truncated text with an ellipsis if it exceeds the maximum length.
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  } else {
    const lastSpaceIndex = text.lastIndexOf(" ", maxLength);

    if (lastSpaceIndex !== -1) {
      return text.substring(0, lastSpaceIndex) + "...";
    } else {
      return text.substring(0, maxLength) + "...";
    }
  }
}
