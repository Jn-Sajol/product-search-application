import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image"

// Product type definition
type Product = {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
}

interface ProductListProps {
  products: Product[]
  isLoading: boolean
}

export default function ProductList({ products, isLoading }: ProductListProps) {
  // If loading, show skeleton UI
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} className="overflow-hidden">
            <Skeleton className="h-48 w-full" />
            <CardHeader className="pb-2">
              <Skeleton className="h-6 w-3/4" />
            </CardHeader>
            <CardContent className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </CardContent>
            <CardFooter>
              <Skeleton className="h-6 w-24" />
            </CardFooter>
          </Card>
        ))}
      </div>
    )
  }

  // If no products, return empty fragment
  if (products.length === 0) {
    return null
  }

  // Display products
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden flex flex-col">
          <div className="relative h-48 w-full">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>
          <CardHeader className="pb-2">
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.category}</p>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-sm line-clamp-3">{product.description}</p>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <p className="font-semibold">${product.price.toFixed(2)}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}