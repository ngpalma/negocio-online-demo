import { useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post('https://negocio-online-demo.onrender.com/contact', formData, { timeout: 3000 });
      alert(response.data.message);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      alert(`Error submitting form: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <Helmet>
        <title>Café Del Sol - Contact</title>
        <meta name="description" content="Contact or reserve a table at Café Del Sol." />
      </Helmet>
      <h1 className="text-3xl font-bold text-center">Contact Us</h1>
      <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 mb-4 border rounded"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          disabled={isSubmitting}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          disabled={isSubmitting}
        />
        <input
          type="tel"
          placeholder="Phone"
          className="w-full p-3 mb-4 border rounded"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          disabled={isSubmitting}
        />
        <textarea
          placeholder="Message or Reservation Details"
          className="w-full p-3 mb-4 border rounded"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          disabled={isSubmitting}
        />
        <button
          type="submit"
          className="bg-amber-600 text-white px-6 py-3 rounded disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
}
export default Contact;