import HandsImage from './images/hands.jpg';
import HandsImageRetina from './images/hands@2x.jpg';
import isRetina from 'is-retina';

var backgroundImage = isRetina()? 'url('+HandsImageRetina+')': 'url('+HandsImage+')';


export default {
  base: {
    height: '100%',
    backgroundImage: backgroundImage,
    backgroundSize: 'cover'
  },

  contentWrapper: {
    color: '#fff',
    height: '100%'
  },

  content: {
    backgroundColor: 'rgba(0,0,0,.5)',
    minHeight: '400px',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '4rem'
  },

  title: {
    fontWeight: 500
  },

  project: {
    width: '50%'
  },

  projectImage: {
    border: '4px solid #fff',
    marginBottom: '1rem'
  },

  projectList: {
    listStyle: 'none',
    marginTop: '5rem',
  },

  projectItem: {
    cursor: 'pointer',
    margin: '0.2rem'
  },

  currentProjectListItem: {
    color: '#FF5D5D'
  }
};
