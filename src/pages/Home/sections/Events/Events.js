import React from "react";
import "./Events.css";

import { HashLink } from "react-router-hash-link";

const Events = () => {
  return (
    <section className="events-section" id="events">
      <div className="events-container">
        <h1 className="events-title title">🍂 November Events 🍂</h1>
        <div className="event-grid">

          <div className="event-card">
            <h2 className="event-card-title title">🍡 Dessert Workshop 🍡</h2>
            <p className="event-card-description">
              VSO x Surge x FSA: Craving some sweets? Come out to our annual Dessert Workshop where we got you 
              covered with sweet treats! 🍰 Learn about different cultures’ desserts and enjoy them for completely 
              free! 🤑 Included deserts will be sapin-sapin, Japanese cheese tart, and Chè Thái! See you there!
            </p>
            <p className="event-description-separator">𖤓°⋆.ೃ࿔*:･𖤓°⋆.ೃ࿔*:･𖤓°⋆.ೃ࿔*:･𖤓</p>
            <div className="events-info">
              <p>📆 Date: Tuesday, November 4th</p>
              <p>📍 Location: Arredondo Café (Reitz 4th Floor)</p>
              <p>🚪 Doors Open: 6:00 PM</p>
              <p>🍡 Workshop Starts: 6:30 PM</p>
            </div>
            <a
              href="https://www.instagram.com/p/DQIUkm1DRAg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="events-button">Instagram Post</button>
            </a>
          </div>

          <div className="event-card">
            <h2 className="event-card-title title">🍟 FRIES Workshop 🍟</h2>
            <p className="event-card-description">
              Missed our last FRIES (Filipino Resource for Interactive, Engaging Speaking) session? Don't fret, because we 
              have one coming up! If you've got some time to spare, come join us as we learn more vocabulary and information 
              related to spooky season, taught by our very own VP of Membership: Dom!
            </p>
            <p className="event-description-separator">☆*:.｡.｡.:*･゜ﾟ･*:.｡.｡.:*･゜ﾟ･*:.｡.｡.:*☆</p>
            <div className="events-info">
              <p>📅 Date: Friday, November 7th</p>
              <p>📍 Location: McCarty Hall A 2186</p>
              <p>🚪 Doors Open: 4:30 PM</p>
              <p>🍟 Workshop Starts: 4:45 PM</p>
            </div>
            <a
              href="https://www.instagram.com/p/DQr0k1jEY58/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="events-button">Instagram Post</button>
            </a>
          </div>

          <div className="event-card">
            <h2 className="event-card-title title">💬 KLIK Event 💬</h2>
            <p className="event-card-description">
              HEAL x FSA: Join us in person or individually for an hour and a half of meaningful conversations as we hop 
              on Zoom with our Filipino community in the Philippines ❤️ Each session features a guest speaker sharing 
              their life story and lessons, followed by breakout rooms where you can personally connect and exchange 
              experiences across borders 🌊 Together, we aim to share stories, learn valuable lessons, and bring hope 
              to those in disadvantaged communities. And yes — there’s free food for everyone who joins in person! 🍜🫶
            </p>
            <p className="event-description-separator">✧･ﾟ:*✧･ﾟ:*✧･ﾟ:*✧*:･ﾟ✧*:･ﾟ✧*:･ﾟ✧</p>
            <div className="events-info">
              <p>📅 Date: Friday, November 7th</p>
              <p>📍 Location: Reitz Union Food Court / Online</p>
              <p>💬 Event Starts: 8:00 PM</p>
            </div>
            <a
              href="https://www.instagram.com/p/DQfBHmFj4qP/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="events-button">Instagram Post</button>
            </a>
          </div>

          <div className="event-card">
            <h2 className="event-card-title title">🍴 Potluck Clash 🍴</h2>
            <p className="event-card-description">
              FSA x SASE: Have you 🫵 been craving some yummy cultural food? Then come join us for FSA x SASE 
              Potluck Clash! 🍽️ Team up with your friends to create a delicious ethnic dish that will amaze your 
              fellow FSA and SASE members. 🍱 Make sure to sign up using the form in our LinkTree! 📜
            </p>
            <p className="event-description-separator">⋆⁺｡˚⋆˙‧₊☽☾₊‧˙⋆˚｡⁺⋆◯⋆⁺｡˚⋆˙‧₊☽☾₊‧˙⋆˚｡⁺⋆</p>
            <div className="events-info">
              <p>📅 Date: Sunday, November 9th</p>
              <p>📍 Location: Honors Village Building 1</p>
              <p>🍴 Event Starts: 5:30 - 7:30 PM</p>
            </div>
            <a
              href="https://www.instagram.com/p/DQb8LHugPER/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="events-button">Instagram Post</button>
            </a>
          </div>

          <div className="event-card">
            <h2 className="event-card-title title">💌 A Million Thanks 💌</h2>
            <p className="event-card-description">
              Join us for our first service event of the year! FSA is hosting a Veterans Card-Making Event in partnership 
              with A Million Thanks to show gratitude to those who’ve served. ✉️❤️ Stop by to write heartfelt cards, enjoy 
              free food, and make a difference this Veterans Day! 💌 Let’s come together to share appreciation, kindness, 
              and community this Veterans Day!
            </p>
            <p className="event-description-separator">*ੈ✩‧₊˚༺☆༻*ੈ✩‧₊˚*ੈ✩‧₊˚༺☆༻*ੈ✩‧₊˚</p>
            <div className="events-info">
              <p>📅 Date: Monday, November 10th</p>
              <p>📍 Location: McCarty Hall A 2186</p>
              <p>💌 Event Starts: 6:30 - 7:30 PM</p>
            </div>
            <a
              href="https://www.instagram.com/p/DQuYPg9kRyA/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="events-button">Instagram Post</button>
            </a>
          </div>

          <div className="event-card">
            <h2 className="event-card-title title">🎲 Filipino Fhursday 🎲</h2>
            <p className="event-card-description">
              Filipino Fri- FHURSDAY is back! 😋 Come out for pizza, beverages, and for casual gaming and karaoke. 🫣 
              Feel free to come by anytime and as always, we hope to see you there!! 🎮
            </p>
            <p className="event-description-separator">-ˋˏ ༻❁༺༻❁༺༻❁༺༻❁༺༻❁༺ ˎˊ-</p>
            <div className="events-info">
              <p>📅 Date: Thursday, November 13th</p>
              <p>📍 Location: McCarty Hall A 1142</p>
              <p>🎲 Event Starts: 5:00 - 8:00 PM</p>
            </div>
            <a
              href="https://www.instagram.com/p/DQb8LHugPER/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="events-button">Instagram Post</button>
            </a>
          </div>

          <div className="event-card">
            <h2 className="event-card-title title">🎤 Karaoke Night 🎤</h2>
            <p className="event-card-description">
              JSA x KUSA x FSA: Have you guys noticed EVERY ASIAN HANGOUT somehow results in a karaoke bonding 
              (well well well) 🤔⁉️ Maybe because we just LOVE singing our HEART OUT ❤️‍🔥 (especially Bruno Mars songs) 
              *cough cough* but darling I'd still catch a grenade FOR YaAaAa~ 💣🎵 (voice crack). Join us at our Annual 
              Karaoke Social! 🎤✨ There will be: FREE Food 😋, Karaoke (ofc) 🎶, and Just Dance 💃🕺 (this trap will 
              literally catch ALL OF YOU 😈)

            </p>
            <p className="event-description-separator">☆⋆｡𖦹°‧★☆⋆｡☆⋆｡𖦹｡⋆☆｡⋆☆★‧°𖦹｡⋆☆</p>
            <div className="events-info">
              <p>📅 Date: Friday, November 14th</p>
              <p>📍 Location: CSE A 101</p>
              <p>🚪 Doors Open: 6:00 PM</p>
              <p>🎤 Event Starts: 6:30 PM</p>
            </div>
            <a
              href="https://www.instagram.com/uf_jsa/p/DQsiD1EDglF/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="events-button">Instagram Post</button>
            </a>
          </div>

          <div className="event-card">
            <h2 className="event-card-title title">🤾 Dodgeball Showdown 🤾</h2>
            <p className="event-card-description">
              CASA x FSA x JSA x KUSA: DODGE, THROW, CATCH 🎯 Come to Southwest Rec and show off your 
              dodgeball skills and have a good time!
            </p>
            <p className="event-description-separator">𖡼𖤣𖥧𖡼𓋼𖤣𖥧𓋼𓍊𖡼𖤣𖥧𖡼𓋼𖤣𖥧𓋼𓍊𖡼𖤣𖥧𖡼</p>
            <div className="events-info">
              <p>📅 Date: Sunday, November 30th</p>
              <p>📍 Location: Southwest Multipurpose Court</p>
              <p>🤾 Event Starts: 5:00 PM</p>
            </div>
            <a
              href="https://www.instagram.com/p/DQux43wEppK/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="events-button">Instagram Post</button>
            </a>
          </div>

        </div>
      </div>
      {/* Old Calender: "https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23F5C52A&ctz=America%2FNew_York&showPrint=0&showDate=1&showNav=1&showTitle=0&showTabs=0&showCalendars=1&showTz=0&src=NjliZGNmZjFlOWY2ZjUxZDNkNmM4MTYzNjdkNGFjOTZiYmY2YjJlYTEwMGE0YTQ1MmRiZjljZDlkMzg4ZDU5YUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NmNjZDhjNjliZTZjOGNiOTllYjk0ZDNmY2I1MGU3ODlkMmRjMGYzODBlYTFlYzdiNTI1MDRhNTViYWM5NmY1M0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=dWZmc2EuZGFuY2VAZ21haWwuY29t&color=%23E4C441&color=%237986CB&color=%23E67C73" */}
        <h1 className="events-calendar-title title">Google Calendar</h1>
        <iframe 
          src="https://calendar.google.com/calendar/embed?src=c_e54f2747e1492f344b5d9f1fff1fe7bad869036ae95ef33a8b49f04576a56fbc%40group.calendar.google.com&ctz=America%2FNew_York" 
          className="events-calendar"
          title="calendar"
        />
    </section>
  );
};

export default Events;