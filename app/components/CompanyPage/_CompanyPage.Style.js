export default {

  topSection: {
    display: 'flex',
    justifyContent: 'space-between',

    '@media (max-width: 768px)' : {
      flexDirection: 'column-reverse'
    }
  },

  halfSection: {
    width: '45%',

    '@media (max-width: 768px)' : {
      width: '100%'
    }
  },

  videoBox: {
    marginTop: '1rem',
    
    '@media (max-width: 768px)' : {
      marginTop: '0rem'
    }
  },

  halfDetail: {
    height: 75,
    marginBottom: '4rem',
  },

  image: {
    marginRight: '1rem',
    float: 'left'
  },

  flameText: {
    paddingTop: '1.5rem'
  },

  machineText: {
    paddingTop: '1.4rem'
  },
}
