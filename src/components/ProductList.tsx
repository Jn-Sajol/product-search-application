export default function ProductList({ products, loading }: { products: {id: string,name: string}[]; loading: boolean }) {

  
    return (
      <div className="mt-4">
        {loading ? <p>Loading...</p> : null}
        {products.length === 0 && !loading ? <p>No products found.</p> : null}
        <ul>
          {products.map((product) => (
            <li key={product.id} className="p-2 border-b">
              {product.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  