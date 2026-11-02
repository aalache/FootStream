
interface CategoryCardProps {
    name: string;
    category_id: string;
    isSelected: boolean;
    setCategoryId: (categoryId: string) => void;
}

const CategoryCard = ({ name, category_id, isSelected, setCategoryId }: CategoryCardProps) => {
    const handleCategoryClick = (categoryId: string) => {
        console.log(`Category clicked: ${categoryId}`);
        setCategoryId(categoryId);
    }

    
  return (
    <div className={`px-2 py-3 group  rounded-md cursor-pointer border-gray-400/10 flex items-center justify-between ${isSelected ? 'bg-neon-green/10 ' : 'hover:bg-slate-800/40'}`}
         onClick={() => handleCategoryClick(category_id)}>
        <h2 
            className={`${isSelected ? 'text-neon-green' : 'text-slate-400 group-hover:text-neon-green'}`}
        >
            {name}
        </h2>
    </div>
  )
}

export default CategoryCard