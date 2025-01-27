import React from 'react'
import Blog from './Blog'
import blog1 from '../assets/Images/blog1.jpg'
import blog2 from '../assets/Images/blog2.jpg'
import blog3 from '../assets/Images/blog3.jpg'

const data = [
  {
    date: 'November 25,2024',
    place: 'Ravet',
    country: 'India',
    imgpath: blog1,
    blogname: 'Unique products that will impress your home in 2024.',
  },
  {
    date: 'December 16,2024',
    place: 'Los Angeles',
    country: 'California',
    imgpath: blog2,
    blogname: 'Navy Blue & White Striped Area Rugs',
  },
  {
    date: 'january 6,2025',
    place: 'Alagose',
    country: 'Brazil',
    imgpath: blog3,
    blogname: 'Harisons White Coated Staircase Floating',
  },
]
export default function Blogs() {
  return (
    <div className="h-auto mx-auto container mt-12 ">
      <div className="headline  h-auto flex justify-between mb-12 ">
        <span className="text-4xl">Explore our blogs</span>
        <span className="text-2xl">view all →</span>
      </div>
      <div className="cards flex gap-4 justify-center">
        {data.map((ele, index) => {
          return <Blog data={ele} />
        })}
      </div>
    </div>
  )
}
