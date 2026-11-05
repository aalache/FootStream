"use client";
import { useEffect, useState } from "react";
import CategoryCard from "@/components/CategoryCard";
import ChannelCard from "@/components/ChannelCard";
import { useChannels } from "@/context/ChannelsContext";
import { useCategories } from "@/hooks/useCategories";
import { useCategoryChannels } from "@/hooks/useCategoryChannels";

const CategoriesPage = () => {
  const { setChannelsList, setSelectedStream, selectedStream } = useChannels();

  const [categoryId, setCategoryId] = useState("");

  // Fetch Categories
  const {
    data: categories = [],
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useCategories();

  console.log("categories: ", categories);

  // Select first Category automatically
  useEffect(() => {
    if (!categoryId && categories.length > 0) {
      setCategoryId(categories[0].category_id);
    }
  }, [categories, categoryId]);

  // Fetch Category Channels
  const {
    data: channels = [],
    isLoading: channelsLoading,
    isError: channelsError,
  } = useCategoryChannels(categoryId);

  // Synchronize context
  // useEffect(() => {
  //   setChannelsList(channels);
  // }, []);

  return (
    <main className="relative h-screen overflow-y-scroll scrollbar-none px-12 w-full grid grid-cols-10">
      {/* Categories Sidebar */}
      <div className="h-screen sticky inset-0 overflow-y-scroll scrollbar-none col-span-3 pt-20 pb-5  pr-5 border-r-[2.5px] border-slate-800/10 space-y-5">
        <h1 className="text-xl font-bold">Categories</h1>
        {categoriesLoading ? (
          <div>
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-neon-green mx-auto"></div>
            <p className="text-sm text-neon-green text-center w-ful p-3 ">
              Loading channels...
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {categories?.map((category) => (
              <CategoryCard
                key={category.category_id}
                name={category.category_name}
                category_id={category.category_id}
                isSelected={category.category_id === categoryId}
                setCategoryId={setCategoryId}
              />
            ))}
          </div>
        )}
      </div>

      {/* Channels List */}
      <div className="col-span-7 pt-20 pb-8 pl-12 space-y-5 ">
        <h1 className="text-xl font-bold">Channels</h1>

        <div className="space-y-2">
          {/* <h1>{categoryId || 'Select a category'}</h1> */}

          {channelsLoading ? (
            <div>
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-neon-green mx-auto"></div>
              <p className="text-sm text-neon-green text-center w-ful p-3 ">
                Loading channels...
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {channels &&
                channels.map((channel) => (
                  <ChannelCard
                    key={channel.stream_id}
                    channel={channel}
                    selectedChannel={selectedStream}
                    setSelectedChannel={setSelectedStream}
                  />
                ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default CategoriesPage;
