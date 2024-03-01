import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentContainer'
import LiveChat from './LiveChat'

const WatchPage = () => {
  const dispatch = useDispatch()
  const [searchParam] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu())
  }, [])
  return (
    <div className='flex flex-col w-full'>
      <div className='p-5 flex w-full'>
        <div>
          <iframe
            width="570"
            height="315"
            src={`https://www.youtube.com/embed/${searchParam.get("v")}?si=ooL_MQGb2gTvfKJQ`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className=' w-full'>
          <LiveChat />
        </div>
      </div>
      <div className='p-2 m-2'>
        <CommentsContainer />
      </div>
    </div>
  )
}

export default WatchPage