"use client";

import { useEffect, useState } from "react";
import SearchBox from "@/components/SearchBox";
import ProductList from "@/components/ProductList";
import { useQuery } from "@tanstack/react-query";
import { debounce } from "@/lib/debounce";

const getProducts = async (searchTitle: string) => {
  if (!searchTitle) return [];
  const res = await fetch(`/api/products?q=${searchTitle}`);
  return res.json();
};

export const HomePage = () => {
  const [query, setQuery] = useState<string>("");

  const { data: products = [], isLoading, refetch } = useQuery({
    queryKey: ["search_product", query],
    queryFn: () => getProducts(query),
    enabled: false,
  });

  const handleSearch =
    debounce((searchTerm: string) => {
      if (searchTerm.length > 2) refetch();
    }, 300)


  useEffect(() => {
    handleSearch(query);
  }, [query, handleSearch]);

  return (
    <main className="container mx-auto py-10 px-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Product Search</h1>
      <h1 className="text-xl font-bold mb-4">Live Product Search</h1>
      <SearchBox value={query} setValue={setQuery} isLoading={isLoading} />
      {query.length > 0 && query.length < 3 && (
        <p className="text-center text-gray-600 mb-4">Please enter at least 3 characters to search</p>
      )}

      {query.length >= 3 && !isLoading && products.length === 0 && (
        <p className="text-center text-gray-600">No products found matching &quot;{query}&quot;</p>
      )}
      <ProductList products={products} isLoading={isLoading} />
    </main>
  );
};
