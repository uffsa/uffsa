import React from 'react';
import './MAFFIA.css';

import MaffiaTitle from '../../../components/titles/MAFFIA Title/MaffiaTitle';
import InstagramPost from "../../../components/InstaPosts/InstagramPost";

const MAFFIA = () => {  
    return (<>
        <div className='maffia-page'>
          <MaffiaTitle color='white' />

          <section className="maffia-description">
            <div className='maffia-description__container'>
              <p>
                <b>MAFFIA</b> <i>(Membership And FSA First-year Involvement Alliance)</i> is the perfect way for new members 
                to get involved and find their niche within FSA! Within it they will gain firsthand leadership experience 
                and develop valuable skills all while connecting with new and old members of the <i>pamilya</i>!
              </p>

              <p>
                This program gives the opportunity to network and learn how FSA runs behind the scenes with the help 
                of E-Board members and Chairs. Although MAFFIA is geared towards new members and freshmen,  
                <i> all</i> are welcome and encouraged to join! 
              </p>

              <p>
                MAFFIA is divided into 4 sub-programs, each of which have different tasks:
                <ul>
                  <li><b>Culture</b>: GBM info-segment, BARKADA vocabulary section, language workshops</li>
                  <li><b>Mass Communications</b>: Emcee, BARKADA pamphlets</li>
                  <li><b>Multimedia</b>: Skit actor, script writer</li>
                  <li><b>Philanthropy</b>: KLIK Mobile Education (KLIKme), advocacy segment</li>
                </ul>
                Over the course of the Fall semester, members will be distributed amongst these sub-programs 
                and will rotate every GBM / show so each MAFFIA member has the opportunity to experience most of the programs. 
                By the Spring semester, members get to choose which rotation they would like to "<i>lockdown</i>" on and work
                closer with board in meetings and responsibilities. 
              </p>

              <p>
                The choice is yours! Enhance your experience in FSA and join our team today :}
              </p>
            </div>

            <div className='maffia-vid'>
              <div className='vid-container'>
                <iframe className='vid'
                  width={1280}
                  height={720}
                  src="https://www.youtube.com/embed/JWAEah9sIZs?si=8VyaZZqF83EJIk8m"
                  title="Dress to Impress | UFFSA MAFFIA 2024"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen={true}
                />
              </div>
            </div>

            <div className='apply-button__container'>
              <a>
                  <button className="apply-button title">
                    Apps Closed — Open in Spring !
                  </button>
              </a>
            </div>
          </section>

        </div>
    </> 
  );
}

export default MAFFIA;