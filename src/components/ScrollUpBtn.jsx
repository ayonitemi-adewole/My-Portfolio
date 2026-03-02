import { ChevronsUp } from 'lucide-react'
import React, { useState, useEffect } from 'react'

const ScrollUpBtn = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`fixed right-4 bottom-4 md:right-6 md:bottom-20 bg-[#4B22B5] text-white p-2 md:p-3 rounded-md hover:bg-[#4B22B5] transition z-10 ${isVisible ? 'block' : 'hidden'}`}
        >
            <ChevronsUp size={18} />
        </button>)
}

export default ScrollUpBtn
