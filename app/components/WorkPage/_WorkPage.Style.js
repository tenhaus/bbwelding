export default {
  split: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 768px)' : {
      display: 'block'
    }
  },

  project: {
    width: '40%',

    '@media (max-width: 768px)' : {
      width: '100%'
    }
  },

  projectImage: {
    border: '4px solid #fff',
    marginBottom: '1rem'
  },

  projectList: {
    listStyle: 'none',
    margin: 0,
    width: '40%',

    '@media (max-width: 768px)' : {
      display: 'none'
    }
  },

  mobileProjectList: {
    display: 'none',
    width: '100%',
    marginBottom: '2rem',
    '@media (max-width: 768px)' : {
      display: 'block'
    }
  },

  projectItem: {
    cursor: 'pointer',
    margin: '0.2rem'
  },

  currentProjectListItem: {
    color: '#FF5D5D'
  }
};
