import '../styles/global.css';

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { TimeProvider } from '../contexts/TimeContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <TimeProvider>
        <Component {...pageProps} />
      </TimeProvider>
    </ChallengesProvider>
  );
}

export default MyApp
