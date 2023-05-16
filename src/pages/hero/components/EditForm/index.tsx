import { Hero } from "../../../../types";
import { ChangeEvent, FormEvent, useState } from "react";
import { EditFormValues } from "../../types";

interface EditFormProps {
  hero: Hero
  onSubmit: (formValues: EditFormValues) => void
}

export const EditForm = ({ hero, onSubmit }: EditFormProps) => {
  const [formValues, setFormValues] = useState<EditFormValues>({
    oldName: hero.name,
    name: hero.name,
    height: hero.height,
    gender: hero.gender,
    hair_color: hero.hair_color
  })

  const onSaveValue = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const onSubmitForm = (e: FormEvent) => {
    e.preventDefault()
    onSubmit(formValues)
  }

  return (
    <div>
      <h1 className='text-3xl text-center mb-10'>Edit Mode</h1>
      <form onSubmit={onSubmitForm}>
        <div className='flex flex-col items-center gap-2'>
          <label>
            Name: <input
            type="text"
            name='name'
            placeholder='Name'
            onChange={onSaveValue}
            className='border border-gray-400 p-1'
            value={formValues.name}
          />
          </label>
          <label>
            Height: <input
            type="text"
            name='height'
            placeholder='Height'
            onChange={onSaveValue}
            className='border border-gray-400 p-1'
            value={formValues.height}
          />
          </label>
          <label>
            Gender: <input
            type="text"
            name='gender'
            placeholder='Gender'
            onChange={onSaveValue}
            className='border border-gray-400 p-1'
            value={formValues.gender}
          />
          </label>
          <label>
            Hair Color: <input
            type="text"
            name='hair_color'
            placeholder='Hair Color'
            onChange={onSaveValue}
            className='border border-gray-400 p-1'
            value={formValues.hair_color}
          />
          </label>
          <button
            className='px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm'
            type='submit'
            disabled={!formValues}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}
