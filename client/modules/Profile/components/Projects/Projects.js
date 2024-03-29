import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Projects.css';
import Project from './Project'

// Import Images
import pm_report from '../../../../images/Projects/pm_report.png';
import p7 from '../../../../images/Projects/p7.png';
import p8 from '../../../../images/Projects/p8.png';
import cs50_final from '../../../../images/Projects/cs50_final.png';
import tic_tac_toe from '../../../../images/Projects/tic_tac_toe.png';
import who_am_i from '../../../../images/Projects/who_am_i.png';
import front_proj from '../../../../images/Projects/front_proj.png';
import data_plot from '../../../../images/Projects/data_plot.png';
import mutuo_valhalla from '../../../../images/Projects/mutuo_valhalla.png';
import logo_irent from '../../../../images/icond.png';
import exprpfx from '../../../../images/exprpfx.png';
import ship_detec from '../../../../images/ship_detect.jpg';
import logo_homebudget from '../../../../images/logo_HB.png';

function Projects(props, context) {
  return (
    <div>
      <div className={styles.Projects}>
      
        <div className={styles.on_print}>
          <br/>
          <br/>
          <h2 >Valentin Portillo - Portfolio</h2>
          <br/>
          <h4>Hello ! <i class="far fa-hand-spock" /></h4>
          <hr/>
          <h5>
            <br/>
            <p><FormattedMessage id="print_ph1" /></p>
            <p><FormattedMessage id="print_ph2" /></p>
            <p><FormattedMessage id="print_ph3_1" /> <strong><a href='https://portfolio-vp.herokuapp.com/projects'><FormattedMessage id="print_ph3_2" /> <i className="fas fa-rocket" /></a></strong> <FormattedMessage id="print_ph3_3" /> {/* <i>(<FormattedMessage id="print_ph3_4" />)</i> */}</p>
            <p><FormattedMessage id="print_ph4" /> <i className="far fa-handshake" />.</p>
          </h5>
          <br/>
          <hr/>
          <br/>
        </div>

        <div className={`${styles.title} ${styles.no_print}`}>{'{'} <FormattedMessage id="menuProjects" /> {'}'}</div>

        {/* Nico Deco */}
        <div className={styles.project_display}>
          <a href="https://homedecobudget.herokuapp.com/" target="_blank">
            <div className={styles.project_alert}>
              <div className={styles.project_status}>
                <div className={styles.project_status_icon_pos}>
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className={styles.project_status_text}>
                  <FormattedMessage id="project_cs50p8_status" />
                </div>
              </div>
            </div>
          </a>
          <div className={styles.project_content}>
            <div className={styles.project_title}>
              {'{'} <FormattedMessage id="ResND" /> {'}'}
            </div>
            <div className={styles.project_photo} >
              <img className={styles.project_photo} style={{ width: '7em' }} src={logo_homebudget} />
            </div>
            <div className={styles.technologies}>
              <i className="fas fa-flask"></i> Mongo, React/Redux, NextJS + ExpressJS
            </div>
            <div className={styles.worked_as}>
              <i className="far fa-address-card"></i> <FormattedMessage id="ResNDRole" />
            </div>
            <div className={styles.context}>
              <i className="fas fa-briefcase"></i> Interior Design
            </div>
            <div className={styles.description}>
              <i className="fas fa-comment"></i> <FormattedMessage id="project_homebudget_description" />
            </div>
          </div>
        </div>

        {/* DS Projects */}
        <Project is_available all_is_link={false} status='project_datavis_status' 
          id_title='project_ds_multiple_title' id_role='project_ds_multiple_role' 
          id_description='project_ds_multiple_description' id_context='project_ds_multiple_context' 
          languages=' Python (NLP, ML, Graphs packages)'
          links={[
            <p className={`${styles.p_squeeze}`}><a href={'https://drive.google.com/file/d/1Gr0sIoUy7WHez5vw1O7YhusLXqNSoajt/view?usp=sharing'} target="_blank">Profile-Job matcher</a></p>,
            <p className={`${styles.p_squeeze}`}>Ship Detection <a href={'https://drive.google.com/file/d/1kpq-1Cow1GGDxBXbHUxgPtMH9D6eoShn/view?usp=sharing'} target="_blank">Read</a>+<a href={'https://github.com/valeporti/detection_navire'} target="_blank">Code</a></p>,
            <p className={`${styles.p_squeeze}`}><a href={'https://drive.google.com/file/d/1zii3cds5TGAtWBTh9OWT_U1CMQL7uqsE/view?usp=sharing'} target="_blank">Pandemic Simulator</a></p>,
            <p className={`${styles.p_squeeze}`}>Optimization with Genetic Algorithm <a href={'https://drive.google.com/file/d/1wZVd4X-8VA-nZrYYQ8gx5JfuX5ErhRpV/view?usp=sharing'} target="_blank">Read</a>+<a href='https://github.com/valeporti/imt/tree/master/imt_or/proj/py' target="_blank">Code</a></p>,
          ]}
          img_photo={<img className={styles.project_photo} style={{ width: '11em' }} src={ship_detec} />}
        />

        {/* IRent Haus */}
        <div className={styles.project_display}>
          <a href="https://www.irent.haus" target="_blank">
            <div className={styles.project_alert}>
              <div className={styles.project_status}>
                <div className={styles.project_status_icon_pos}>
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className={styles.project_status_text}>
                  <FormattedMessage id="project_cs50p8_status" />
                </div>
              </div>
            </div>
          </a>
          <div className={styles.project_content}>
            <div className={styles.project_title}>
              {'{'} <FormattedMessage id="ResIRH" /> {'}'}
            </div>
            <div className={styles.project_photo} >
              <img className={styles.project_photo} style={{ width: '11em' }} src={logo_irent} />
            </div>
            <div className={styles.technologies}>
              <i className="fas fa-flask"></i> Mongo, React/Redux, ExpressJS
            </div>
            <div className={styles.worked_as}>
              <i className="far fa-address-card"></i> <FormattedMessage id="ResIRHRole" />
            </div>
            <div className={styles.context}>
              <i className="fas fa-briefcase"></i> PropTech
            </div>
            <div className={styles.description}>
              <i className="fas fa-comment"></i> <FormattedMessage id="project_irent_description" />
            </div>
          </div>
        </div>

         {/* Compilateur */}
         <div className={styles.project_display}>
          <div>
            <div className={styles.project_alert}>
              <div className={styles.project_status}>
                <div className={styles.project_status_icon_pos}>
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className={styles.project_status_text}>
                  <FormattedMessage id="project_datavis_status" />
                  <hr className={`${styles.p_squeeze}`}></hr>
                  <p className={`${styles.p_squeeze}`}><a href='https://github.com/valeporti/imt/tree/home/imt_ll/proj/final' target="_blank"><FormattedMessage id="project_comp_status" /></a></p>
                  <p className={`${styles.p_squeeze}`}><a href='https://drive.google.com/file/d/1xB3BDNgIf_vEIXdAhi6_UPcfwnvweu4H/view?usp=sharing' target="_blank"><FormattedMessage id="click_for_more" /></a></p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.project_content}>
            <div className={styles.project_title}>
              {'{'} <FormattedMessage id="project_comp_title" /> {'}'}
            </div>
            <div className={styles.project_photo} >
              <img className={styles.project_photo} style={{ width: '15em' }} src={exprpfx} />
            </div>
            <div className={styles.technologies}>
              <i className="fas fa-flask"></i> OCAML
            </div>
            <div className={styles.worked_as}>
              <i className="far fa-address-card"></i> <FormattedMessage id="project_datavis_role" />
            </div>
            <div className={styles.context}>
              <i className="fas fa-briefcase"></i> <FormattedMessage id="project_comp_context" />, 
            </div>
            <div className={styles.description}>
              <i className="fas fa-comment"></i> <FormattedMessage id="project_comp_description" />
            </div>
          </div>
        </div>

        {/* Fintech Stuff */}
        <div className={styles.project_display}>
          <a href="https://mutuofinanciera.com/" target="_blank">
            <div className={styles.project_alert}>
              <div className={styles.project_status}>
                <div className={styles.project_status_icon_neg}>
                  <i className="fas fa-ban"></i>
                </div>
                <div className={styles.project_status_text}>
                  <FormattedMessage id="project_valhalla_status" />
                </div>
              </div>
            </div>
          </a>
          <div className={styles.project_content}>
            <div className={styles.project_title}>
              {'{'} <FormattedMessage id="project_valhalla_title" /> {'}'}
            </div>
            <div className={styles.project_photo}>
              <img className={styles.project_photo} src={mutuo_valhalla} />
            </div>
            <div className={styles.technologies}>
              <i className="fas fa-flask"></i> PHP, SQL, NoSQL, JS, Mongo, LARAVEL
            </div>
            <div className={styles.worked_as}>
              <i className="far fa-address-card"></i> <FormattedMessage id="project_valhalla_role" />
            </div>
            <div className={styles.context}>
              <i className="fas fa-briefcase"></i> <FormattedMessage id="project_valhalla_context" />
            </div>
            <div className={styles.description}>
              <i className="fas fa-comment"></i> <FormattedMessage id="project_valhalla_description" />
            </div>
          </div>
        </div>

        {/* Data */}
        <div className={styles.project_display}>
          <div>
            <div className={styles.project_alert}>
              <div className={styles.project_status}>
                <div className={styles.project_status_icon_pos}>
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className={styles.project_status_text}>
                  <FormattedMessage id="project_datavis_status" />
                  <hr className={`${styles.p_squeeze}`}></hr>
                  <p className={`${styles.p_squeeze}`}><a href='https://codepen.io/valeporti/full/KqvdQB/' target="_blank">Heat Map</a></p>
                  <p className={`${styles.p_squeeze}`}><a href='https://codepen.io/valeporti/full/XgVxJr/' target="_blank">Force Directed Graph</a></p>
                  <p className={`${styles.p_squeeze}`}><a href='https://codepen.io/valeporti/full/EXZREY/' target="_blank">Scatter Plot</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.project_content}>
            <div className={styles.project_title}>
              {'{'} <FormattedMessage id="project_datavis_title" /> {'}'}
            </div>
            <div className={styles.project_photo}>
              <img className={styles.project_photo} src={data_plot} />
            </div>
            <div className={styles.technologies}>
              <i className="fas fa-flask"></i> D3.JS
            </div>
            <div className={styles.worked_as}>
              <i className="far fa-address-card"></i> <FormattedMessage id="project_datavis_role" />
            </div>
            <div className={styles.context}>
              <i className="fas fa-briefcase"></i> <FormattedMessage id="project_datavis_context" />
            </div>
            <div className={styles.description}>
              <i className="fas fa-comment"></i> <FormattedMessage id="project_datavis_description" />
            </div>
          </div>
        </div>
        
        {/* VBA (citi, ica, jacobs, mutuo) */}
        <div className={styles.project_display}>
          <a href="https://youtu.be/wxJ1JsdVFV0" target="_blank">
            <div className={styles.project_alert}>
              <div className={styles.project_status}>
                <div className={styles.project_status_icon_neg}>
                  <i className="fas fa-ban"></i>
                </div>
                <div className={styles.project_status_text}>
                  <FormattedMessage id="project_pm_status" />
                </div>
              </div>
            </div>
          </a>
          <div className={styles.project_content}>
            <div className={styles.project_title}>
              {'{'} <FormattedMessage id="project_pm_title" /> {'}'}
            </div>
            <div className={styles.project_photo}>
              <img className={styles.project_photo} src={pm_report} />
            </div>
            <div className={styles.technologies}>
              <i className="fas fa-flask"></i> VBA, Excel
            </div>
            <div className={styles.worked_as}>
              <i className="far fa-address-card"></i> <FormattedMessage id="project_pm_role" />
            </div>
            <div className={styles.context}>
              <i className="fas fa-briefcase"></i> <FormattedMessage id="project_pm_context" />
            </div>
            <div className={styles.description}>
              <i className="fas fa-comment"></i> <FormattedMessage id="project_pm_description" />
            </div>
          </div>
        </div>

        {/* Tic Tac Toe */}
        <div className={styles.project_display}>
          <a href="https://tictactoe-vp.herokuapp.com/" target="_blank">
            <div className={styles.project_alert}>
              <div className={styles.project_status}>
                <div className={styles.project_status_icon_pos}>
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className={styles.project_status_text}>
                <FormattedMessage id="project_ttt_status" />
                </div>
              </div>
            </div>
          </a>
          <div className={styles.project_content}>
            <div className={styles.project_title}>
              {'{'} <FormattedMessage id="project_ttt_title" /> {'}'}
            </div>
            <div className={styles.project_photo}>
              <img className={styles.project_photo} src={tic_tac_toe} />
            </div>
            <div className={styles.technologies}>
              <i className="fas fa-flask"></i> HTML, CSS, JS
            </div>
            <div className={styles.worked_as}>
              <i className="far fa-address-card"></i> <FormattedMessage id="project_ttt_role" />
            </div>
            <div className={styles.context}>
              <i className="fas fa-briefcase"></i> <FormattedMessage id="project_ttt_context" />
            </div>
            <div className={styles.description}>
              <i className="fas fa-comment"></i> <FormattedMessage id="project_ttt_description" />
            </div>
          </div>
        </div>

        {/* FINAL */}
        <div className={styles.project_display}>
          {/* <a href="https://cs50final-vp.herokuapp.com/" target="_blank"> */}
          <div>
            <div className={styles.project_alert}>
              <div className={styles.project_status}>
                <div className={styles.project_status_icon_pos}>
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className={styles.project_status_text}>
                  <FormattedMessage id="project_cs50final_status" />
                  <hr className={`${styles.p_squeeze}`}></hr>
                  <p className={`${styles.p_squeeze}`}><a href='https://cs50final-vp.herokuapp.com/' target="_blank">App</a></p>
                  <p className={`${styles.p_squeeze}`}><a href='https://youtu.be/2zWBjwMZssI' target="_blank">Video</a></p>
                  <p className={`${styles.p_squeeze}`}><a href='https://github.com/valeporti/cs50' target="_blank"><FormattedMessage id="project_cs50final_all_proj" /></a></p>
                </div>
              </div>
            </div>
          </div>
          {/* </a> */}
          <div className={styles.project_content}>
            <div className={styles.project_title}>
              {'{'} <a className={styles.title_link} href="https://www.youtube.com/watch?v=h7MBIub-5ao" target="_blank"> <FormattedMessage id="project_cs50final_title" /> </a> {'}'}
            </div>
            <div className={styles.project_photo}>
              <img className={styles.project_photo} src={cs50_final} />
            </div>
            <div className={styles.technologies}>
              <i className="fas fa-flask"></i> PHP, SQL, HTML, CSS, JS
            </div>
            <div className={styles.worked_as}>
              <i className="far fa-address-card"></i> <FormattedMessage id="project_cs50final_role" />
            </div>
            <div className={styles.context}>
              <i className="fas fa-briefcase"></i> <FormattedMessage id="project_cs50final_context" />
            </div>
            <div className={styles.description}>
              <i className="fas fa-comment"></i> <FormattedMessage id="project_cs50final_description" />
            </div>
          </div>
        </div>

        {/* PSET8 */}
        <div className={styles.project_display}>
          <a href="https://cs50pset8-vp.herokuapp.com/" target="_blank">
            <div className={styles.project_alert}>
              <div className={styles.project_status}>
                <div className={styles.project_status_icon_pos}>
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className={styles.project_status_text}>
                  <FormattedMessage id="project_cs50p8_status" />
                </div>
              </div>
            </div>
          </a>
          <div className={styles.project_content}>
            <div className={styles.project_title}>
              {'{'}<a className={styles.title_link} href="https://www.youtube.com/watch?v=p1TmkL_FyP0" target="_blank"> <FormattedMessage id="project_cs50p8_title" /> </a>{'}'}
            </div>
            <div className={styles.project_photo}>
              <img className={styles.project_photo} src={p8} />
            </div>
            <div className={styles.technologies}>
              <i className="fas fa-flask"></i> PHP, SQL, HTML, CSS, JS, Google API
            </div>
            <div className={styles.worked_as}>
              <i className="far fa-address-card"></i> <FormattedMessage id="project_cs50p8_role" />
            </div>
            <div className={styles.context}>
              <i className="fas fa-briefcase"></i> <FormattedMessage id="project_cs50p8_context" />
            </div>
            <div className={styles.description}>
              <i className="fas fa-comment"></i> <FormattedMessage id="project_cs50p8_description" />
            </div>
          </div>
        </div>

        {/* PSET7 */}
        <div className={styles.project_display}>
          <a href="https://cs50pset7-vp.herokuapp.com/" target="_blank">
            <div className={styles.project_alert}>
              <div className={styles.project_status}>
                <div className={styles.project_status_icon_pos}>
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className={styles.project_status_text}>
                  <FormattedMessage id="project_cs50p7_status" />
                </div>
              </div>
            </div>
          </a>
          <div className={styles.project_content}>
            <div className={styles.project_title}>
              {'{'} <a className={styles.title_link} href="https://www.youtube.com/watch?v=cLSDylyk2MI" target="_blank"> <FormattedMessage id="project_cs50p7_title" /> </a>{'}'}
            </div>
            <div className={styles.project_photo}>
              <img className={styles.project_photo} src={p7} />
            </div>
            <div className={styles.technologies}>
              <i className="fas fa-flask"></i> PHP, SQL, HTML, CSS, JS
            </div>
            <div className={styles.worked_as}>
              <i className="far fa-address-card"></i> <FormattedMessage id="project_cs50p7_role" />
            </div>
            <div className={styles.context}>
              <i className="fas fa-briefcase"></i> <FormattedMessage id="project_cs50p7_context" />
            </div>
            <div className={styles.description}>
              <i className="fas fa-comment"></i> <FormattedMessage id="project_cs50p7_description" />
            </div>
          </div>
        </div>

        {/* Node JS */}
        <div className={styles.project_display}>
          <div>
            <div className={styles.project_alert}>
              <div className={styles.project_status}>
                <div className={styles.project_status_icon_pos}>
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className={styles.project_status_text}>
                  <FormattedMessage id="project_fccback_status" />
                  <hr className={`${styles.p_squeeze}`}/>
                  <p className={`${styles.p_squeeze}`}><a href='https://timestamp-vp.herokuapp.com/' target="_blank">TimeStamp</a></p>
                  <p className={`${styles.p_squeeze}`}><a href='https://whoami-vp.herokuapp.com/' target="_blank">Who Am I</a></p>
                  <p className={`${styles.p_squeeze}`}><a href='https://urlshort-vp.herokuapp.com/' target="_blank">Short URL</a></p>
                  <p className={`${styles.p_squeeze}`}><a href='https://imagesearch-vp.herokuapp.com/' target="_blank">Image Search</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.project_content}>
            <div className={styles.project_title}>
              {'{'} <FormattedMessage id="project_fccback_title" /> {'}'}
            </div>
            <div className={styles.project_photo}>
              <img className={styles.project_photo} src={who_am_i} />
            </div>
            <div className={styles.technologies}>
              <i className="fas fa-flask"></i> NodeJS, ExpressJS
            </div>
            <div className={styles.worked_as}>
              <i className="far fa-address-card"></i> <FormattedMessage id="project_fccback_role" />
            </div>
            <div className={styles.context}>
              <i className="fas fa-briefcase"></i> <FormattedMessage id="project_fccback_context" />
            </div>
            <div className={styles.description}>
              <i className="fas fa-comment"></i> <FormattedMessage id="project_fccback_description" />
            </div>
          </div>
        </div>

        {/* Front */}
        <div className={styles.project_display}>
          <a href="https://codepen.io/valeporti/" target="_blank">
            <div className={styles.project_alert}>
              <div className={styles.project_status}>
                <div className={styles.project_status_icon_pos}>
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className={styles.project_status_text}>
                  <FormattedMessage id="project_fccfront_status" />
                </div>
              </div>
            </div>
          </a>
          <div className={styles.project_content}>
            <div className={styles.project_title}>
              {'{'} <FormattedMessage id="project_fccfront_title" /> {'}'}
            </div>
            <div className={styles.project_photo}>
              <img className={styles.project_photo} src={front_proj} />
            </div>
            <div className={styles.technologies}>
              <i className="fas fa-flask"></i> HTML, CSS, JS, React, Redux
            </div>
            <div className={styles.worked_as}>
              <i className="far fa-address-card"></i> <FormattedMessage id="project_fccfront_role" />
            </div>
            <div className={styles.context}>
              <i className="fas fa-briefcase"></i> <FormattedMessage id="project_fccfront_context" />
            </div>
            <div className={styles.description}>
              <i className="fas fa-comment"></i> <FormattedMessage id="project_fccfront_description" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

/*
<div className="w-dyn-item w-col w-col-4">
  <a data-w-id="deef80b3-5eb9-c030-7f16-eed40bc18ab4" href="/projects/cooking-labs" className="thumb-proyectos w-inline-block" style="will-change: transform; transform: translateX(2.5005px) translateY(2.49965px) translateZ(0px) scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg);">
    <img width="181" src="https://uploads-ssl.webflow.com/5a7495484f34370001335c75/5ae7422fd99a3d5c33d5d990_Thumb.jpg" className="thumb-proyectos-imagen" />
    <div className="thumbs-divcontent">
      <h3 className="heading-thumbs margen10">Cooking Labs</h3>
      <div className="text-block">Rural economic development through food innovation.</div>
    </div>
  </a>
</div>
*/

Projects.propTypes = {
};

export default Projects;
