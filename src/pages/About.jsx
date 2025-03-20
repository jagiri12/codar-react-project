import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import accordianpicture from "../assets/accordian-picture.jpg";
import "./about.css";
import aboutdata from "../../data";
import img2 from "../assets/newcut.jpg";
import { allTestimonial } from "../../data";
import icon2 from "../assets/right-arrow.svg";
import { allimages } from "../../data";
import { services } from "../../data";
const About = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  console.log("✅ About component is rendering!");
  return (
    <>
      {/* first section */}
      
      <section className="aboutus-section">
        <div className="aboutus-container">
          <div className="aboutus-content-one">
            <div className="aboutus-content">
              <h1>ABOUT</h1>
            </div>
          </div>
          <div className="aboutus-image"></div>
        </div>
      </section>

      {/* second section */}
      <section className="abouthero-section">
        <div className="abouthero-container">
          <div className="abouthero-content-one">
            {aboutdata.map((fooditem) => {
              const { id, paragraph } = fooditem;
              return (
                <div key={id} className="abouthero-content-flex">
                  <div>
                    <img src={icon2} />
                  </div>
                  <p>{paragraph}</p>
                </div>
              );
            })}
          </div>

          <div className="abouthero-image">
            <img src={img2} alt="About Our Barbershop" />
          </div>

          <div className="abouthero-content-two">
            <div className="about-accent-line"></div>
            <h1>ABOUT OUR STORY</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available be
              the majority have suffered alteration in some form, by injected
              humour or randomised words.
            </p>

            <button className="abouthero-btn">click here</button>
          </div>
        </div>
      </section>

      {/* accorion section */}

      <div className="accordion">
        <div className="olamide1">
          <div className="about-accent-line"></div>
          <h1 className="edited"> WHAT WE DO FOR YOU </h1>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="pickme" />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{ backgroundColor: "#150303" }}
            >
              <Typography className="accordion-head" sx={{ color: "#ffffff" }}>
                <span>For Hair</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <Typography className="typohead">
                  <span>Trim your hair</span>
                  <span>
                    From <span className="currency">$50</span>
                  </span>
                </Typography>
              </div>
              <div>
                <Typography className="typohead">
                  <span>Trim your hair</span>
                  <span>
                    From <span className="currency">$50</span>
                  </span>
                </Typography>
              </div>
              <div>
                <Typography className="typohead">
                  <span>Trim your hair</span>
                  <span>
                    From <span className="currency">$50</span>
                  </span>
                </Typography>
              </div>

              <div>
                <Typography className="typohead">
                  <span>Trim your hair</span>
                  <span>
                    From <span className="currency">$50</span>
                  </span>
                </Typography>
              </div>
              <div>
                <Typography className="typohead">
                  <span>Trim your hair</span>
                  <span>
                    From <span className="currency">$50</span>
                  </span>
                </Typography>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            className="accordion-second"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="pickme" />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
              sx={{ backgroundColor: "#150303" }}
            >
              <Typography className="accordion-head" sx={{ color: "#ffffff" }}>
                <span>For Beards</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <Typography className="typohead">
                  <span>Trim your hair</span>
                  <span>
                    From <span className="currency">$50</span>
                  </span>
                </Typography>
              </div>
              <div>
                <Typography className="typohead">
                  <span>Trim your hair</span>
                  <span>
                    From <span className="currency">$50</span>
                  </span>
                </Typography>
              </div>

              <div>
                <Typography className="typohead">
                  <span>Trim your hair</span>
                  <span>
                    From <span className="currency">$50</span>
                  </span>
                </Typography>
              </div>
              <div>
                <Typography className="typohead">
                  <span>Trim your hair</span>
                  <span>
                    From <span className="currency">$50</span>
                  </span>
                </Typography>
              </div>

              <div>
                <Typography className="typohead">
                  <span>Trim your hair</span>
                  <span>
                    From <span className="currency">$50</span>
                  </span>
                </Typography>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="olamide">
          <img src={accordianpicture} />
        </div>
      </div>

      {/* third section */}
      <section className="services-section">
        <div className="services-container">
          {services.map((service) => {
            const { icon, title, description } = service;
            return (
              <>
                <div className="services-container-card">
                  <img src={icon} />
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <div className="services-overlay"></div>
                </div>
              </>
            );
          })}
        </div>
      </section>

      {/* barbing-section */}

      <section className="barbing-section">
        <div className="barbing-container">
          <Marquee autoFill={true} direction="left" speed={20}>
            {allimages.map((image) => {
              const { id, gallery } = image;
              return (
                <div key={id} className="barbing">
                  <img src={gallery} />
                </div>
              );
            })}
          </Marquee>
        </div>
      </section>

      <section className="gettoknow-section">
        <div className="gettoknow-line"></div>
        <h1>CUSTOMERS SAY ABOUT US</h1>

        <div className="gettoknow-flex-container">
          {allTestimonial.map((testimony) => {
            const { id, name, text, test } = testimony;
            return (
              <div className="gettoknow-flex" key={id}>
                <Stack spacing={1}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    className="rating"
                  />
                </Stack>
                <p className="gettoknow-paragraph"> {text}</p>
                <div className="profile">
                  <img src={test} alt={name} />
                  <p className="gettoknow">{name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default About;