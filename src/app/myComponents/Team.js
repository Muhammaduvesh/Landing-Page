'use client';



const Team = () => {
  return (
    <section className="py-20 bg-gray-300">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded shadow-md text-center">
            <h3 className="text-4xl font-bold mb-4">28</h3>
            <p className="text-lg">Projects completed</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md text-center">
            <h3 className="text-4xl font-bold mb-4">100</h3>
            <p className="text-lg">Happy clients</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md text-center">
            <h3 className="text-4xl font-bold mb-4">7</h3>
            <p className="text-lg">Years of experience</p>
          </div>
        </div>
        <p className="w-1/2 m-auto p-2 bg-red-100 rounded">All necessary specialists - from a designer to a tester - are on our staff.We hire the best specialists in the market.It's expensive but worth it</p>
        <div className="mt-8 flex justify-center">
          <img src="./team.jpeg" alt="Team" className="rounded shadow-md w-full md:w-1/2" />
        </div>
      </div>
    </section>
  );
};

export default Team;
