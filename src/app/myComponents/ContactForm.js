'use client';

const ContactForm = () => {
  return (
    <section className="py-20">
      <div className="w-1/4 container mx-auto bg-yellow-100 p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Let's Discuss Your Project</h2>
        <form className="flex flex-col">
          <input type="text" placeholder="Name" className="w-full mb-4 p-2 border border-gray-300 rounded" />
          <input type="tel" placeholder="Phone" className="w-full mb-4 p-2 border border-gray-300 rounded" />
          <input type="email" placeholder="Email" className="w-full mb-4 p-2 border border-gray-300 rounded" />
          <button className="w-3/5 m-auto bg-yellow-500 text-white p-2 rounded">Request a Meeting</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
