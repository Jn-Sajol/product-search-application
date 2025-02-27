import { faker } from "@faker-js/faker";
import { prisma } from "@/lib/prisma";


async function generateMockProducts(count = 100) {
  return Array.from({ length: count }, () => ({
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.number.int({ min: 10, max: 1000 }),
    image: faker.image.urlPicsumPhotos({ width: 400, height: 400 }),
    category: faker.commerce.department(),
  }));
}


async function main() {
  const MOCK_PRODUCTS = await generateMockProducts(100);

  await prisma.product.createMany({
    data: MOCK_PRODUCTS,
  });

  console.log("100 products inserted successfully!");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
