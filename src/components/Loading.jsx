import { useState } from 'react'
function Loading() {
    const [isLoading, setIsLoading] = useState(true)
    setIsLoading(false)

    return (
        <>
          {isLoading && <div className='flex items-center fixed inset-0 justify-center'><span className="loading loading-spinner loading-lg"></span>Loading...</div>}
        </>
    )
}
export default Loading