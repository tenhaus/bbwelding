export default {

  base: {
    color: '#fff',
  },

  content: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,.5)',
    padding: '4rem',
  },

  title: {
    fontWeight: 'normal',
    marginBottom: '2rem'
  },

  teamList: {
    listStyle: 'none',
    marginTop: '5rem',

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
