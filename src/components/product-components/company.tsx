import React from 'react'
import Image from 'next/image'

const Company = () => {
  return (
    <div>
    <div className="flex justify-center items-center mt-6">
          <Image
            src={"/companies.png"}
            alt="companies"
            width={1054}
            height={175}
            className="w-full max-w-[90%] sm:max-w-[1054px] h-auto"
          />
        </div>
    </div>
  )
}

export default Company