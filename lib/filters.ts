import { categoriesData } from "@/app/api/iptv/route";

export const getCategoryById = (categoryId: string) => {
  const categories = categoriesData;

  //   if (!categories || categories.length === 0) {
  //     // return null;
  //   }
  console.log("categoriesData", categoriesData);

  //   return (
  //     categories.find((category) => category.category_id === categoryId) ?? null
  //   );
};
