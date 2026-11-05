"use client";
import { useQuery } from "@tanstack/react-query";

async function fetchCategories(): Promise<Category[]> {
  const response = await fetch("/api/iptv?type=categories");

  if (!response) {
    throw new Error("Failed to fetch categories !");
  }

  const categories = response.json();

  if (!Array.isArray(categories)) {
    throw new Error("Invalid data response format");
  }
  console.log("hook categories : ", categories);

  return categories;
}

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
}
