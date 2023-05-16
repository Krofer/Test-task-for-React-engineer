import { useAppDispatch, useAppSelector } from "../../hooks";
import { getHeroes } from "../../store/heroes";

export const Pagination = () => {
  const { heroesPagination } = useAppSelector((state) => state.heroes);
  const dispatch = useAppDispatch()

  if (!heroesPagination) {
    return <></>
  }

  const { count, next, previous } = heroesPagination

  const changePage = (url: string | null) => {
    if (!url) {
      return
    }

    dispatch(getHeroes(url))
  }

  return <div className='mt-10 flex flex-col items-center'>
    <div><b>Count of heroes</b>: {count}</div>
    <div className='mt-1 flex gap-2'>
      <button
        className={`px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm${!previous ? ' bg-zinc-600': ''}`}
        disabled={!previous}
        onClick={() => changePage(previous)}
      >
        Prev
      </button>
      <button
        className={`px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm${!next ? ' bg-zinc-600': ''}`}
        disabled={!next}
        onClick={() => changePage(next)}
      >
        Next
      </button>
    </div>
  </div>
}
