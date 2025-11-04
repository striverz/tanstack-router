import { getCategories } from "@/lib/mock";
import { Link, Outlet } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/category/")({
  component: RouteComponent,
  loader: async () => {
    const categories = await getCategories();
    return { categories };
  },
  pendingComponent: () => <div>Loading categories...</div>,
  errorComponent: () => <div>Error...</div>,
});

function RouteComponent() {
  const { categories } = Route.useLoaderData();
  return (
    <div className="space-y-3">
      <h2 className="heading">Categories:</h2>
      <div className="list">
        {categories.map((category) => (
          <Link
            className="card"
            activeProps={{
              className: "active-card",
            }}
            to="/category/$categoryId"
            params={{ categoryId: category.id }}
            key={category.id}
          >
            <p className="title">{category.name}</p>
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
