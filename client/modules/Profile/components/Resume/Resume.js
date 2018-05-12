import React, { PropTypes } from 'react';

// Import Style
import styles from './Resume.css';

// Import Images
import tridisap from '../../../../images/tridisap.jpg';

function Resume(props, context) {
  let date = new Date();

  return (
    <div className={styles.Resume}>
      <div className={styles.title}>{'{'} Resume {'}'}</div>
      <div className={styles.header}></div>
      <div className={styles.item}>
        <div className={styles.timeline}>
          <div>
            <section className={styles.year}>
              <h3>2006</h3>
              <section>
                <ul>
                  <li><a href="http://www.lfm.edu.mx" target="_blank"><img className={styles.logo} src='https://upload.wikimedia.org/wikipedia/commons/6/64/LogoLFMcirc.jpg' /></a> Lycée Franco Mexicain (High School)</li>
                  <li> Engineering Science Specialization</li>
                </ul>
              </section>     
            </section>
            <section className={styles.year}>
              <h3>2009</h3>
              <section>
                <h4>2009 - 2014</h4>
                <ul>
                  <li><a href="https://www.unam.mx/" target="_blank"><img className={styles.logo} src='http://arquitectura.unam.mx/uploads/8/1/1/0/8110907/_2634437_orig.png' /></a> Universidad Nacional Autónoma de México - UNAM</li>
                  <li> Bachelor of Science in Civil Engineering</li>
                </ul>
              </section>
            </section>
            <section className={styles.year}>
              <h3>2010</h3>
              <section>
                <h4>June - September</h4>
                <ul>
                  <li><a href="https://imei.org.mx/" target="_blank"><img className={styles.logo} src='http://www.mundohvacr.com.mx/wp-content/uploads/2014/07/A00075883.jpg' /></a> Intelligent Building Mexican Institute - IMEI</li>
                  <li> Speciality - Intelligent & Sustainable Buildings Technology</li>
                </ul>
              </section>
            </section>
            <section className={styles.year}>
              <h3>2011</h3>
              <section>
                <ul>
                  <li><a href="http://cicm.org.mx/" target="_blank"><img className={styles.logo} src='http://cicm.org.mx/wp-content/themes/CICM%20copia/img/logo_vector.png' /></a>
                     CICM Students Club Memeber</li>
                </ul>
              </section>
            </section>
            <section className={styles.year}>
              <h3>2013</h3>
              <section>
                <ul>
                  <li><a href="http://www.innovacion.unam.mx/" target="_blank"><img className={styles.logo} src='http://thawing-coast-2960.herokuapp.com/images/InnovaUNAM.jpg' /></a> Traineeship at a InnovaUNAM (business incubator)</li>
                </ul>
              </section>
              <section>
                <h4> 2013 - 2014</h4>
                <ul>
                  <li><a href="http://www.solardecathlon2014.fr/en/" target="_blank"><img className={styles.logo} src='http://blog.polylogis.fr/wp-content/uploads/2014/07/Banni%C3%A8re_sde2014.png' /></a>
                    Solar Decathlon Europe 2014
                    <a href="http://arquitectura.unam.mx/casa.html" target="_blank"><img className={styles.logo} src='http://arquitectura.unam.mx/uploads/8/1/1/0/8110907/4548697_orig.png' /></a></li>
                  <li><strong>Leader, Civil Engineering Responsible</strong></li>
                  <li>Won 3 prices (1° Engineering, 2° Urbanism, 3° Sustainability)</li>
                </ul>
              </section>
            </section>
            <section className={styles.year}>
              <h3>2014</h3>
              <section>
                <h4>2014 - 2015</h4>
                <ul>
                  <li><a href="https://es.calameo.com/read/0047443879e7a02232cf6" target="_blank"><img className={styles.logo} src={tridisap} /></a> 
                    Author and Expositor of an article regarding my bachelor thesis ('Analysis, Design and Construction of the CASA TEAM project')
                  </li>
                </ul>
              </section>
              <section>
                <h4>2014 - 2015</h4>
                <ul>
                  <li><a href="https://www.linkedin.com/company/ica-fluor/?originalSubdomain=mx" target="_blank"><img className={styles.logo} src='http://www.gulfdiving.com.mx/wp-content/uploads/2017/09/ica-fluor.png' /></a> 
                    ICA FLUOR
                  </li>
                  <li><strong>Project Engineer</strong></li>
                  <li>Program follow up, alerts, recovery plan, management level reports, forecasts, productivity. </li>
                  <li>Follow Up Automation</li>
                </ul>
              </section>
            </section>
            <section className={styles.year}>
              <h3>2016</h3>
              <section>
                <h4>January</h4>
                <ul>
                  <li><a href="http://www.jacobs.com/" target="_blank"><img className={styles.logo} src='https://miningconnection.com/images/logos/jacobs_logo.jpg' /></a> 
                    Jacobs Engineering
                  </li>
                  <li><strong>Project Scheduler </strong></li>
                  <li>Interactive planning, Master Plan and WBS creation, program follow up, alerts, forecasts, productivity, recovery plan, management level reports, and resources graph. </li>
                  <li>Follow Up Automation</li>
                </ul>
              </section>
              <section>
                <h4>July</h4>
                <ul>
                  <li><a href="https://www.banamex.com/citibanamex/" target="_blank"><img className={styles.logo} src='https://www.banamex.com/assets/img/citibanamex-logo.png' /></a> 
                    Citi Banamex
                  </li>
                  <li><strong>Project Manager Jr. / IT Business Analyst </strong></li>
                  <li>Intermediary between business, software developers and specialists. IT BA SDLC deliverables. Data Qty & Project Controls RPA, data analysis and visualization. Requirements and solutions analysis. </li>
                  <li>Follow Up Automation</li>
                </ul>
              </section>
              <section>
                <h4>December</h4>
                <ul>
                  <li className={styles.certificate}><a href="https://courses.edx.org/certificates/b99704bf002e444fbf37d4497b8d695a" target="_blank">
                    TUDelft - TPM1x: Creative Problem Solving and Decision Making
                  </a></li>
                  <li className={styles.certificate}><a href="https://courses.edx.org/certificates/1fe3bc4a26ef40ca84be1cca1ad877f2" target="_blank">
                    Harvard - CS50: Introduction to Computer Science
                  </a></li>
                </ul>
              </section>
            </section>
            <section className={styles.year}>
              <h3>2017</h3>
              <section>
                <h4>March</h4>
                <ul>
                  <li className={styles.certificate}><a href="https://www.freecodecamp.org/valeporti/front-end-certification" target="_blank">
                    FreeCodeCamp - Front End Certification
                  </a></li>
                </ul>
              </section>
              <section>
                <h4>September</h4>
                <ul>
                  <li className={styles.certificate}><a href="https://certificates.saylor.org/hd2657mm" target="_blank">
                    Saylor Academy - CS401: Operating Systems
                  </a></li>
                </ul>
              </section>
              <section>
                <h4>September - to Date ({date.getMonth() + 1} / {date.getFullYear()})</h4>
                <ul>
                  <li><a href="https://mutuofinanciera.com/" target="_blank"><img className={styles.logo} src='https://mutuofinanciera.com/images/Logo.jpg' /></a> 
                    Mutuo Financiera
                  </li>
                  <li><strong>Software Developer </strong></li>
                  <li>Internal software development (MVC) and API, RPA for different projects (get/analyze and deduce from data) using Laravel framework mainly and VBA.</li>
                  <li>Projects Follow Up Automation, Scalability, Financial Projects</li>
                </ul>
              </section>
              <section>
                <h4>October</h4>
                <ul>
                  <li className={styles.certificate}><a href="https://certificates.saylor.org/ft456bop" target="_blank">
                    Saylor Academy - CS403: Introduction to Modern Databases
                  </a></li>
                </ul>
              </section>
            </section>
            <section className={styles.year}>
              <h3>2018</h3>
              <section>
                <h4>February</h4>
                <ul>
                  <li className={styles.certificate}><a href="https://certificates.saylor.org/yh5jzfie" target="_blank">
                    Saylor Academy - CS303: Algorithms
                  </a></li>
                </ul>
              </section>
            </section>
            <div className={styles.spacing}></div>
          </div>
        </div>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
}

Resume.propTypes = {
};

export default Resume;
