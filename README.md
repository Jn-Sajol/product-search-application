# Live Product Search App

This is a **full-stack product search application** built with [Next.js](https://nextjs.org), [Supabase](https://supabase.com) (PostgreSQL), [TailwindCSS](https://tailwindcss.com), and [ShadCN](https://ui.shadcn.com). It provides **real-time search functionality** with optimized API calls and a modern UI.

## 🚀 Features

✅ **Instant Search** – Fetches results after typing **3+ characters**  
✅ **Debounced API Calls** – Prevents unnecessary requests  
✅ **Optimized Queries** – Uses **PostgreSQL Full-Text Search**  
✅ **Modern UI** – Styled with **TailwindCSS & ShadCN**  

---

## 🛠 Getting Started

First, clone the repository and install dependencies:

```bash
git clone https://github.com/your-repo/live-product-search.git
cd live-product-search
npm install


npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

Open http://localhost:3000 in your browser to see the app in action.

🛠 Database Setup (Supabase)
Create a Supabase Project at https://supabase.com.


live-product-search/
│── prisma/                 
│── src/
│   ├── app/
│   │   ├── page.tsx        
│   │   ├── api/
│   │   │   ├── products/route.ts  
│   ├── components/
│   │   ├── page/           
│   │   │   ├── page.tsx    
│   │   ├── SearchBox.tsx   
│   │   ├── ProductList.tsx 
│   ├── lib/
│   │   ├── debounce.ts     
│── .env                   
│── README.md              
