import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Resume.css';

// Import Images
import tridisap from '../../../../images/tridisap.jpg';
import logo_mutuo from '../../../../images/logo_mutuo.png';
import logo_bnmx from '../../../../images/logo_bnmx.png';
import logo_casa from '../../../../images/logo_casa.png';
import logo_cicm from '../../../../images/logo_cicm.png';
import logo_icaf from '../../../../images/logo_icaf.png';
import logo_imei from '../../../../images/logo_imei.jpg';
import logo_innova from '../../../../images/logo_innova.jpg';
import logo_jacobs from '../../../../images/logo_jacobs.jpg';
import logo_lfm from '../../../../images/logo_lfm.jpg';
import logo_solar from '../../../../images/logo_solar.png';
import logo_unam from '../../../../images/logo_unam.png';
import logo_imt from '../../../../images/logo_imt.png';
import logo_irent from '../../../../images/icond.png';
import logo_ama from '../../../../images/ama_logo.png'


function Resume(props, context) {
  let date = new Date();

  return (
    <div className={styles.Resume}>
      <div className={styles.title}>{'{'} <FormattedMessage id="menuResume" /> {'}'}</div>
      <div style={{fontStyle:'italic', textAlign:'center', margin: '0.1em 0 0.2em 0'}}><FormattedMessage id="clickable_logos" /></div>
      <div className={styles.header}></div>
      <div className={styles.item}>
        <div className={styles.timeline}>
          <div>
            <section className={styles.year}>
              <h3>2006</h3>
              <section>
                <ul>
                  <li><a href="http://www.lfm.edu.mx" target="_blank"><img className={styles.logo} src={logo_lfm} /></a> <FormattedMessage id="ResHighShool" /></li>
                  <li> <FormattedMessage id="ResHighShoolSpe" /></li>
                </ul>
              </section>     
            </section>
            <section className={styles.year}>
              <h3>2009</h3>
              <section>
                <h4>2009 - 2014</h4>
                <ul>
                  <li><a href="https://www.unam.mx/" target="_blank"><img className={styles.logo} src={logo_unam} /></a> <FormattedMessage id="ResUniv" /></li>
                  <li> <FormattedMessage id="ResUnivSpe" /></li>
                </ul>
              </section>
            </section>
            <section className={styles.year}>
              <h3>2010</h3>
              <section>
                <h4><FormattedMessage id="June" /> - <FormattedMessage id="September" /></h4>
                <ul>
                  <li><a href="https://imei.org.mx/" target="_blank"><img className={styles.logo} src={logo_imei} /></a> <FormattedMessage id="ResDiploIMEI" /></li>
                  <li> <FormattedMessage id="ResDiploIMEISpe" /></li>
                </ul>
              </section>
            </section>
            <section className={styles.year}>
              <h3>2011</h3>
              <section>
                <ul>
                  <li><a href="http://cicm.org.mx/" target="_blank"><img className={styles.logo} src={logo_cicm} /></a>
                    <FormattedMessage id="ResStudClubCICM" />
                  </li>
                </ul>
              </section>
            </section>
            <section className={styles.year}>
              <h3>2013</h3>
              <section>
                <ul>
                  <li><a href="http://www.innovacion.unam.mx/" target="_blank"><img className={styles.logo} src={logo_innova} /></a><FormattedMessage id="ResStageIUNAM" /> </li>
                </ul>
              </section>
              <section>
                <h4> 2013 - 2014</h4>
                <ul>
                  <li><a href="http://www.solardecathlon2014.fr/en/" target="_blank"><img className={styles.logo} src={logo_solar} /></a>
                    <FormattedMessage id="ResSolarDec" />
                    <a href="http://arquitectura.unam.mx/casa.html" target="_blank"><img className={styles.logo} src={logo_casa} /></a></li>
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
                    <FormattedMessage id="ResThesis" />
                  </li>
                </ul>
              </section>
              <section>
                <h4>2014 - 2015</h4>
                <ul>
                  <li><a href="https://www.linkedin.com/company/ica-fluor/?originalSubdomain=mx" target="_blank"><img className={styles.logo} src={logo_icaf} /></a> 
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
                  <li><a href="http://www.jacobs.com/" target="_blank"><img className={styles.logo} src={logo_jacobs} /></a> 
                    <FormattedMessage id="ResJacEng" />
                  </li>
                  <li><strong><FormattedMessage id="ResJacEngRole" /></strong></li>
                  <li><FormattedMessage id="ResJacEngDesc" /></li>
                  <li><FormattedMessage id="ResJacEngAchi" /></li>
                </ul>
              </section>
              <section>
                <h4>July</h4>
                <ul>
                  <li><a href="https://www.banamex.com/citibanamex/" target="_blank"><img className={styles.logo} src={logo_bnmx} /></a> 
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
                <h4><FormattedMessage id="September" /></h4>
                <ul>
                  <li><a href="https://mutuofinanciera.com/" target="_blank"><img className={styles.logo} src={logo_mutuo} /></a> 
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
              <section>
                <h4><FormattedMessage id="September" /> - <FormattedMessage id="ToDate" /> ({date.getMonth() + 1} / {date.getFullYear()})</h4>
                <ul>
                  <li><a href="https://www.imt-atlantique.fr/fr/" target="_blank"><img className={styles.logo} src={logo_imt} /></a> <FormattedMessage id="ResIMT" /></li>
                  <li><strong><FormattedMessage id="ResIMTSpe" /></strong></li>
                  <li><FormattedMessage id="ResIMTCours" /></li>
                </ul>
              </section>
              <section>
                <h4><FormattedMessage id="ResIMTP" /></h4>
                <ul>
                  <li><FormattedMessage id="ResIMTP1" /></li>
                </ul>
              </section>
            </section>
            <section className={styles.year}>
              <h3>2019</h3>
              <section>
                <h4><FormattedMessage id="ResIMTP" /></h4>
                <ul>
                  <li><FormattedMessage id="ResIMTP2" /></li>
                </ul>
              </section>
              <section>
                <h4><FormattedMessage id="ResIMTP" /></h4>
                <ul>
                  <li><FormattedMessage id="ResIMTP3" /></li>
                </ul>
              </section>
              <section>
                <h4><FormattedMessage id="ResIMTP" /></h4>
                <ul>
                  <li><FormattedMessage id="ResIMTP4" /></li>
                </ul>
              </section>
              <section>
                <h4><FormattedMessage id="January" /> - <FormattedMessage id="ToDate" /> (FullStack)</h4>
                <ul>
                  <li><a href="https://www.irent.haus" target="_blank"><img className={styles.logo} src={logo_irent} /></a>IRent Haus: <FormattedMessage id="ResIRH" /></li>
                  <li><strong><FormattedMessage id="ResIRHRole" /></strong></li>
                  <li><FormattedMessage id="ResIRHDesc" /></li>
                </ul>
              </section>
              <section>
                <h4><FormattedMessage id="June" /></h4>
                <ul>
                  <li><a href="https://www.imt.fr/en/education/imt-disruptcampus/challenge-imt/" target="_blank"><img className={styles.logo} src={logo_imt} /></a> <FormattedMessage id="ResIMTCHLG" /></li>
                  <li><strong><FormattedMessage id="ResIMTCHLGRole" /></strong></li>
                  <li><FormattedMessage id="ResIMTCHLGDesc" /></li>
                </ul>
              </section>
              <section>
                <h4><FormattedMessage id="June" /> - <FormattedMessage id="September" /></h4>
                <ul>
                  <li><a href="https://www.imt-atlantique.fr/fr/" target="_blank"><img className={styles.logo} src={logo_imt} /></a> <FormattedMessage id="ResIMT" /></li>
                  <li><strong><FormattedMessage id="ResIMTRole" /></strong></li>
                  <li><FormattedMessage id="ResIMTDesc" /></li>
                </ul>
              </section>
            </section>
            <section className={styles.year}>
              <h3>2020</h3>
              <section>
                <h4><FormattedMessage id="ResIMTP" /></h4>
                <ul>
                  <li><FormattedMessage id="ResIMTP5" /></li>
                </ul>
              </section>
              <section>
                <h4><FormattedMessage id="September" /> - <FormattedMessage id="ToDate" /> ({date.getMonth() + 1} / {date.getFullYear()})</h4>
                <ul>
                  <li><a href="https://amadeus.com/" target="_blank"><img style={{verticalAlign: 'middle', width: '60px'}} src={logo_ama} /></a> <FormattedMessage id="ResAMA" /></li>
                  <li><strong><FormattedMessage id="ResAMARole" /></strong></li>
                  <li><FormattedMessage id="ResAMADesc" /></li>
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
