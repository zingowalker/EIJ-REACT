const HimachalBanner = () => {
  return (
    <div className="mx-auto py-12">
      <div
        className="bg-contain bg-center h-64 md:h-96"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1652131812743-07bc5dde8b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80')",
        }}
      >
        <div className="container mx-auto h-full flex flex-col items-center justify-center column">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
            Himachal
          </h1>
          <p className="text-white text-sm md:text-xl text-center mt-4">
            Motorbike adventure, Snow Leopard Sightings, Culture Tours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HimachalBanner;
