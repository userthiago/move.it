import '../styles/global.css';

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ProfileProvider } from '../contexts/ProfileContext';

function MyApp({ Component, pageProps }) {
  return (
    <ProfileProvider>
      <ChallengesProvider>
        <CountdownProvider>
          <Component {...pageProps} />
        </CountdownProvider>
      </ChallengesProvider>
    </ProfileProvider>
  );
}

export default MyApp
