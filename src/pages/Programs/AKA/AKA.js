import React from 'react';
import AKATitle from '../../../components/titles/AKA Title/AKATitle';

import './AKA.css';

const AKA = () => {
  return (<>
    <div className='aka-page'>
      <AKATitle color="white" />

      <div className='aka-description'>
        <div className='aka-description__container'>
          <b>Reverse Ate Kuya Ading</b> <i>(RAKA)</i> is FSA's Big/Little Program during the Spring semester!
          <br /><br />
          We encourage you to be as specific and descriptive as possible in your <a href="https://docs.google.com/forms/d/e/1FAIpQLSe7hxokHYmihDx8ALuuZZ8h1qV-__Ozdc6LTCgDJl2ggp1rUw/viewform">application</a> so we can create the best pamilya for you!
          <br /><br />

          <b>Deadline to submit: February 4, 2026</b>
          <br /><br />
          Once you submit your application, find out your pairing(s) after GBM 2 on February 16th! We hope to see you there!
          <br /><br />
          Check out this past AKA/RAKA video to find out what being a part of the pamilya feels like!
        </div>

        <div className='aka-vid'>
          <div className='vid-container'>
            <iframe className='vid'
              width={1280}
              height={720}
              src="https://www.youtube.com/watch?v=lV77FToQwUg"
              title="Kirby's Raka-venture | RAKA Promo Video 2026"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
            />
          </div>
        </div>

        <div className='aka-button__container'>

          <a href='https://docs.google.com/spreadsheets/d/1RwJQLhwU2FMW9KckC8LG8LCx2RZTU310eLROJ8Ox5os/edit?gid=1023977696#gid=1023977696' target="_blank" rel="noopener noreferrer">
            <button className="aka-button title">
              AKA Pairings
            </button>
          </a>

          <a href='https://drive.google.com/drive/https://drive.google.com/drive/folders/1HjQ1HGD7heaTK7d0YMgJ6u0qiPsv_Poj/1KJb04ZV5mhX48P1wkiic38-620ffASxu?usp=drive_link' target="_blank" rel="noopener noreferrer">
            <button className="aka-button title">
              AKA Photos
            </button>
          </a>
        </div>

        {/* <div className='temp-text-container'>
                AKA Description: Our big/little mentorship program <br /><br />
                Embed application <br /><br />
                Event info on AKA/RAKA weeks and woodser <br /><br />
                Feature Pair of the Month + link application <br /><br />
                Embed Pamilya Spotlights from Instagram <br /><br />
                AKA (Ate/Kuya/Ading) is the Filipino Student Association's mentorship program here at UF. Our Membership Team will do their best to pair you with an "Ading" (little) or a "Kuya" (big brother) or an "Ate" (big sister) that best suits you!

                We encourage you to be as specific and descriptive as possible so we can create the best pamilya for you!

                Deadline to submit: FRIDAY, SEPTEMBER 15th @ 11:59PM

                Once you submit your application, find out your pairing(s) at AKA Reveal after FAHM Opening Ceremony on September 24th at Lake Wauburg. We hope to see you there!
              </div> */}
      </div>

    </div >
  </>
  );
}

export default AKA;