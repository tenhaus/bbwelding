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
    padding: '4rem'
  },

  title: {
    fontWeight: 500,
    marginBottom: '2rem'
  },

  topSection: {
    display: 'flex',
    justifyContent: 'space-between'
  },

  halfSection: {
    display: 'inline-block',
    width: '40%'
  },

  image: {
    marginRight: '1rem'
  }
}
