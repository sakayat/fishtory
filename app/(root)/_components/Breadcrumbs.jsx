import Link from 'next/link'
import React from 'react'

const Breadcrumbs = ({title}) => {
  return (
    <div className="py-3">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-600 hover:text-black">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="font-medium lowercase">{title}</span>
          </div>
        </div>
  )
}

export default Breadcrumbs