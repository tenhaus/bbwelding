export default {
  split: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 768px)' : {
      display: 'block'
    }
  },

  newsDate: {
    fontSize: '1rem',
    fontStyle: 'italic',
    fontWeight: '300',
    marginTop: '0.5rem',
    marginBottom: '0.5rem'
  },

  newsList: {
    listStyle: 'none',
    margin: 0,
    width: '40%',

    '@media (max-width: 768px)' : {
      display: 'none'
    }
  },

  mobileNewsList: {
    display: 'none',
    width: '100%',
    marginBottom: '2rem',
    '@media (max-width: 768px)' : {
      display: 'block'
    }
  },

  newsItem: {
    cursor: 'pointer',
    margin: '0.2rem'
  },

  currentNewsListItem: {
    color: '#FF5D5D'
  },

  imageSection: {
    width: '40%',

    '@media (max-width: 768px)' : {
      width: '100%'
    }
  },
  newsImage: {
    border: '4px solid #fff',
    marginBottom: '2rem',
    width: '100%',
    height: 'auto'
  },
  newsSection: {
    width: '55%',

    '@media (max-width: 768px)' : {
      width: '100%'
    }
  }
};
