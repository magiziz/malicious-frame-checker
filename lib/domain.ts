export const getValidtedWebsiteUrl = (url: string) => {
  if (!url) throw new Error("Url not found");
  const hasProtocol = url.startsWith("http://") || url.startsWith("https://");
  if (!hasProtocol) url = `https://${url}`;
  new URL(url); // Validate URL
  return url;
};
