export default {

  topSection: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    '@media (max-width: 768px)' : {
      flexDirection: 'column-reverse'
    }
  },

  split: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 768px)' : {
      display: 'block'
    }
  },

  teamList: {
    listStyle: 'none',
    margin: '0',
    padding: '1rem',
    border: '1px solid #fff',
    '@media (max-width: 768px)' : {
      display: 'none'
    }
  },

  mobileTeamList: {
    width: '100%',
    marginTop: '1rem',
    marginBottom: '2rem',
    display: 'none',

    '@media (max-width: 768px)' : {
      display: 'block'
    }
  },

  profile: {
    width: '70%',
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
