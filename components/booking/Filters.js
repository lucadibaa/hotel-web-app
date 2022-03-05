import { SearchIcon } from '@heroicons/react/outline'

const Filters = ({ searchInput, setSearchInput, sort, setSort }) => {
    return (
        <>
            <select className="select text-sm 2xl:h-9 2xl:py-0 sm:w-24 sm:px-1" onChange={e => setSort(e.target.value)} defaultValue={sort}>
                <option className="option" value="" disabled>Sort By</option>
                <option className="option" value="recommended">Recommended</option>
                <option className="option" value="lowest">Lowest Price</option>
                <option className="option" value="highest">Highest Price</option>
            </select>

            <div className="relative text-asphalt">
                <input onChange={e => setSearchInput(e.target.value)} value={searchInput} className="border h-10 w-64 px-3 rounded text-sm focus:border-ecru focus:outline-none 2xl:h-9 sm:w-48 sm:text-xs" type="text" placeholder="Search" />
                <SearchIcon className="absolute h-5 top-0 bottom-0 m-auto right-4" />
            </div>
        </>
    )
}

export default Filters
