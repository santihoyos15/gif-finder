import { Key, useState } from "react";
import { AddCategory } from "./components";
import { GifGrid } from "./components";

const App = () => {
  const [categories, setCategories] = useState<string[]>(['Better Call Saul'])

  const onAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) return;
    setCategories(prevCategories => [newCategory, ...prevCategories] as never)
  }

  return (
    <>
      <AddCategory onAddCategory={onAddCategory} />
      {categories.map(category => (
        <GifGrid
          key={category as Key}
          query={category} />
      ))}
    </>
  )
}

export default App
