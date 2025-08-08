import { useCallback } from "react";
import { useSearchParams } from "next/navigation";

export function useFilterQuery() {
  const searchParams = useSearchParams();

  const updateFilters = useCallback(
    (filter: string) => {
      const params = new URLSearchParams(searchParams.toString());

      const current = params.get("filters")?.split(",").filter(Boolean) ?? [];

      const updated = current.includes(filter)
        ? current.filter((f) => f !== filter) // remove filtro
        : [...current, filter]; // adiciona filtro

      const sorted = [...updated].sort(); // ordena alfabeticamente

      sorted.length > 0
        ? params.set("filters", sorted.join(","))
        : params.delete("filters");

      return decodeURIComponent(params.toString()); // mantém vírgulas visíveis na URL
    },
    [searchParams]
  );

  return { updateFilters };
}
