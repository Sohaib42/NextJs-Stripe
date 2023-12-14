// components/HomePage.jsx
import Link from 'next/link';
import Image from 'next/image';
import ProductCard from './PrroductCard';
import Navbar from './Navbar';
const HomePage = () => {
    const featuredProducts = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1.',
      price: 29.99,
      image: '/meltinbg3.png', // Replace with the actual image path
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2.',
      price: 39.99,
      image: '/meltinbg2.png', // Replace with the actual image path
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2.',
      price: 39.99,
      image: '/meltinbg2.png', // Replace with the actual image path
    },
        {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2.',
      price: 39.99,
      image: '/meltinbg2.png', // Replace with the actual image path
    },
    // Add more products as needed
  ];
  return (
    <div className="mx-auto">
    <Navbar/>
      <main>
      <section className="mb-6 flex flex-wrap justify-center flex-col">
          <h2 className="text-2xl font-bold mb-4 text-center">Featured Products</h2>
          <div className="flex self-center flex-auto">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
      <footer className="text-center">
        <p className="mb-2">Ready to shop? Proceed to checkout!</p>
        <Link className="text-blue-500 hover:underline" href="/checkout">
          Checkout
        </Link>
      </footer>
    </div>
  );
};

export default HomePage;
