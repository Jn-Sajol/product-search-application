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
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Live Product Search</h1>
      <SearchBox value={query} setValue={setQuery} />
      <ProductList products={products} loading={isLoading} />
    </div>
  );
};
