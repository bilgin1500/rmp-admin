const config = {
  ITEMS_PER_PAGE: 20,
  CURRENT_USER: 'admin',
  CONSOLELOG_ACTIONS: false
};

const colors = {
  base1: '#002b36',
  base2: '#839496',
  base3: '#073642',
  base4: '#93a1a1',
  base5: '#657b83',
  base6: '#fdf6e3',
  base7: '#b9c567',
  base8: '#3b420a',
  base9: '#a9b55b',
  base10: '#9a3b3b'
};

const accounts = [
  {
    name: 'Bandcamp',
    methods: [
      {
        slug: 'search',
        name: 'Search Bandcamp',
        valid_for: ['artists', 'albums', 'tracks'],
        cronable: false
      }
    ]
  },
  {
    name: 'Facebook',
    methods: [
      {
        slug: 'search',
        name: 'Search Facebook',
        valid_for: ['artists'],
        cronable: false
      }
    ]
  },
  {
    name: 'Instagram',
    methods: [
      {
        slug: 'search',
        name: 'Search Instagram',
        valid_for: ['artists'],
        cronable: false
      },
      {
        slug: 'get',
        name: 'Get Photos',
        valid_for: ['artists'],
        cronable: true
      }
    ]
  },
  {
    name: 'MusicBrainz',
    methods: [
      {
        slug: 'search',
        name: 'Search MusicBrainz',
        valid_for: ['artists', 'albums', 'tracks'],
        cronable: false
      }
    ]
  },
  {
    name: 'Songkick',
    methods: [
      {
        slug: 'search',
        name: 'Search Songkick',
        valid_for: ['artists'],
        cronable: false
      },
      {
        slug: 'get',
        name: 'Get Events',
        valid_for: ['artists'],
        cronable: true
      }
    ]
  },
  {
    name: 'Soundcloud',
    methods: [
      {
        slug: 'search',
        name: 'Search Soundcloud',
        valid_for: ['artists', 'albums', 'tracks'],
        cronable: false
      }
    ]
  },
  {
    name: 'Spotify',
    methods: [
      {
        slug: 'search',
        name: 'Search Spotify',
        valid_for: ['artists', 'albums', 'tracks'],
        cronable: false
      },
      {
        slug: 'get',
        name: 'Get Artist, Album & Tracks',
        valid_for: ['artists'],
        cronable: false
      },
      {
        slug: 'get',
        name: 'Get Album & Tracks',
        valid_for: ['albums'],
        cronable: false
      }
    ]
  },
  {
    name: 'Twitter',
    methods: [
      {
        slug: 'search',
        name: 'Search Twitter',
        valid_for: ['artists'],
        cronable: false
      },
      {
        slug: 'get',
        name: 'Get Tweets',
        valid_for: ['artists'],
        cronable: true
      }
    ]
  },
  {
    name: 'Youtube',
    methods: [
      {
        slug: 'search',
        name: 'Search Youtube',
        valid_for: ['artists', 'albums', 'tracks'],
        cronable: false
      }
    ]
  }
];

/*const mediaTypes = ['text', 'image', 'audio', 'video'];

const mediaCategories = [
  'album_cover',
  'about',
  'bio',
  'copyright',
  'credits',
  'label',
  'preview',
  'profile_photo',
  'track'
];*/

const navStructure = [
  {
    name: 'Manage',
    path: '/manage',
    items: [
      {
        name: 'Music',
        items: [
          {
            name: 'All Artists',
            path: '/manage/artists'
          },
          {
            name: 'Selected Artists',
            path: '/manage/artists?isSelected=1'
          },
          {
            name: 'Not Selected Artists',
            path: '/manage/artists?isSelected=0'
          },
          {
            name: '[+] Add new Artist',
            path: '/manage/artist/add'
          }
        ]
      },
      {
        name: 'Playlists',
        items: [
          {
            name: 'All Playlists',
            path: '/manage/playlists'
          }
        ]
      },
      {
        name: 'Settings',
        items: [
          {
            name: 'Panel settings',
            path: '/manage/panel-settings'
          },
          {
            name: 'Server settings',
            path: '/manage/server-settings'
          }
        ]
      }
    ]
  },
  {
    name: 'Crawl',
    path: '/crawl',
    items: [
      {
        name: 'Bandcamp',
        items: [
          {
            name: 'Crawl tag pages',
            path: '/crawl/bandcamp/tag-pages'
          }
        ]
      }
    ]
  }
];

export { config, navStructure, colors, accounts };
