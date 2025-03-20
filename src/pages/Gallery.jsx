import React, { useEffect } from 'react'

import './gallery.css'
import { allgalleryimage } from '../../data'

const Gallery = () => {

  
  return (
    <>
    {/* first section */}
       <section className="gallery-section">
                <div className="mygallery-container">
                  <div className='gallery-content-one'>
                    <div className='gallery-content' >
                
                    
                   
                    <h1>GALLERY</h1>
                    
                  
                    </div>
                 
    
                  </div>
                  <div className="gallery-image" >
                  
                  </div>
              
                </div>
               
            </section>
 
      {/* pictures gallery section */}     
 
 
      <section className='gallery-picture'>
      <div className='gallery-component-container'>
      <div className='yuppy'>
      <div className='line12'></div>
      <h1>Gallery</h1>

      </div>


      <div className='gallery-component-pictures'>
      
            {allgalleryimage.map((images) =>{
              const {id,all} = images;
              return(
                <>
                  <div key={id}>
                  <img src={all}/>

                  </div>
                </>
              )
            })}
    
      

      </div>

      </div>

      </section>
    </>
  )
}

export default Gallery