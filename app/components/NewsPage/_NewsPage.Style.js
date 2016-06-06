export default {
  split: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 768px)' : {
      display: 'block'
    }
  },

  newsDate: {
    fontSize: '0.5rem',
    fontStyle: 'italic',
    fontWeight: '600',
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
  }
};
