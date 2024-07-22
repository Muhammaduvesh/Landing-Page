'use client';

const AppStages = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Application Development Stages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-6 rounded shadow-md">
            <h3 className="text-xl font-bold mb-4">Analysis</h3>
            <p>Analysis details...</p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow-md">
            <h3 className="text-xl font-bold mb-4">Design</h3>
            <p>Design details...</p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow-md">
            <h3 className="text-xl font-bold mb-4">Development</h3>
            <p>Development details...</p>
          </div>
          {/* Add more stages as needed */}
        </div>
      </div>
    </section>
  );
};

export default AppStages;
