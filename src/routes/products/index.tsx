import { ProductCard } from "#/components";
import { products } from "#/data/products";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

const fetchProducts = createServerFn({
  method: "GET",
}).handler(async () => {
  return products;
});

export const Route = createFileRoute("/products/")({
  component: RouteComponent,
  loader: async () => {
    return fetchProducts();
  },
});

function RouteComponent() {
  const products = Route.useLoaderData();

  return (
    <div className="space-y-6">
      <section className="mx-auto max-w-6xl space-y-4">
        <Card className="bg-white/80 p-6 shadow-md">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <CardHeader className="px-0">
                <p className="text-sm tracking-wide text-slate-500 uppercase">
                  StartShop Catalog
                </p>
                <CardTitle className="text-2xl font-semibold">
                  Products built for makers
                </CardTitle>
              </CardHeader>
              <CardDescription className="text-sm text-slate-600">
                Browse a minimal, production-flavoured catalog with TanStack
                Start server functions and typed routes.
              </CardDescription>
            </div>
          </div>
        </Card>
      </section>
      <section>
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products?.map((product, index) => (
            <ProductCard key={`product-${index}`} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
