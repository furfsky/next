export const brightness = (color: string, bright: number) => {
  const strippedColor = color.replace('#', '');
  const channels: string[] | null = strippedColor.match(/.{1,2}/g);
  if (!channels) throw new Error("Invalid Color");
  return `rgb(${channels.map(channel =>
      Math.min(Math.max(parseInt(channel, 16) * bright, 0), 255)
  ).join(",")})`
};
