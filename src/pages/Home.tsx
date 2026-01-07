import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Globe, Award, Truck } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'B2B Manufacturing',
      description: 'Specialized in bulk orders for retailers, distributors, and corporate clients worldwide.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Export',
      description: 'Export-ready operations with international shipping and customs documentation.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Certified',
      description: 'Premium quality garments with rigorous testing and international compliance standards.'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Fast Delivery',
      description: 'Streamlined production with typical lead times of 15-30 days.'
    }
  ];

  const featuredProducts = [
    {
      id: '1',
      name: 'Corporate Polo Shirts',
      slug: 'corporate-polo-shirts',
      image: '/images/products/corporate-polo-shirts/1.webp',
      material: '100% Cotton Pique',
      moq: 100,
      price: 180
    },
    {
      id: '2',
      name: 'Industrial Work T-Shirts',
      slug: 'industrial-work-t-shirts',
      image: '/images/products/industrial-work-t-shirts/1.webp',
      material: 'Cotton-Polyester Blend',
      moq: 100,
      price: 120
    },
    {
      id: '5',
      name: 'Custom Hoodies',
      slug: 'custom-hoodies',
      image: '/images/products/custom-hoodies/1.webp',
      material: 'Cotton-Polyester Fleece',
      moq: 100,
      price: 300
    },
    {
      id: '6',
      name: 'Work Jackets',
      slug: 'work-jackets',
      image: '/images/products/work-jackets/1.webp',
      material: 'Canvas Cotton',
      moq: 100,
      price: 550
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1C1C1C] to-gray-800 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/hero/hero.png)'
          }}
        >
          <div className="absolute inset-0 bg-[#1C1C1C] bg-opacity-70"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Global Clothing Manufacturing.{' '}
                <span className="text-[#DAA520]">Customized.</span>{' '}
                Delivered.
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
                From bulk uniforms to private-label collections – get factory-direct quotes for ready-made garments and custom apparel manufacturing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center bg-[#DAA520] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#B8941C] transition-colors group"
                >
                  Browse Products
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/manufacturing"
                  className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-[#1C1C1C] transition-colors"
                >
                  View Capabilities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1C1C1C] mb-4">
              Why Choose Eagle Clothing?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading manufacturing capabilities designed specifically for B2B clients and international trade.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#DAA520] bg-opacity-10 rounded-xl text-[#DAA520] mb-6 group-hover:bg-[#DAA520] group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Showcase */}
      <section className="py-20 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1C1C1C] mb-6">
                State-of-the-Art Manufacturing
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our modern facility features advanced machinery, quality control systems, and sustainable practices. From fabric sourcing to final packaging, we ensure every garment meets international standards.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#DAA520] rounded-full mr-3"></div>
                  Advanced cutting and sewing technology
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#DAA520] rounded-full mr-3"></div>
                  Multi-stage quality inspection process
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#DAA520] rounded-full mr-3"></div>
                  Sustainable and ethical production practices
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#DAA520] rounded-full mr-3"></div>
                  Flexible MOQ and customization options
                </li>
              </ul>
              <Link
                to="/manufacturing"
                className="inline-flex items-center bg-[#DAA520] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#B8941C] transition-colors"
              >
                View Manufacturing Details
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="/images/manufacturing/state-of-the-art.png"
                alt="State-of-the-art manufacturing facility"
                className="rounded-2xl shadow-2xl aspect-[3/2] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#DAA520] to-transparent opacity-20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1C1C1C] mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600">
              Explore our most popular garments for B2B manufacturing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.slug}`}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{product.material}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#DAA520] font-bold">From ₹{product.price}</span>
                    <span className="text-gray-500 text-sm">MOQ: {product.moq}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center bg-[#DAA520] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#B8941C] transition-colors"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1C1C1C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Manufacturing Order?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get custom quotes for bulk orders, private label production, and specialized garment manufacturing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center bg-[#DAA520] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#B8941C] transition-colors"
            >
              Browse Product Catalog
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center border-2 border-[#DAA520] text-[#DAA520] px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#DAA520] hover:text-white transition-colors"
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;