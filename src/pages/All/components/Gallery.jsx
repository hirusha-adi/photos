const Gallery = () => {
  const imageUrls = Array(10).fill("https://placehold.co/300x300");

  return (
    <>
      <div className="flex justify-center items-center lg:block">
        {/* Grid Layout */}
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
          {imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Placeholder ${index + 1}`}
              className="h-[300px]"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export { Gallery };
