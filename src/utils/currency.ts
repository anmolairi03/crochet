// Currency utility for Indian Rupees
// Conversion rate: 1 USD = 83 INR (approximate, update as needed)
const USD_TO_INR_RATE = 83;

/**
 * Converts USD price to Indian Rupees
 * @param usdPrice - Price in USD
 * @returns Price in INR
 */
export const convertToINR = (usdPrice: number): number => {
  return Math.round(usdPrice * USD_TO_INR_RATE);
};

/**
 * Formats price as Indian Rupees with ₹ symbol
 * @param price - Price in INR
 * @returns Formatted string (e.g., "₹830")
 */
export const formatINR = (price: number): string => {
  return `₹${price.toLocaleString('en-IN')}`;
};

/**
 * Converts USD to INR and formats it
 * @param usdPrice - Price in USD
 * @returns Formatted INR price string
 */
export const formatPrice = (usdPrice: number): string => {
  const inrPrice = convertToINR(usdPrice);
  return formatINR(inrPrice);
};

