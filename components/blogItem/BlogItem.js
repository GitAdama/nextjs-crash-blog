import { useRouter } from 'next/router'


//The blog item component for a blog
function BlogItem(props) {
    const { title, image, description, details } = props

    const router = useRouter()

    //Dynamic navigation page for a blog 
    const onNavigate = () =>{
        router.push(`/${title}`)
    }
    return (
        <div className="max-w-sm mx-auto overflow-hidden runded shadow-lg my-2" >
            <img className="w-full h-60" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">{title}</div>
                <p className="text-bas text-gray-700">{description}</p>
            </div>
            <div className="text-center">
            <button onClick={onNavigate} className="px-4 py-2 my-1 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent">
                Read More...
            </button> 
            </div>
        </div >
    )
}

export default BlogItem