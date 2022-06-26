import React from 'react'
import './CSS/blog.css'
import blog from "./Images/blog-1.png";
import blog2 from "./Images/blog-2.png";
import blog3 from "./Images/blog-3.png";
import blog4 from "./Images/blog-4.png";



const Blog = () => {
  return (
    <div className='recent-blog'>
        <div className='blog'>
            <div className='blog-name'>
                <p>Recent Blogs</p>
            </div>
            <div className='first-blog'>
                <div className='blog-inside'>
                    <div className='left-blog'>
                        <div className='blog-pratice'> 
                            <p>best pratices</p>
                        </div>
                        <div className='blog-content'>
                            <p>In design active temper be uneasy. Thirty for remove plenty regard</p>
                        </div>
                        <div className='next-blog'>
                            <p>Read More</p>
                        </div>
                    </div>

                    <div className='right-blog'>
                        <img  classsName='blog-image' src={blog} />
                    </div>
                </div>
            </div>

            <div className='blog-seperate'>
                <div className='blog-hero'>
                    <div className='header-blog'>
                        <div className='blog-seperator'>
                            <div className='blog-header'>
                                <p>best pratices</p>
                            </div>
                            <div className='blog-center'> 
                                <p>Partiality on or continuing particular principles as.</p> 
                            </div>
                        </div>
                        <div className='blog-seperator-image'>
                            <img  classsName='blog-image' src={blog2} />
                        </div>
                    </div>

                    <div className='header-blog'>
                        <div className='blog-seperator'>
                            <div className='blog-header'>
                                <p>best pratices</p>
                            </div>
                            <div className='blog-center'> 
                                <p>Village did removed enjoyed explain</p> 
                            </div>
                        </div>
                        <div className='blog-seperator-image'>
                            <img  classsName='blog-image' src={blog3} />
                        </div>
                    </div>

                    <div className='header-blog'>
                        <div className='blog-seperator'>
                            <div className='blog-header'>
                                <p>best pratices</p>
                            </div>
                            <div className='blog-center'> 
                                <p>Wise busy past both park when an ye no. Nay likely her length.</p> 
                            </div>
                        </div>
                        <div className='blog-seperator-image'>
                            <img  classsName='blog-image' src={blog4} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default Blog