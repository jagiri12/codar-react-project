import React, { useEffect, useState } from 'react';

import './blogsdetails.css'

import commentpic1 from '../assets/author.png'
import {blogcommentpicture} from '../../data'
import { allFeed } from '../../data'
import { BsPeople } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import blog1 from '../assets/blog1.jpg'
import {allPost} from '../../data'
const BlogsDetails = () => {

    
  return (
     <>
     <section className="blogs-section">
                <div className="lasting-container">
                  <div className='lasting-content-one'>
                    <div className='lasting-content'>
                  
                    
                   
                    <h1>BlogsDetails</h1>
                    
                  
                    </div>
                 
    
                  </div>
                  <div className="lasting-image">
                  
                  </div>
              
                </div>
               
            </section>
     {/* <section className="bloggerdetails-component">
                <div className="bloggerdetails-container"  >

              
                    <h1>BlogDetails</h1>
                   
                </div>
                <div className="bloggerdetails-image"></div>
            </section> */}


               <section className='myblogdetailspage-section'>
                      <div className='myblogdetailpage-wrapper'>
                      <div className='myblogdetailpage-container1'>
                      <img src={blog1}/>
                      <div className='myblogdetailpage-container1-content'>
  <h1>Second divided from form fish beast made every of seas all gathered us  saying he our</h1>
   <div className='myblogdetailpage-icons'>
                      <div className='myblogdetailpage-icon1'>
                      <BsPeople />
                      <span>Travel,Lifestyle</span>
                      </div>
  
                      <div className='myblogdetailpage-icon1'>
                      <FaRegComment />
                  <span className=''>Travel,Lifestyle</span>
                      </div>
                     </div>
           
                      <div className='bloggergoogler'>
                        <p className='bloggergoogler'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos aut architecto, ullam error impedit doloremque tempore facere rerum reprehenderit iure eaque! Numquam hic distinctio placeat.</p>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fugiat amet quibusdam omnis sit earum, illo nisi vitae unde perferendis.</p>

</div>
        <div className='glogspadding'>
            <div className='papa'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, laboriosam, in autem consectetur incidunt necessitatibus molestiae mollitia, dolore aliquid perferendis excepturi facilis pariatur dolor eum libero quo quam commodi vero quidem itaque nam facere est?</p>
            </div>
            </div>
            <div className='bloggergoogler'>
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, molestiae? Obcaecati fugit harum iure quos quia minima corporis, magni sapiente error quae dolore ipsam at repellat? Aliquid, maxime. In ipsum excepturi suscipit fugiat nisi aliquid ullam voluptatum aspernatur, voluptate, dignissimos ducimus aut tempore dolorem ab?</p>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus beatae, mollitia dolore eaque quaerat ullam sapiente inventore laudantium sed perferendis, possimus earum quas. Enim quas perspiciatis earum, quam voluptatum sunt inventore eaque autem adipisci saepe blanditiis unde veniam ut eum.</p>
                 <br/>
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur culpa laudantium reprehenderit, non optio placeat, harum eos nemo id atque nam vel. Perferendis, cum inventore animi quis exercitationem laboriosam! Nobis!</p>

</div>

             
            
                      </div>
                      
                      <div className='blogs-comment-section1'>
                      <div className='blogs-comment-one'>
                      <p>  <FaRegHeart /> Lily and 4 people like this</p>

                      </div>
                      <div className='blogs-all-icons'>
                      <FaInstagram  className='ola'/>
                      <FaFacebook className='ola' />
                      <FaLinkedinIn className='ola'/>
                      </div>

                      </div>
                      <div className='starting-comment'>
                      <img src={commentpic1}/>
                      <div className='starting-comment-content'>
                      <h3>Menzo</h3>
                      <p>Second divided from form fish beast made. Every of seas all gathered use saying you're, he our dominion twon Second divided from</p>

                      </div>

                      </div>
                      <div className='blogs-testimonial-comment'>
                        <p>05 Comments</p>
                        {blogcommentpicture.map((bloggers) => {
        const {id, blogcomment, date, para, name} = bloggers;
         return(
            <>
            <div key={id} className='blog-testimonial-flex'>
                       <img src={blogcomment}/>
                        <div className='blog-testimonial-bio' key={id}>
                            

                             <p>{para}</p>
                     
                             <div className='allrounded-name'>
    <h3>{name}</h3>
                             <p>{date}</p> 
                       </div>
                           
  

                             </div>

                                </div>
           
                               </>
         )

                        })}
                   

                      </div>
                      <div className='blog-details-forminput'>
                      <h1>Leave a Reply </h1>
                      <form className='allform-container'>
                        <textarea  cols={100}  rows={10}placeholder=  'Write your Comment'/>
                        <div className='blog-input-form'>
                        <input placeholder=' Name'/>
                        <input placeholder=' Email'/>
                   

                        </div>
                       <div className='lastlink'>
                       <input placeholder='Message ' className='lastlink'/>
                       </div>
                     
                        <br/>
                        <button className='blog-input-submit'>Post  comment</button>
                      </form>

                      </div>
                     
                     
              
                      </div> 
              
                      <div className='blogs-component2'>
                                 
                                 <div className='blogs-component2-container'>
                               <div className='blog-search-button'>
                               <input/>
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
               
                 <div className='bloglist-content2-content-insta-feed'>
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
               <input/>
              
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

export default BlogsDetails