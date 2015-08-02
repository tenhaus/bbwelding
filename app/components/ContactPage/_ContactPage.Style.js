export default {
  split: {
    display: 'flex',

    '@media (max-width: 768px)' : {
      flexDirection: 'column'
    }
  },

  left: {
    width: '30%',
    marginRight: '10%',

    '@media (max-width: 768px)' : {
      width: '100%'
    }
  },

  right: {
    width: '60%',

    '@media (max-width: 768px)' : {
      width: '100%'
    }
  }
};
