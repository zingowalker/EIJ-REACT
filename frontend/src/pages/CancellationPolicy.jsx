const CancellationPolicy = () => {
  return (
    <section className="flex items-center justify-center max-7xl py-32 bg-[#fff] text-gray-900">
      <div className="container leading-relaxed text-center text-sm md:text-left  md:text-base md:px-30 lg:px-60 px-8">
        <div className="">
          <h1 className="md:text-2xl text-lg font-bold mb-5 text-center">
            Cancellation Policy
          </h1>
          <p className="text-sm mb-8 text-center">
            Last updated on April 16, 2023
          </p>
          <p className="pb-5">
            <span className="font-bold">Trip Fees</span> <br />
            To pay for the trip, you can either make an online transfer or a
            cash deposit. Instructions for payment will be included in your
            confirmation email. After completing the transfer, please send us a
            confirmation email with the transfer details so that we can
            efficiently process your reservation.
          </p>
          <p className="pb-5">
            <span className="font-bold">Cancellation</span> <br />
            If you need to cancel your services for any reason, whether it be
            avoidable or unavoidable, please notify Eco India Journeys in
            writing at ecoindiajourneys@gmail.com. Refunds based on the total
            fare will be issued according to the following terms once we receive
            your written cancellation.
          </p>
          <p>
            <span className="font-bold">Confirmation Policy</span> <br />
          </p>
          <ul className="pb-5">
            <li>
              45 days prior to the trip departure, 60% of the total cost must be
              paid.
            </li>
            <li>
              30 days prior to the trip departure, 80% of the total cost must be
              paid.
            </li>
            <li>
              10 days prior to the trip departure, 100% of the total cost must
              be paid.
            </li>
          </ul>
          <p>
            <span className="font-bold">Cancellation Policy</span> <br />
          </p>
          <ul className="pb-5">
            <li>
              More than 35 days before the date of travel, full refund will be
              provided.
            </li>
            <li>
              Between 20 to 35 days before the date of travel, a cancellation
              fee of 30% of the total trip cost will be charged.
            </li>
            <li>
              Between 10 to 20 days before the date of travel, a cancellation
              fee of 50% of the total trip cost will be charged.
            </li>
            <li>
              Less than 10 days before the date of travel, a cancellation fee of
              100% of the total trip cost will be charged.
            </li>
          </ul>
          <p>
            <span className="font-bold">Refund Process</span> <br />
          </p>
          <ul>
            <li>
              Refund requests will be processed within 3 to 5 days on business
              days.
            </li>
            <li>
              Refunds will be issued only via Bank Transfer to the traveler's
              account.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CancellationPolicy;
