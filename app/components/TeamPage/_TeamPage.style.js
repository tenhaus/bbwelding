import HandsImage from './images/hands.jpg';
import HandsImageRetina from './images/hands@2x.jpg';
import isRetina from 'is-retina';

var backgroundImage = isRetina()? 'url('+HandsImageRetina+')': 'url('+HandsImage+')';

export default {

  base: {
    color: '#fff',
    backgroundImage: backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },

  content: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,.5)',
    padding: '4rem',
  },

  title: {
    fontWeight: 'normal',
    marginBottom: '2rem'
  },

  teamList: {
    listStyle: 'none',
    marginTop: '5rem'
  },

  profile: {
    width: '50%'
  },

  profileImage: {
    border: '4px solid #fff',
    marginBottom: '2rem',
    width: '100%',
    height: 'auto'
  }

};
