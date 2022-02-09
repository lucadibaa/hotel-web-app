import { SearchIcon } from '@heroicons/react/outline'

const Filters = () => {
    return (
        <>
            <select className="select text-sm">
                <option className="option" value="" selected disabled>Sort By</option>
                <option className="option" value="1">Recommended</option>
                <option className="option" value="2">Lowest Price</option>
                <option className="option" value="3">Highest Price</option>
            </select>

            <div className="relative text-asphalt">
                <input className="border h-10 w-64 px-3 rounded text-sm focus:border-ecru focus:outline-none" type="text" placeholder="Search" />
                <SearchIcon className="absolute h-5 top-0 bottom-0 m-auto right-4" />
            </div>
        </>
    )
}

export default Filters
