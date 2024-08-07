interface Project {
  name: string;
  id: string;
  link: string;
  short: string;
  tech: string[];
  img: string;
  description: string;
  features: string[];
}

interface ProjectData {
  projects: Project[];
}

export const data: ProjectData = {
  projects: [
    {
      name: 'write it',
      id: 'write-it',
      link: 'https://writee-it.vercel.app',
      short: 'Digital-to-handwritten app: personalize, stylize, and charm.',
      tech: ['angular', 'tailwind', 'firebase', 'git', 'vercel'],
      img: '/assets/write-it desktop.png',
      description:
        'Experience the magic of our innovative app that effortlessly transforms your digital thoughts into exquisite handwritten notes. Customize styles, colors, and paper backgrounds to create unique and authentic messages, letters, or reminders. Embrace the charm of handwritten communication in the digital age with our user-friendly text-to-handwriting application, where personalization meets elegance seamlessly.',
      features: [
        'Write your entries in a beautiful space',
        'Personalized and realistic styles',
        'Customizable colors and paper backgrounds',
        'Create unique handwritten messages, letters, reminders',
        'User-friendly interface',
        'Embrace handwritten communication in the digital age.',
      ],
    },
    {
      name: 'CinemaSync',
      id: 'CinemaSync',
      link: 'https://cinemasyncc.vercel.app/',
      short:
        'Simplify movie exploration with user-friendly Movie Explorer app.',
      tech: ['javascript', 'css', 'TMDb API', 'git', 'vercel'],
      img: '/assets/cinemasync desktop.png',
      description:
        'The app is a user-friendly platform that leverages the power of The Movie Database (TMDb) API to provide a comprehensive movie exploration experience. Designed with simplicity and functionality in mind, Movie Explorer allows users to discover, explore, and stay updated on their favorite movies effortlessly. ',
      features: [
        'Intuitive Movie Search',
        'Real-time Updates',
        'Detailed Movie Information',
        'Effortless discovery of favorite movies',
        'Dynamic Movie Lists',
        'Personalized Watchlist',
        'Sleek User Interface',
        'Responsive Design',
      ],
    },
    {
      name: 'NewsSnap',
      id: 'news-snap',
      link: 'https://news-snap.vercel.app/',
      short:
        'NewsSnap: Web app with HTML, PicoCSS, JavaScript. Fetches headlines, detailed info with a click.',
      tech: ['javascript', 'PicoCSS', 'News API', 'git', 'vercel'],
      img: '/assets/news-snap desktop.png',
      description:
        'The NewsSnap App is a simple web application built with HTML, PicoCSS, and JavaScript. It leverages the News API to fetch and display news headlines. Users can click on a particular news card to navigate to the main news source for detailed information.',
      features: [
        'Intuitive News Search',
        'Real-time Updates',
        'Detailed News Information',
        'View a list of news headlines with images.',
        'Click on a news card to visit the main news source for the complete news article.',
        'Sleek User Interface',
        'Responsive Design',
      ],
    },
    {
      name: 'Listen up',
      id: 'Listen-up',
      link: 'https://listen-up-music-app.vercel.app/playlist',
      short:
        'Explore, curate, and enjoy music seamlessly with our user-friendly app.',
      tech: ['angular', 'CSS', 'firebase', 'git', 'Api'],
      img: '/assets/listen-up desktop.png',
      description:
        'Discover, curate, and enjoy music with our intuitive music app. Create playlists, explore diverse genres, track your listening history, and search for your favorite artists, albums, and songs. 🎧 Experience seamless playback through a user-friendly interface. Your perfect companion for a musical journey! 🚀 ',
      features: [
        '🎵 Create and manage playlists effortlessly.',
        '🎉 Explore a vast library of songs from various genres.',
        '📈 Track your listening history and preferences.',
        '🔍 Search for your favorite artists, albums, and songs.',
        '🎧 Seamless playback with a user-friendly interface.',
      ],
    },
    {
      name: 'DriveFinder',
      id: 'DriveFinder',
      link: 'https://drive-finder.vercel.app/',
      short: 'Streamlining car rentals based on your location for convenience.',
      tech: ['angular', 'CSS', 'firebase', 'git'],
      img: '/assets/drivefinder desktop.png',
      description:
        "DriveFinder is a web application that simplifies the process of finding and hiring cars based on user location. Whether you're planning a road trip, need a vehicle for a specific task, or just want to explore the city in style, DriveFinder has you covered.",
      features: [
        'Location-Based Search',
        'Diverse Fleet',
        'Real-Time Availability',
        'User-Friendly Interface',
        'Secure Booking',
      ],
    },
  ],
};

export const bookmarks = {
  frontend: [
    {
      name: 'svgl',
      link: 'https://svgl.vercel.app/',
      short: 'beautiful css',
      img: '/assets/image1.png', // Replace with actual image path
    },
    {
      name: 'Aceternty UI',
      link: 'https://ui.aceternity.com',
      short: 'beautiful css',
      img: '/assets/image2.png', // Replace with actual image path
    },
    {
      name: 'Aceternty UI',
      link: 'https://ui.aceternity.com',
      short: 'beautiful css',
      img: '/assets/image3.png', // Replace with actual image path
    },
  ],
  blog: [
    {
      name: 'Aceternty UI',
      link: 'https://ui.aceternity.com',
      short: 'beautiful css',
      img: '/assets/image4.png', // Replace with actual image path
    },
    {
      name: 'Aceternty UI',
      link: 'https://ui.aceternity.com',
      short: 'beautiful css',
      img: '/assets/image5.png', // Replace with actual image path
    },
    {
      name: 'Aceternty UI',
      link: 'https://ui.aceternity.com',
      short: 'beautiful css',
      img: '/assets/image6.png', // Replace with actual image path
    },
  ],
};
