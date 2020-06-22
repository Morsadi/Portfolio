import React from 'react';

const projects = [
  {
    name: 'HEADRUSH',
    title: <h2>HEADRUSH</h2>,
    className: 'headrushSection odd',
    alt: "Screenshot of Headrush's website",
    stateName: 'headrush',
    text: [
      'HEADRUSH is a platform that facilitates project-based learning from start to finish allowing students to become self-empowered learners. As a progressive learning management system, HEADRUSH is changing the way teachers track, record and assess student project work.',
      'As the designer of this wireframe and UI, I served as an independent contractor for Headrush. I implemented minimal javascript in Wix to achieve desired functionality for low-maintenance site management. This learning company supports 50 globally-based schools and the website is frequently visited.',
    ],
    style: 'odd',
    img: require('./assets/snaps/HEADRUSHsnap.png'),
    imgClass: 'headrushSnap snap',
    onClick: () => {
      window.open('https://www.headrushlearning.com/');
    },
  },
  {
    name: `THINK Global School`,
    title: (
      <h2>
        THINK
        <br />
        Global School
      </h2>
    ),
    className: 'tgsSection even',
    alt: "Screenshot of TGS's website",
    stateName: 'TGS',
    text: [
      "THINK Global School (TGS) is the world's first traveling high school. The international student attendees visit 12 countries before they graduate, all while integrating education with travel and technology. The TGS Alumni Network serves as an extension of TGS where alumni connect as global ambassadors.",
      'Initially, I was hired as an independent contractor for THINK Global School to translate their web content from English to both French and Arabic. I was later re-hired to design the UI for the THINK Global School Alumni Network and convert it to code to be hosted on Wordpress. Eventually, I incorporated Open Apply API along with Google Sheets API to create a platform for TGS alumni to input and review their information on the database, as well as submit profile update requests.',
    ],
    style: 'even',
    img: require('./assets/snaps/TGSsnap.png'),
    imgClass: 'tgsSnap snap',
    onClick: () => {
      window.open('https://changemakers.thinkglobalschool.org/');
    },
  },
  {
    name: 'Acoustic Saturdays',
    title: (
      <h2>
        Acoustic
        <br />
        Saturdays
      </h2>
    ),
    className: 'acousticSection odd',
    alt: "Screenshot of Acoustic Saturdays' website",
    stateName: 'acoustic',
    text: [
      'As a Rabat-based artist collective, Acoustic Saturdays brings together a dynamic community of musicians, singers, photographers, videographers and graphic designers. Acoustic Saturdays connects emerging and veteran artists who contribute to the development of accessible art and music in Morocco.',
      'As part of the Acoustic Saturdays collective, I volunteered to design the UI of this website. I used Javascript & Wordpress POST-API to code different sections from scratch, creating features such as a music player and an automated news page.',
    ],
    style: 'odd',
    img: require('./assets/snaps/acousticSnap.png'),
    imgClass: 'acousticSnap snap',
    onClick: () => {
      window.open('https://www.acousticsaturdays.com/');
    },
  },
  {
    name: 'Acoustic Saturdays',
    title: (
      <h2>
        PBL
        <br />
        Rubric
      </h2>
    ),
    className: 'pblrSection even',
    alt: "Screenshot of PBLR's website",
    stateName: 'pblr',
    text: [
      'According to PBL Works, Project Based Learning (PBL) prepares students for academic, personal, and career success. Known to build the capacity of teachers, PBL Works designed the PBL rubric to help educators facilitate transformative project work in their classrooms.',
      'This prototype serves as a digital rubric for transparent tracking of PBL educator development. In addition to designing the UI, I used React with the integration of Firebase to create a platform for each user to add teachers, update their profile and assess their skills.',
    ],
    style: 'even',
    img: require('./assets/snaps/pblrSnap.png'),
    imgClass: 'pblrSnap snap',
    onClick: () => {
      window.open('https://pblr.netlify.com/');
    },
  },
  {
    name: 'Scaler',
    title: <h2>Scaler</h2>,
    className: 'scalerSection odd',
    alt: "Screenshot of Scaler's website",
    stateName: 'scaler',
    text: [
      'All vocalists know that practicing scales challenges and expands the vocal range. It is difficult for vocalists to transition between key transpositions easily as it requires understanding and, more importantly, time, to adjust a piece accordingly to one’s own vocal range.',
      'I built this prototype out of a felt need to adjust popular scales to match my deep vocal range. Wireframed/designed on Figma, written in React, and deployed on Netlify. This app generates different key transpositions of any song. Now vocalists can submit any original song progression and find the right scales that match their voice.',
    ],
    style: 'odd',
    img: require('./assets/snaps/scalerSnap.png'),
    imgClass: 'scalerSnap snap',
    onClick: () => {
      window.open('https://scaler.netlify.com/');
    },
  },
  {
    name: 'Morsadi',
    title: <h2>Morsadi</h2>,
    className: 'morsadiSection even',
    alt: "Screenshot of Morsadi's website",
    stateName: 'morsadi',
    text: [
      'Morsadi is a creative story agency for brands that matter. In offering story + web design, this agency creates content that captures the value of selected brands and spreads their influence. The Morsadi mission is to embolden brands positioned to make a difference and catalyze human connection through the power of story.',
      'Co-founded by Breanna Morsadi and I, this small family business allows for us to collaborate on projects involving copywriting, story and web design. In creating this site, I used Figma and Adobe XD to develop and design the UI and UX, and converted it to a responsive website using React.',
    ],
    style: 'even',
    img: require('./assets/snaps/morsadiSnap.png'),
    imgClass: 'morsadiSnap snap',
    onClick: () => {
      window.open('https://morsadi.com/');
    },
  },
  {
    name: 'Drum Machine',
    title: (
      <h2>
        Drum
        <br />
        Machine
      </h2>
    ),
    className: 'drummachineSection even',
    alt: "Screenshot of drum machine's website",
    stateName: 'drumMachine',
    text: [
      'This app started as a training challenge but will grow bigger in the future. It will be customized for smaller devices and will include more features keeping simplicity in mind.',
      'This app was one of my training projects where the goal was to explore more of React and SASS features. It was designed on Figma, coded in React and SASS, and deployed on Netlify. This app can be used as a computer drum pad using the keyboard to play along with other musicians on different occasions.',
    ],
    style: 'odd',
    img: require('./assets/snaps/drumPad.png'),
    imgClass: 'drumSnap snap',
    onClick: () => {
      window.open('https://morsadidrumpad.netlify.com/');
    },
  },
];

export default projects;
