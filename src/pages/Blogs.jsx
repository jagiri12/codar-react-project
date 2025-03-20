import React, { useEffect, useState } from 'react'
import './blogsdetails.css'
import './blogs.css'

import { allblogsdata } from '../../data'
import { BsPeople } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import  { allPost} from '../../data';
import { allFeed } from '../../data';


const Blogs = () => {

  
  return (
<>
<section className="blogs-section">
                <div className="blogs-container">
                  <div className='blogs-content-one'>
                    <div className='blogs-content'>
                  
                    
                   
                    <h1>Blogs</h1>
                    
                  
                    </div>
                 
    
                  </div>
                  <div className="blogs-image" >
                  
                  </div>
              
                </div>
               
            </section>


        <section className='blogs-component-section'>
        <div className='blogs-allwrapper'>
        <div className='blogs-component-container'>
        {allblogsdata.map((blogs) =>{
            const{id,blog,para,text}= blogs
            return(
                <>
                <div className='blogs-component-display'>
                    <div className='blogs-component' key={id}>
                    <img src={blog}/>
                    <div className='blogs-component-content' key={id}>
                    <h1>{text}</h1>
                    <p>{para}</p>
                    <div className='blogs-icons-link'>
                    <div className='blogs-icons1'>
                    <BsPeople />
                    <span>Travel,Lifestyle</span>
                    </div>

                    <div className='blogs-icons1'>
                    <FaRegComment />
                <span>Travel,Lifestyle</span>
                    </div>

                    </div>
                    {/* <div className='overlay'>
                    <p>15<br/>Jan</p>

                    </div> */}
                   

                    </div>

                    </div>
                    <div className='overlay'>
                    <p>15<br/>Jan</p>

                    </div> 


                 
                    </div>
                
                
                </>
            )
        })}
       
     
        </div>

        <div className='blogs-component2'>
                   
                   <div className='blogs-component2-container'>
                 <div className='blog-search-button'>
                 <input placeholder='Search'/>
                <div className='blog-button'>
                <button>Search</button>

                </div>

                 </div>

                 <div className='blog-search-list'>
                 <div className='bloglist-category' >
                 <h1>Category</h1>
              <div className='bloglist-line'></div>
                 <div className='bloglist-content'>
                 <p>Resturant food</p>
                 <p>Travel news</p>
                 <p>Modern technology</p>
                 <p>Product</p>
                 <p>Inspiration</p>
                <p>Health Care</p>
                 </div>
                

                 </div>
               
               

                 </div>
                 <div className='bloglist-content2'>
 
   <div className='bloglist-content2-content'>
   <h1>Recent Posts</h1>
{allPost.map((posts)=>{
   const{id , post,text,date} = posts;
   return(
    <>
      <div key={id} className='blogs-feeds'>
      <img src={post}/>
      <div className='blogs-feeds-content'>
      <p className='blogs-para'>{text}</p>
      <p className='blogs-date'>{date}</p>
      </div>
     
      </div>
    </>
   )
})}
   </div>
                 </div>

                 <div className='bloglist-content2-insta-feed'>
 
   <div className='bloglist-content2-content-insta-feed12'>
   <h1>Instagram Feeds</h1>
   <div className='bloglist-content2-insta-flex'>
   {allFeed.map((instaimg)=>{
   const{id,insta} = instaimg;
   return(
    <>
      <div key={id} className='blogs-feeds-insta-feed'>
      <img src={insta}/>
      
     
      </div>
    </>
   )
})}

   </div>

   </div>
                 </div>


                 <div className='newsletter'>
 
 <div className='bloglist-content2-content-insta-feed'>
 <h1>NewsLetter</h1>
 <div className='newsletter'>
 <input placeholder='Newletter'/>

 <div className='newsletter-button'> 
  <button>Subscribe</button>
 </div>

 </div>

 </div>
               </div>
                  

                   </div>

                   </div>


        </div>
       
                   
        </section>
</>
  )
}

export default Blogs