// only for develop. Needed for twig watcher:
if (process.env.NODE_ENV === 'development') {
    require('../index.twig');
}

// Utils
import './utils/avifWebp';

// Plugins
import slick from 'slick-carousel'; // eslint-disable-line
import 'select2';

// global style file
import '../scss/style.scss';

// other scripts
import './components/header';
import './components/menu';
import './components/goToTop';
import './components/blog';
import './components/testimonials';
import './components/hero';
import './components/latest';
import './components/tabs';
