export default {
  base: {
    height: '100%',
    fontWeight: '300'
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

  title: {
    fontWeight: 500,
    marginBottom: '2rem'
  },

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
