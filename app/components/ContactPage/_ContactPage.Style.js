export default {
  base: {
    height: '100%'
  },

  contentWrapper: {
    color: '#fff',
    height: '100%'
  },

  content: {
    backgroundColor: 'rgba(0,0,0,.6)',
    minHeight: '400px',
    height: '100%',
    padding: '4rem'
  },

  split: {
    display: 'flex',

    '@media (max-width: 768px)' : {
      flexDirection: 'column'
    }
  },

  title: {
    fontWeight: 500
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
