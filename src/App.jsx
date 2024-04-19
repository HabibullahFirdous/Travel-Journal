import Nav from "./conponents/Nav";
import Hero from "./conponents/Hero";
import data from "./data";
function App() {
  const items = data.map(function (item) {
    return (
      <Hero
        imageUrl={item.imageUrl}
        location={item.location}
        title={item.title}
        googleMapsUrl={item.googleMapsUrl}
        description={item.description}
      />
    );
  });
  return (
    <>
      <Nav />
      {items}
    </>
  );
}

export default App;

{
  /* <Hero
  title="Mount Fuji"
  location="Japan"
  googleMapsUrl="https://goo.gl/maps/1DGM5WrWnATgkSNB8"
  description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
  imageUrl="https://source.unsplash.com/WLxQvbMyfas"
/> */
}
