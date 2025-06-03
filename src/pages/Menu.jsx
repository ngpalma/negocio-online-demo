import { Helmet } from 'react-helmet';

function Menu() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <Helmet>
        <title>Café Del Sol - Menu</title>
        <meta name="description" content="Explore the menu at Café Del Sol." />
      </Helmet>
      <h1 className="text-3xl font-bold text-center">Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-white p-4 rounded shadow">Espresso - $200</div>
        <div className="bg-white p-4 rounded shadow">Croissant - $150</div>
        <div className="bg-white p-4 rounded shadow">Cappuccino - $250</div>
        <div className="bg-white p-4 rounded shadow">Medialuna - $100</div>
      </div>
      <div className="mt-6">
  <h2 className="text-2xl font-bold text-center">Gallery</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
    <img src="https://cdn.pixabay.com/photo/2016/11/29/04/31/caffeine-1867326_1280.jpg" alt="Coffee" className="rounded" />
    <img src="https://cdn.pixabay.com/photo/2024/08/25/13/27/croissant-8996469_1280.jpg" alt="Pastry" className="rounded" />
    <img src="https://cdn.pixabay.com/photo/2016/11/29/12/45/beverage-1869598_1280.jpg" alt="Cafe" className="rounded" />
  </div>
</div>
<section className="p-10 bg-gray-200">
  <h2 className="text-2xl font-bold text-center">What Our Customers Say</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
    <div className="bg-white p-4 rounded shadow">
      <p>"Best coffee in town!"</p>
      <p className="mt-2 font-bold">- Maria G.</p>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <p>"Cozy vibe, great service."</p>
      <p className="mt-2 font-bold">- Juan P.</p>
    </div>
  </div>
</section>
    </div>
  );
}
export default Menu;