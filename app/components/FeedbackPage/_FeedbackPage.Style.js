export default {
  split: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 768px)' : {
      display: 'block'
    }
  },
  image: {
    width: '30%',
    height: 'auto',
    '@media (max-width: 768px)' : {
      maxWidth: '100%'
    }
  },
  content: {
    maxWidth: '60%',
    lineHeight: '1.4rem',
    '@media (max-width: 768px)' : {
      maxWidth: '100%'
    }
  },

  formContent: {
    marginTop: '3rem'
  },

  lineHead: {
    fontWeight: 'bold',
    marginRight: '3rem'
  },

  button: {
    color: '#000'
  },

  errorContent: {
    color: '#FF5D5D'
  },

  confirmation: {
    marginTop: '3rem'
  },

};
