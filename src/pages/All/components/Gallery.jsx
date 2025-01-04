const Gallery = () => {
  const imageUrls = Array(10).fill("https://placehold.co/300x300");

  return (
    <>
      <div className="">
        {/* Grid Layout */}
        <div className="grid grid-cols-4">
          {imageUrls.map((url, index) => (
            <div key={index}>
              <img
                src={url}
                alt={`Placeholder ${index + 1}`}
                className="h-[300px]"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export { Gallery }