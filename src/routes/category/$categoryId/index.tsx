import { getSubcategories } from "@/lib/mock";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/category/$categoryId/")({
  component: RouteComponent,
  loader: async ({ params: { categoryId } }) => {
    const subcategories = await getSubcategories(categoryId);
    return { subcategories };
  },
  pendingComponent: () => <div>Sub Categories loading...</div>,
});

function RouteComponent() {
  const { subcategories } = Route.useLoaderData();
  return (
    <div className="space-y-3">
      <h2 className="heading">Subcategories:</h2>
      <div className="list">
        {subcategories.map((subcategory) => (
          <Link
            className="card"
            activeProps={{
              className: "active-card",
            }}
            from="/category/$categoryId"
            to="/category/$categoryId/$subcategoryId"
            params={{ subcategoryId: subcategory.id }}
            key={subcategory.id}
          >
            <p className="title">{subcategory.name}</p>
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
