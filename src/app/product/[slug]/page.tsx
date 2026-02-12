import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { products } from "@/lib/products";
import { ProductContent } from "@/components/product/ProductContent";

export function generateStaticParams() {
    return products.playbooks.map((product) => ({
        slug: product.slug,
    }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
    const product = products.playbooks.find((p) => p.slug === params.slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col bg-black text-white">
            <Header />

            <main className="flex-1 pt-32 pb-20">
                <ProductContent product={product} />
            </main>

            <Footer />
        </div>
    );
}
