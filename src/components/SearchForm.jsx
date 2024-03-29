import { useAppContext } from '../context'

const SearchForm = () => {
  const { setSearchValue } = useAppContext()

  const handleSubmit = (e) => {
    e.preventDefault()

    const searchValue = e.target.elements.search.value

    if (!searchValue) return

    setSearchValue(searchValue)
  }

  return (
    <div className="w-full  flex flex-col gap-8  items-center justify-center mb-20">
      <h1 className="text-3xl lg:text-5xl text-blue-400 font-bold tracking-wider">
        Unsplash Images
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full px-8 max-w-[600px] flex justify-center gap-2"
      >
        <div className="py-1 pl-4 pr-2 w-full flex border border-slate-200 shadow-md bg-slate-200 rounded-md">
          <input
            type="text"
            className="flex-auto py-1 rounded-sm  bg-slate-200 text-slate-900 outline-none bg-transparent"
            name="search"
            placeholder="cat"
          />
          <button
            type="submit"
            className="px-4 py-1 bg-blue-400 text-slate-50 rounded-md hover:bg-blue-500 transition-colors"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  )
}
export default SearchForm
