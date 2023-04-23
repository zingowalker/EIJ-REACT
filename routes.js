const routes = [
  { path: "/", element: <Layout />, exact: true },
  { path: "/about", element: <About />, exact: true },
  { path: "/contact", element: <Contact />, exact: true },
  { path: "/Privacy-Policy", element: <PrivacyPolicy />, exact: true },
  {
    path: "/Cancellation-Policy",
    element: <CancellationPolicy />,
    exact: true,
  },
  { path: "/Terms-Of-Service", element: <TermsOfService />, exact: true },
  { path: "/Destination/Ladakh", element: <LadakhTours />, exact: true },
  { path: "/Ladakh/:slug", element: <LadakhTourDetails />, exact: true },
  { path: "/Destination/Himachal", element: <HimachalTours />, exact: true },
  { path: "/Himachal/:slug", element: <HimachalTourDetails />, exact: true },
  {
    path: "/Destination/South-India",
    element: <SouthIndiaTours />,
    exact: true,
  },
  {
    path: "/South-India/:slug",
    element: <SouthIndiaTourDetails />,
    exact: true,
  },
];

export default routes;
