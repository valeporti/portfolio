import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Resume.css';

// Import Images
import tridisap from '../../../../images/tridisap.jpg';

function Resume(props, context) {
  let date = new Date();

  return (
    <div className={styles.Resume}>
      <div className={styles.title}>{'{'} <FormattedMessage id="menuResume" /> {'}'}</div>
      <div className={styles.header}></div>
      <div className={styles.item}>
        <div className={styles.timeline}>
          <div>
            <section className={styles.year}>
              <h3>2006</h3>
              <section>
                <ul>
                  <li><a href="http://www.lfm.edu.mx" target="_blank"><img className={styles.logo} src='https://upload.wikimedia.org/wikipedia/commons/6/64/LogoLFMcirc.jpg' /></a> <FormattedMessage id="ResHighShool" /></li>
                  <li> <FormattedMessage id="ResHighShoolSpe" /></li>
                </ul>
              </section>     
            </section>
            <section className={styles.year}>
              <h3>2009</h3>
              <section>
                <h4>2009 - 2014</h4>
                <ul>
                  <li><a href="https://www.unam.mx/" target="_blank"><img className={styles.logo} src='http://arquitectura.unam.mx/uploads/8/1/1/0/8110907/_2634437_orig.png' /></a> <FormattedMessage id="ResUniv" /></li>
                  <li> <FormattedMessage id="ResUnivSpe" /></li>
                </ul>
              </section>
            </section>
            <section className={styles.year}>
              <h3>2010</h3>
              <section>
                <h4><FormattedMessage id="June" /> - <FormattedMessage id="September" /></h4>
                <ul>
                  <li><a href="https://imei.org.mx/" target="_blank"><img className={styles.logo} src='http://www.mundohvacr.com.mx/wp-content/uploads/2014/07/A00075883.jpg' /></a> <FormattedMessage id="ResDiploIMEI" /></li>
                  <li> <FormattedMessage id="ResDiploIMEISpe" /></li>
                </ul>
              </section>
            </section>
            <section className={styles.year}>
              <h3>2011</h3>
              <section>
                <ul>
                  <li><a href="http://cicm.org.mx/" target="_blank"><img className={styles.logo} src='http://cicm.org.mx/wp-content/themes/CICM%20copia/img/logo_vector.png' /></a>
                    <FormattedMessage id="ResStudClubCICM" />
                  </li>
                </ul>
              </section>
            </section>
            <section className={styles.year}>
              <h3>2013</h3>
              <section>
                <ul>
                  <li><a href="http://www.innovacion.unam.mx/" target="_blank"><img className={styles.logo} src='http://thawing-coast-2960.herokuapp.com/images/InnovaUNAM.jpg' /></a><FormattedMessage id="ResStageIUNAM" /> </li>
                </ul>
              </section>
              <section>
                <h4> 2013 - 2014</h4>
                <ul>
                  <li><a href="http://www.solardecathlon2014.fr/en/" target="_blank"><img className={styles.logo} src='http://blog.polylogis.fr/wp-content/uploads/2014/07/Banni%C3%A8re_sde2014.png' /></a>
                    <FormattedMessage id="ResSolarDec" />
                    <a href="http://arquitectura.unam.mx/casa.html" target="_blank"><img className={styles.logo} src='http://arquitectura.unam.mx/uploads/8/1/1/0/8110907/4548697_orig.png' /></a></li>
                  <li><strong><FormattedMessage id="ResSolarDecRole" /></strong></li>
                  <li><FormattedMessage id="ResSolarDecPrices" /></li>
                </ul>
              </section>
            </section>
            <section className={styles.year}>
              <h3>2014</h3>
              <section>
                <h4>2014 - 2015</h4>
                <ul>
                  <li><a href="https://es.calameo.com/read/0047443879e7a02232cf6" target="_blank"><img className={styles.logo} src={tridisap} /></a> 
                    <FormattedMessage id="ResSolarDecPrices" />
                  </li>
                </ul>
              </section>
              <section>
                <h4>2014 - 2015</h4>
                <ul>
                  <li><a href="https://www.linkedin.com/company/ica-fluor/?originalSubdomain=mx" target="_blank"><img className={styles.logo} src='http://www.gulfdiving.com.mx/wp-content/uploads/2017/09/ica-fluor.png' /></a> 
                    <FormattedMessage id="ResICAF" />
                  </li>
                  <li><strong><FormattedMessage id="ResICAFRole" /></strong></li>
                  <li><FormattedMessage id="ResICAFDesc" /></li>
                  <li><FormattedMessage id="ResICAFAchi" /></li>
                </ul>
              </section>
            </section>
            <section className={styles.year}>
              <h3>2016</h3>
              <section>
                <h4><FormattedMessage id="January" /></h4>
                <ul>
                  <li><a href="http://www.jacobs.com/" target="_blank"><img className={styles.logo} src='https://miningconnection.com/images/logos/jacobs_logo.jpg' /></a> 
                    <FormattedMessage id="January" />
                  </li>
                  <li><strong><FormattedMessage id="ResJacEngRole" /></strong></li>
                  <li><FormattedMessage id="ResJacEngDesc" /></li>
                  <li><FormattedMessage id="ResJacEngAchi" /></li>
                </ul>
              </section>
              <section>
                <h4>July</h4>
                <ul>
                  <li><a href="https://www.banamex.com/citibanamex/" target="_blank"><img className={styles.logo} src='https://www.banamex.com/assets/img/citibanamex-logo.png' /></a> 
                    <FormattedMessage id="ResCitiB" />
                  </li>
                  <li><strong><FormattedMessage id="ResCitiBRole" /></strong></li>
                  <li><FormattedMessage id="ResCitiBDesc" /></li>
                  <li><FormattedMessage id="ResCitiBAchi" /></li>
                </ul>
              </section>
              <section>
                <h4><FormattedMessage id="December" /></h4>
                <ul>
                  <li className={styles.certificate}><a href="https://courses.edx.org/certificates/b99704bf002e444fbf37d4497b8d695a" target="_blank">
                    <FormattedMessage id="ResDiploTUDelft" />
                  </a></li>
                  <li className={styles.certificate}><a href="https://courses.edx.org/certificates/1fe3bc4a26ef40ca84be1cca1ad877f2" target="_blank">
                    <FormattedMessage id="ResDiploHarv" />
                  </a></li>
                </ul>
              </section>
            </section>
            <section className={styles.year}>
              <h3>2017</h3>
              <section>
                <h4><FormattedMessage id="March" /></h4>
                <ul>
                  <li className={styles.certificate}><a href="https://www.freecodecamp.org/valeporti/front-end-certification" target="_blank">
                    <FormattedMessage id="ResDiploFCCFront" />
                  </a></li>
                </ul>
              </section>
              <section>
                <h4><FormattedMessage id="September" /></h4>
                <ul>
                  <li className={styles.certificate}><a href="https://certificates.saylor.org/hd2657mm" target="_blank">
                    <FormattedMessage id="ResDiploSAOpSys" />
                  </a></li>
                </ul>
              </section>
              <section>
                <h4><FormattedMessage id="September" /> - <FormattedMessage id="ToDate" /> ({date.getMonth() + 1} / {date.getFullYear()})</h4>
                <ul>
                  <li><a href="https://mutuofinanciera.com/" target="_blank"><img className={styles.logo} src='https://mutuofinanciera.com/images/Logo.jpg' /></a> 
                    <FormattedMessage id="ResMutuo" />
                  </li>
                  <li><strong><FormattedMessage id="ResMutuoRole" /></strong></li>
                  <li><FormattedMessage id="ResMutuoDesc" /></li>
                  <li><FormattedMessage id="ResMutuoAchi" /></li>
                </ul>
              </section>
              <section>
                <h4><FormattedMessage id="October" /></h4>
                <ul>
                  <li className={styles.certificate}><a href="https://certificates.saylor.org/ft456bop" target="_blank">
                    <FormattedMessage id="ResDiploSAIntroDB" />
                  </a></li>
                </ul>
              </section>
            </section>
            <section className={styles.year}>
              <h3>2018</h3>
              <section>
                <h4><FormattedMessage id="February" /></h4>
                <ul>
                  <li className={styles.certificate}><a href="https://certificates.saylor.org/yh5jzfie" target="_blank">
                    <FormattedMessage id="ResDiploSAAlgorithm" />
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
