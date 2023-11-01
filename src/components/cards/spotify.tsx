const Spotify = () => {
  return (
    <div className="spotify h-full flex items-end justify-center">
      <iframe
        src="https://open.spotify.com/embed/album/260iH4R6MRNcDQ79106Icv?utm_source=generator"
        width="104%"
        height="160"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Spotify;
