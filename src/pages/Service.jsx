import React, { useEffect } from 'react'


import './service.css'
import {services} from '../../data';
import {allTestimonial } from '../../data';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
 import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import accordianpicture  from '../assets/accordian-picture.jpg'

const Service = () => {
    const [expanded, setExpanded] = React.useState(false);
  

  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
   
  return (
   <>
   {/* first section  */}
     <section className="allservices-section">
                <div className="allservices-container">
                  <div className='allservices-content-one'>
                    <div className='allservices-content'>
                  
                    
                   
                    <h1>SERVICES</h1>
                    
                  
                    </div>
                 
    
                  </div>
                  <div className="allservices-image">
                  
                  </div>
              
                </div>
               
            </section>



{/* accordion section */}
    <div className='accordion'>
    <div className='olamide1'>
    <div className='about-accent-line'></div>
      <h1 className='edited'> WHAT WE DO FOR YOU </h1>
      <Accordion  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}

      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='pickme' />}
          aria-controls="panel1bh-content"
           id="panel1bh-header"
           sx={{backgroundColor:"#150303"}}
        
        >
          <Typography className='accordion-head' sx={{color:"#ffffff"}}>
          <span>For Hair</span>
        
          
          </Typography>
       
        </AccordionSummary>
        <AccordionDetails >
        <div>
        <Typography className='typohead'>
              <span>Trim your hair</span>
              <span>From <span className='currency'>$50</span></span>
    
          </Typography>
        </div>
        <div>
        <Typography className='typohead'>
        <span>Trim your hair</span>
        <span>From <span className='currency'>$50</span></span>
          </Typography>
        </div>
              <div>
                
             <Typography className='typohead'>
             <span>Trim your hair</span>
             <span>From <span className='currency'>$50</span></span>
  
          </Typography>

              </div>
       
 <div>
 <Typography className='typohead'>
 <span>Trim your hair</span>
 <span>From <span className='currency'>$50</span></span>
          </Typography>
 </div>
          <div>
                   
        <Typography className='typohead'>
        <span>Trim your hair</span>
        <span>From <span className='currency'>$50</span></span>
          </Typography>

          </div>
     
     
     
        
    
       
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
       className='accordion-second'
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='pickme' />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          sx={{backgroundColor:"#150303"}}
        >
          <Typography className='accordion-head' sx={{color:"#ffffff"}} >
          <span>For Beards</span>
      
          </Typography>
       
        </AccordionSummary>
        <AccordionDetails>
          <div>
          <Typography className='typohead'>
          <span>Trim your hair</span>
          <span>From <span className='currency'>$50</span></span>
    
          </Typography>
            
          </div>
 <div>
 <Typography className='typohead'>
 <span>Trim your hair</span>
 <span>From <span className='currency'>$50</span></span>
    
          </Typography>
 </div>
          
               <div>
               <Typography className='typohead'>
               <span>Trim your hair</span>
               <span>From <span className='currency'>$50</span></span>
    
          </Typography>

               </div>
      <div>
      <Typography className='typohead'>
      <span>Trim your hair</span>
      <span>From <span className='currency'>$50</span></span>
    
          </Typography>
      </div>
              
     <div>
     <Typography className='typohead'>
     <span>Trim your hair</span>
     <span>From <span className='currency'>$50</span></span>
          </Typography>
     </div>
              
   
        </AccordionDetails>
      </Accordion>
   
    </div>
    <div className='olamide'>
   <img src={accordianpicture}/>
    </div>

    </div>




            {/* second-sectiom */}
              <section className='services-section'>
                            
                            
                                         <div className='services-container'>
                                 {services.map((service)=>{
                                   const {id,icon,title,description} = service
                                   return(
                                    <>
                                    <div className='services-container-card'>
                                      <img src={icon} />
                                      <h2>{title}</h2>
                                      <p>{description}</p>
                                      <div className='services-overlay'></div>
                                    </div>
                               
                                    </>
                                   )
                                 })}
                                         </div>
                                       </section> 

                          

                                  {/* third section */}
                                                        <section className='gettoknow-section'>
                                                <div className='gettoknow-line'></div>
                                              <h1>CUSTOMERS SAY ABOUT US</h1>
                                             
                                                
                                                <div className='gettoknow-flex-container'>
                                                    { allTestimonial.map((testimony) =>{
                                                     const {id,name,text,test} = testimony
                                                     return(
                                                       
                                                       <div className='gettoknow-flex' key={id}>
                                                             <Stack spacing={1}>
                                           
                                             <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} className="rating"/>
                                           </Stack>
                                                       <p className='gettoknow-paragraph'> {text}</p>
                                                       <div className='profile'>
                                                       <img src={test} alt={name}/>
                                                       <p className='gettoknow'>{name}</p>
                                       
                                                       </div>
                                       
                                                       </div>
                                                     )
                                                    })}
                                                    </div>
                                               
                                       
                                                </section>  
                                           
   </>
  )
}

export default Service