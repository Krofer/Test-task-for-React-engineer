import { Link, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { changeHeroActionCreator, getHeroes } from "../../store/heroes";
import { API_URL } from "../../constants";
import { Loader } from "../../components";
import { EditForm } from "./components/EditForm";
import { Hero } from "./components/Hero";
import { EditFormValues } from "./types";

export const HeroPage = () => {
  const dispatch = useAppDispatch()
  const { name } = useParams<{ name: string }>();
  const { heroes, loading } = useAppSelector((state) => state.heroes);
  const [editMode, setEditMode] = useState(false)

  const onSubmitForm = useCallback((formValues: EditFormValues) => {
    dispatch(changeHeroActionCreator(formValues))
    setEditMode(false)
  }, [dispatch])

  useEffect(() => {
    dispatch(getHeroes(`${API_URL}/people/?search=${name}`))
  }, [dispatch, name])

  if (loading === 'succeeded' && (!heroes || heroes.length === 0)) {
    return <>Hero not found</>
  }

  const hero = heroes[0]

  return (
    <div className="container mx-auto">
      {loading === 'pending' && <Loader/>}
      {
        !!hero && (
          <div>
            {
              !editMode && (
                <div className='flex flex-col items-center gap-2'>
                  <Hero hero={hero}/>
                  {
                    // TODO: вынести в компонент
                  }
                  <button
                    className='px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm'
                    onClick={() => setEditMode(true)}
                  >
                    Go to Edit Mode
                  </button>
                </div>
              )
            }
            {
              editMode && (
                <EditForm hero={hero} onSubmit={onSubmitForm} />
              )
            }
            <br/>
            <div className='text-center'>
              <Link to='/'>Go to main page</Link>
            </div>
          </div>
        )
      }
    </div>
  )
}
