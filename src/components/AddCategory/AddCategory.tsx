import { FormEvent, useState } from "react";

type addCategoryProps = {
  onAddCategory: Function
}

export const AddCategory = ({ onAddCategory }: addCategoryProps) => {
  const [newCategory, setNewCategory] = useState('')

  const onInputChange = ({ target }: { target: HTMLInputElement }) => {
    setNewCategory(target.value)
  }

  const onFormSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (newCategory) {
      setNewCategory('')
      onAddCategory(newCategory)
    }
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input onChange={onInputChange} value={newCategory} placeholder={'Search gifs'} />
      <button type="submit">Add Category</button>
    </form>
  )
}
