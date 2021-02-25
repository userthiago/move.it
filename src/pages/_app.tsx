import '../styles/global.css';

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { TimeProvider } from '../contexts/TimeContext';
import { ProfileProvider } from '../contexts/ProfileContext';

function MyApp({ Component, pageProps }) {
  return (
    <ProfileProvider>
      <ChallengesProvider>
        <TimeProvider>
          <Component {...pageProps} />
        </TimeProvider>
      </ChallengesProvider>
    </ProfileProvider>
  );
}

export default MyApp
