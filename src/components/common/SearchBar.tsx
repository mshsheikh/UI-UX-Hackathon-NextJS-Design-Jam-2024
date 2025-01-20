import { useState } from "react";
import { PRODUCTS, Product } from "@/lib/constants";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(PRODUCTS);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = PRODUCTS.filter(
      (product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="relative w-full max-w-[100%]">
      <form
        onSubmit={handleSearchSubmit}
        className="relative flex items-center w-full bg-white p-2 shadow-lg rounded-md"
      >
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-2 pl-3 pr-10 rounded-md border border-[#b88e2f] focus:outline-none focus:ring-2 focus:ring-[#b88e2f] text-sm"
        />
        <button
          type="submit"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 rounded-full bg-[#b88e2f] hover:bg-[#a07d24] transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l7-7-7-7"
            />
          </svg>
        </button>
      </form>

      {searchQuery && (
        <div className="absolute w-full bg-white shadow-lg rounded-md mt-2 z-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product: Product) => (
              <div key={product.id} className="p-2 border-b">
                <div className="flex items-center">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <div className="ml-3">
                    <div className="font-semibold">{product.title}</div>
                    <div className="text-sm text-gray-500">
                      {product.description}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-2 text-gray-500">No products found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
