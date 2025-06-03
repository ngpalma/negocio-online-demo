import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>Café Del Sol - Home</title>
        <meta name="description" content="Welcome to Café Del Sol, your cozy café in Argentina." />
      </Helmet>
      <section className="bg-amber-600 text-white p-10 text-center">
        <h1 className="text-4xl font-bold">Welcome to Café Del Sol</h1>
        <p className="mt-4">Enjoy artisan coffee and pastries in a cozy atmosphere.</p>
        <button className="mt-4 bg-white text-amber-600 px-6 py-2 rounded">
          View Menu
        </button>
      </section>
    </div>
  );
}
export default Home;