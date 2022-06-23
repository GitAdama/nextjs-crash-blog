
// The form for adding a Blog
function BlogForm() {
    return (
        <form className="w-full max-w-lg mx-auto">
            <div className="flex flex-wrap -mx-6 mb-3">
                <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" >
                    Title
                </label>
                <input className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 rounded  focus:outline-none focus:bg-white appearence-none"

                    type='text'
                    placeholder="title" />
            </div>

            <div className="flex flex-wrap -mx-6 mb-3">
                <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" >
                    Image
                </label>
                <input className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 rounded  focus:outline-none focus:bg-white appearence-none"

                    type='text'
                    placeholder="image" />
            </div>

            <div className="flex flex-wrap -mx-6 mb-3">
                <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" >
                    Description
                </label>
                <input className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 rounded  focus:outline-none focus:bg-white appearence-none"

                    type='text'
                    placeholder="description" />
            </div>

            <div className="flex flex-wrap -mx-6 mb-3">
                <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" >
                    Details
                </label>
                <input className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 rounded  focus:outline-none focus:bg-white appearence-none"

                    type='text'
                    placeholder="details" />
            </div>
            <button className="px-4 py-2 my-1 font-semibold text-red-700 bg-transparent border border-red-500 rounded hover:bg-red-500 hover:text-white hover:border-transparent">
                Submit
            </button>

        </form>
    )
}

export default BlogForm