import { useEffect, useState } from "react";
import { useAppDispatch, useDebounce } from "../../../hooks";
import { getHeroes } from "../../../store/heroes";
import { API_URL } from "../../../constants";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useAppDispatch()

  const debouncedSearchTerm = useDebounce<string>({
    value: searchTerm,
    delay: 500
  })

  useEffect(() => {
    dispatch(getHeroes(`${API_URL}/people/?search=${debouncedSearchTerm}`))
  }, [debouncedSearchTerm])

  return <div className='mb-5 text-right'>
    <input
      type='text'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder='Write the name'
      className='border border-gray-400 p-1'
    />
  </div>
}
