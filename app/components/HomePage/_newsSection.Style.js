export default {

  topSection: {
    display: 'flex',
    justifyContent: 'space-between',

    '@media (max-width: 768px)' : {
      flexDirection: 'column-reverse'
    }
  },

  fullSection: {
    width: '100%',

    '@media (max-width: 768px)' : {
      width: '100%'
    }
  },

  base: {
    height: '100%'
  },

  contentWrapper: {
    color: '#fff',
    height: '100%'
  },

}
