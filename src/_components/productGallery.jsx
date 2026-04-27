export default function ProductGallery() {
  const images = [
    {
      src: "/img/home/boxed_dev_paci.jpg",
      alt: "Boxed Paci",
    },
    {
      src: "/img/home/dev_paci.jpg",
      alt: "Paci Development Board",
    },
    {
      src: "/img/home/paci_development_board.jpg",
      alt: "Paci Prototypes",
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="container">
        <h2 className="font-bubblegum text-4xl md:text-5xl text-purple-secondary text-center mb-4">
          See It Up Close
        </h2>
        <p className="font-comic text-gray-500 text-center mb-10 text-lg">
          Here are some of our early prototypes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.alt}
              className="group overflow-hidden rounded-2xl border-4 border-purple-secondary "
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full aspect-square object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
