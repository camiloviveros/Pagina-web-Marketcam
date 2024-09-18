'use client';

import { useState } from 'react';

export default function Marketcam() {
  const [cart, setCart] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCart, setShowCart] = useState(false);

  const products = [
    { id: 1, name: 'Camisa', description: 'Tallas disponibles: M, S, L', price: 79900, image: 'https://www.villaromana.com.co/cdn/shop/files/CS00663C012_01.jpg?v=1685744039' },
    { id: 2, name: 'Zapato en cuero', description: 'Disponibles en todas las tallas', price: 199900, image: 'https://d3en8d2cl9etnr.cloudfront.net/1234845-thickbox_default/new-mens-leather-shoes-man-dress-luxury-brand-elegant-design-business-.jpg' },
    { id: 3, name: 'Pantalón Drill', description: 'Pantalón para hombre, todas las tallas', price: 99900, image: 'https://almacenesginopasscalli.com/wp-content/uploads/2023/02/Mesa-de-trabajo-11-13.jpg' },
    { id: 4, name: 'Chaqueta de cuero', description: 'Tallas S, M, L', price: 299900, image: 'https://http2.mlstatic.com/D_NQ_NP_783950-MCO69294314774_052023-O.webp' },
    { id: 5, name: 'Reloj deportivo', description: 'Resistente al agua', price: 149900, image: 'https://m.media-amazon.com/images/I/71G1E7JuTWS.jpg' },
    { id: 6, name: 'Bolso de cuero', description: 'Diseño moderno y práctico', price: 129900, image: 'https://latiendadelcuero.com/wp-content/uploads/2018/02/1047-Bolso-cuero-hombre.jpg' },
    { id: 7, name: 'Sombrero de ala ancha', description: 'Estilo casual', price: 59900, image: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/125065269_01/w=800,h=800,fit=pad' },
    { id: 8, name: 'Cinturón de cuero', description: 'Tamaño ajustable', price: 49900, image: 'https://www.cueroshazard.com/wp-content/uploads/Correa-Cuero-Negro-Sport-768x768.jpg' },
    { id: 9, name: 'Lentes de sol', description: 'Protección UV', price: 109900, image: 'https://media.istockphoto.com/id/1417602445/es/foto/gafas-de-sol-en-color-dorado-brillante-en-pl%C3%A1stico-transparente-vista-superior-de-gafas-con.jpg?s=612x612&w=0&k=20&c=yVgEqYszSjy3TFuigVrATDF9z1lQD6JAKfv6sovDWus=' },
  ];

  const handleAddToCart = (product: any) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (productId: number) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleCartToggle = () => {
    setShowCart(!showCart);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const calculateTotal = () => {
    return cart.reduce((acc, product) => acc + product.price, 0).toLocaleString('es-CO');
  };

  return (
    <main className="p-5 bg-gradient-to-r from-black via-gray-900 to-red-700 text-white">
      
      <div className="flex items-center justify-between mb-5">
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihIHyntO7bZI0q9KzylcWjKVsYJeR1n3TZPr8_KQgY5Xvo8q5VdcIxSGaV8qzYHGAHQHW-Yy15EhW43tGox2j3MNbG_5NSmKNLjS8o7wM9Ne8-UTJeFaT8siooZUv4SGhg0Jf3tWMWbPCdRLEBU0kVkmbPuPGp1Q2kZciorlK_DkkKoQ9R-ft_LXZq52xA/s1024/logo%20marketcam.jpg" 
          alt="Marketcam Logo"
          className="w-40 h-40" 
        />
        <h1 className="font-extrabold text-5xl tracking-wide text-white italic">
          Marketcam
        </h1>
        <div className="flex flex-col">
          <div className="relative">
            <button
              className="bg-red-600 text-white py-2 px-4 rounded-md mb-2 hover:bg-red-800"
              onClick={handleCartToggle}
            >
              Carrito de Compras ({cart.length})
            </button>
            {showCart && (
              <div className="absolute top-full right-0 bg-gray-900 text-white rounded-lg shadow-lg mt-2 w-64 p-4">
                <h2 className="text-2xl font-bold mb-5">Carrito de Compras</h2>
                <ul>
                  {cart.length > 0 ? (
                    cart.map((item, index) => (
                      <li key={index} className="mb-4 flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold text-lg">{item.name}</h3>
                          <p className="text-gray-400">${item.price.toLocaleString('es-CO')} COP</p>
                        </div>
                        <button
                          className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-800"
                          onClick={() => handleRemoveFromCart(item.id)}
                        >
                          Eliminar
                        </button>
                      </li>
                    ))
                  ) : (
                    <p>No hay productos en el carrito.</p>
                  )}
                </ul>
                <div className="mt-5 flex justify-between items-center">
                  <h3 className="font-semibold text-lg">Total: ${calculateTotal()} COP</h3>
                  <div className="flex gap-4">
                    <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-800">
                      Finalizar Compra
                    </button>
                    <button
                      className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-800"
                      onClick={() => setShowCart(false)}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="flex items-center mt-2">
            <input
              type="text"
              placeholder="Buscar productos..."
              className="w-80 p-2 rounded-md shadow-sm border-2 border-white focus:border-red-500 focus:outline-none bg-gray-800 text-white"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <img
              src="https://png.pngtree.com/png-vector/20210520/ourmid/pngtree-flat-search-icon-vector-png-image_3309856.jpg"
              alt="Buscar"
              className="w-6 h-6 ml-2 cursor-pointer"
              onClick={() => handleSearch(searchTerm)}
            />
          </div>
        </div>
      </div>

      <h2 className="font-bold text-4xl mb-5">Bienvenido a Marketcam</h2>
      <p className="mb-8">
        Ofrecemos una selección exclusiva de productos de excelente calidad para satisfacer tus necesidades.
      </p>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="flex flex-col items-center text-center bg-gray-800 p-4 rounded-lg shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-60 h-60 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300"
              />
              <h2 className="text-xl font-semibold mb-2 text-red-500">{product.name}</h2>
              <p className="text-gray-300 mb-2">{product.description}</p>
              <p className="text-lg font-bold mb-4">${product.price.toLocaleString('es-CO')} COP</p>
              <button
                className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-800"
                onClick={() => handleAddToCart(product)}
              >
                Agregar al Carrito
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-lg">No se encontraron productos.</p>
        )}
      </section>
    </main>
  );
}
