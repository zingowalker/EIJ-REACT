const HimachalBanner = () => {
  return (
    <div className="mx-auto py-12">
      <div
        className="bg-cover bg-center h-64 md:h-96"
        style={{
          backgroundImage: "url('/images/Dhankar-spiti-india.jpg')",
        }}
      >
        <div className="container mx-auto h-full flex flex-col items-center justify-center column">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
            Himachal
          </h1>
          <p className="text-white text-sm md:text-xl text-center mt-4">
            Motorbike adventure, Culture Tours, Lush Green Valleys, Lakes,
            Himalayas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HimachalBanner;
