import '../styles/global.css';

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ProfileProvider } from '../contexts/ProfileContext';
import { MenuProvider } from '../contexts/MenuContext';

function MyApp({ Component, pageProps }) {
  return (
    <ProfileProvider>
        <ChallengesProvider>
          <CountdownProvider>
            <MenuProvider>
              <Component {...pageProps} />
            </MenuProvider>
          </CountdownProvider>
        </ChallengesProvider>
    </ProfileProvider>
  );
}

export default MyApp
