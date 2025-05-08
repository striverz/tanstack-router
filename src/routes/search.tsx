import { createFileRoute } from "@tanstack/react-router";

type searchItems = {
  query: string;
  hasDiscount: boolean;
  categories: Category[];
};

type Category = "Electronics" | "Clothing" | "Automobile";
export const Route = createFileRoute("/search")({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>): searchItems => {
    return {
      query: search.query as string,
      hasDiscount: search.hasDiscount === "true",
      categories: (search.categories as string).split(",") as Category[],
    };
  },
});

function RouteComponent() {
  const { query, hasDiscount, categories } = Route.useSearch();

  return (
    <div>
      <li>{query}</li>
      <li className="text-black">{hasDiscount}</li>
      <li>{categories}</li>
    </div>
  );
}
