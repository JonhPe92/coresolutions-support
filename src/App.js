
import { Toaster } from 'react-hot-toast';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/scroll-to-top';
import { StyledChart } from './components/chart';



// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <Toaster position='bottom-center'/>
      <ScrollToTop />
     
      <Router />
    </ThemeProvider>
  );
}