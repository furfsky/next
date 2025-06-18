export const Logo = () => {
  const isPrideMonth = new Date().getMonth() === 5; // june (index starts from 0)
  const source = isPrideMonth ? "/logo-pride.webm" : "/logo.webm";

  return (
    <video
      aria-label={isPrideMonth ? "FurfSky Logo (Pride)" : "FurfSky Logo"}
      autoPlay
      className="w-80"
      height={268}
      loop
      muted
      playsInline
      src={source}
      width={448}
    />
  );
};
