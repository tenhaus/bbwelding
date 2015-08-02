export default {

  split: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 768px)' : {
      display: 'block'
    }
  },

  teamList: {
    listStyle: 'none',

    '@media (max-width: 768px)' : {
      display: 'none'
    }
  },

  mobileTeamList: {
    width: '100%',
    marginBottom: '2rem',
    display: 'none',

    '@media (max-width: 768px)' : {
      display: 'block'
    }
  },

  profile: {
    width: '50%',

    '@media (max-width: 768px)' : {
      width: '100%'
    }
  },

  profileImage: {
    border: '4px solid #fff',
    marginBottom: '2rem',
    width: '100%',
    height: 'auto'
  }

};
