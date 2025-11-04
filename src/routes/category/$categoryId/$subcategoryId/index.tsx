import { getProducts } from "@/lib/mock";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/category/$categoryId/$subcategoryId/")({
  component: RouteComponent,
  loader: async ({ params: { subcategoryId } }) => {
    const products = await getProducts(subcategoryId);
    return { products };
  },
  pendingComponent: () => <div>products are loading...</div>,
});

function RouteComponent() {
  const { products } = Route.useLoaderData();

  return (
    <div className="space-y-3">
      <h2 className="heading">Products:</h2>
      <div className="list">
        {products.map((product) => (
          <Link
            className="card"
            activeProps={{
              className: "bg-gray-200",
            }}
            from="/category/$categoryId/$subcategoryId"
            to="/category/$categoryId/$subcategoryId/$productId"
            params={{
              productId: product.id.toString(),
            }}
            hash="product-details"
            key={product.id}
          >
            <p className="title">{product.name}</p>
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
