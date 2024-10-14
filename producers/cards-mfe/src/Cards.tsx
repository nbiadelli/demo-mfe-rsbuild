import { useEffect, useState } from 'react';
import { fetchData } from './api/fetchData';
import type { Product } from './models/products';
import Card from './Card';

export default function Cards() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const result = await fetchData<Product[]>(
        'https://dummyjson.com/products',
        (x) => x.products,
      );
      setProducts(result);
    };
    fetch();
  }, []);

  return (
    <div className="container mx-auto p-1 lg:p-4">
      <div className="mx-auto w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
        {products.length ? (
          products.map((x) => <Card key={x.id} {...x}></Card>)
        ) : (
          <p className="flex justify-center">
            <span className="loading loading-dots loading-lg"></span>
          </p>
        )}
      </div>
    </div>
  );
}
