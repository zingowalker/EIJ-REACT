const SouthIndiaBanner = () => {
    return (
        <div className="mx-auto py-12">
            <div className="bg-cover bg-center h-64 md:h-96" style={{ backgroundImage: "url('https://images.pexels.com/photos/5269073/pexels-photo-5269073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
                <div className="container mx-auto h-full flex flex-col items-center justify-center column">
                    <h1 className="text-3xl md:text-5xl font-bold text-white text-center">South India</h1>
                    <p className="text-white text-sm md:text-xl text-center mt-4">Back Waters, Wildlife, Beach, Luxury Holidays</p>
                </div>
            </div>
        </div>
    );
};

export default SouthIndiaBanner;