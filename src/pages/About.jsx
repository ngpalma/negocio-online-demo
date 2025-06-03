import { Helmet } from 'react-helmet';

function About() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <Helmet>
        <title>Café Del Sol - About</title>
        <meta name="description" content="Learn about Café Del Sol’s story." />
      </Helmet>
      <h1 className="text-3xl font-bold text-center">About Us</h1>
      <p className="mt-4 text-center">
        Café Del Sol is a family-owned café passionate about quality coffee and community.
      </p>
    </div>
  );
}
export default About;