import React from 'react';

const services = [
  {
    id: 1,
    name: 'Haircut',
    price: 25,
    description: 'A classic haircut using scissors and clippers to achieve your desired style.',
    category: 'Hair',
    providers: ['Alex', 'Jordan'],
  },
  {
    id: 2,
    name: 'Beard Trim',
    price: 15,
    description: 'Precision beard trimming and shaping.',
    category: 'Beard',
    providers: ['Casey', 'Jordan'],
  },
  {
    id: 3,
    name: 'Shave',
    price: 20,
    description: 'A traditional wet shave with a straight razor for a super smooth finish.',
    category: 'Beard',
    providers: ['Alex'],
  },
  {
    id: 4,
    name: 'Hair Coloring',
    price: 50,
    description: 'Professional hair coloring services using top-quality products.',
    category: 'Hair',
    providers: ['Casey'],
  },
  // Add more services as needed
];

const BarberServices = () => {
  return (
    <div 
      className="container mx-auto px-4 py-8"
      // style={{
      //   backgroundImage: "url('https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Replace with your image URL
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   backgroundRepeat: 'no-repeat',
      // }}
    >
      <div className="bg-white bg-opacity-90 p-6 rounded-md shadow-lg"
			 style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
			>
        <h2 className="text-4xl text-white font-bold text-center mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="card shadow-lg p-4 flex flex-col  opacity-70">
              <h3 className="card-title text-xl font-bold mb-2">{service.name}</h3>
              <p className="mb-1"><strong>Category:</strong> {service.category}</p>
              <p className="card-text mb-4">{service.description}</p>
              <p className="mb-4"><strong>Providers:</strong> {service.providers.join(', ')}</p>
              <div className="mt-auto flex justify-between items-center">
                <span className="text-lg font-semibold">${service.price}</span>
                {/* <button type="button" className="btn btn-primary">Book Now</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarberServices;
