export const Logo = () => {
  const isPrideMonth = new Date().getMonth() === 5; // june (index starts from 0)
  const source = isPrideMonth ? "/logo-pride.webm" : "/logo.webm";

  return (
    <video
      src={source}
      width={448}
      height={268}
      className="w-80"
      autoPlay
      loop
      muted
      playsInline
      aria-label={isPrideMonth ? "FurfSky Logo (Pride)" : "FurfSky Logo"}
    />
  );
};
