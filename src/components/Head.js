import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_SUGGESTION_API } from '../utils/constant'
import { cacheResult } from '../utils/searchSlice'

const Head = () => {
    const dispatch = useDispatch()
    const [searchQuery, setSearchQuery] = useState("")
    const [suggestion, setSuggestion] = useState([])
    const [showSuggestion, setShowSuggestion] = useState(false)
    const searchCache = useSelector(state => state.search)

    const toggleSideBar = () => {
        dispatch(toggleMenu())
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestion(searchCache[searchQuery]);
            } else {
                youtubeSearchSuggestion();
            }
        }, 200)

        return () => {
            clearTimeout(timer)
        }
    }, [searchQuery])

    const youtubeSearchSuggestion = async () => {
        const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery)
        const jsonData = await data.json()
        setSuggestion(jsonData[1]);
        dispatch(cacheResult({
            [searchQuery]: jsonData[1]
        }))
    }
    return (
        <div className='grid grid-flow-col shadow-lg p-3 m-1'>
            <div className='flex col-span-1'>
                <img
                    onClick={() => toggleSideBar()}
                    className='h-6 cursor-pointer'
                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8iICGSkZIkHyEPDA3z8vIyMTEhGx40MDEeHB4jICEeHR4AAAAxMTEgHh4gHB3W1tYtKyyXlpe6uroKBQhzcnJ+fX7CwsKysrJmZWX19fXk5OQYFhc5ODgoJidta2xUVFRfXV7Kysqsq6yjo6MHDa+eAAAB8UlEQVR4nO3c3VLaQBgGYJY/IQtE1Iogrfbn/q+xCaQ2TqtFm222+jwHDC8MMO8EdjnY+QYDAAAAAAAAAAAAAAAAeI/OL4Z5uDhP0m+yXYwzcbX4cJug4d045GN8Pem84GYd+67VUq6/dN7wou9Sjy1u0jQcjUZ9V2skaHhZfUuLbBrGYtN5w8F2HLNpGFOsNIPddlo3XGUgTK9T7BbVFzWbHX+zS1IQAAAAAAAAAABeZJKHVPXO76dHs9msul1OH+JfpOmr0ufuz15Wbhb78uzBvJzPWym2U/XU6Sk+lc6eTnEfv3Zf8PZjeTib2AihnYpwOJl5Qhp1kULY33d/1Pvbp9XTDcO/bhjGl503HD5uUX/Mn1PxTPr964pTUkhygra+hj9U16V10LS6+/pUtFLxTAo/00GCa1j/DhtFDw2Lxw1T/A7rtTRWS+ZhES2rdS3O22lep/qBX1LZSmetFI+pfvzk1HximrW03g9ns4edadboIy2XafbDWt9/Zhqp6gEAAAAAAAAAwAu89Zl7u+00xFXse2ZiLdHcxO24PLx7DpLMvrxcHy9f3+WOUswvHYZVRg2TTNktqnqjTCa0Jmm4WZcZNUwxC3pwd5VPwyLJlN3JdnHV9zD2RqKZ7G9/rj4AAAAAAAAAAAAAAAD8T74DVhZG6MsBqOQAAAAASUVORK5CYII=' alt='menu' />
                <a href='/'>
                    <img className='h-6 mx-1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJcB9pegOCtXuzrXjwxMB6Wln1D0vvUa3DlgtyPn7GROsP0g9KhE-KLvFLA4lFp7_B0Co&usqp=CAU' alt='youtube logo' />
                </a>
            </div>
            <div className='col-span-10'>
                <div>
                    <input
                        onChange={(e) => setSearchQuery(e.target.value)}
                        type="text"
                        className='px-5 w-1/2 border border-gray-400 rounded-l-full'
                        onBlur={() => setShowSuggestion(false)}
                        onFocus={() => setShowSuggestion(true)}
                    />
                    <button className='px-1 rounded-r-full border border-gray-400'> Search </button>
                </div>
                {showSuggestion && (<div className='fixed bg-white py-2 px-2 w-[28rem] shadow-lg rounded-lg border'>
                    <ul>
                        {suggestion.map((sugges, index) => <li key={index} className='py-2 px-3 shadow-sm hover:bg-gray-100'>{sugges}</li>)}
                    </ul>
                </div>)}
            </div>
            <div className='col-span-1'>
                <img className='h-6' alt='user icon' src='data:image/jpeg;base64,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' />
            </div>
        </div>
    )
}

export default Head