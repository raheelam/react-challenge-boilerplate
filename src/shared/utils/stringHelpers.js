export const truncateText = (maxLength, text) => {
  if (!text) {
    return "";
  }
  if (text.length > maxLength) {
    return `${text.slice(0, maxLength - 3)}...`;
  }
  return text;
};

export const capitalizeFirstLetter = (string) => {
  if (!string) return;
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
};

export const lowerAllAndCapitalizeFirstLetter = (string) => {
  if (!string) return;
  string = string.toLowerCase();
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
};
