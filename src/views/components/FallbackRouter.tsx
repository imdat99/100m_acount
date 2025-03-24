
const FallbackRouter = () => {
    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="text-center flex flex-col">
                <div className="m-auto animate-spin rounded-full h-16 w-16 border-r-4 border-blue-400"></div>
                <p className="mt-4 text-gray-600 m-auto">Loading, please wait...</p>
            </div>
        </div>
    )
}

export default FallbackRouter