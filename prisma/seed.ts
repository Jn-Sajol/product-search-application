import { prisma } from "@/lib/prisma";


async function main() {
  await prisma.product.createMany({
    data: [
        { name: "iPhone 14" },
        { name: "Samsung Galaxy S23 pro" },
        { name: "MacBook Pro" },
        { name: "Sony Headphones pro" },
        { name: "iPad Air pro" },
        { name: "Google Pixel 7 pro" },
        { name: "Dell XPS 15 pro" },
        { name: "Apple Watch Series 8 pro" },
        { name: "Bose QuietComfort 45 pro" },
        { name: "Nintendo Switch OLED pro" },
        { name: "Sony PlayStation 5 pro" },
        { name: "Xbox Series X pro" },
        { name: "Samsung Galaxy Tab S8 pro" },
        { name: "LG OLED C2 TV pro" },
        { name: "Razer Gaming Mouse pro" },
        { name: "JBL Bluetooth Speaker" },
        { name: "Canon EOS R5 Camera" },
        { name: "HP Spectre x360" },
        { name: "OnePlus 11" },
    ],
  });
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
