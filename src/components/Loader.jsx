import React from 'react'
import { Hourglass } from 'react-loader-spinner';
const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-900'>
    <Hourglass
        visible={true}
        height="70"
        width="70"
        colors={['#ffffff', '#a8b3c1']}
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
    </div>
  )
}

export default Loader
