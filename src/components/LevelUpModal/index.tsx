import React, { useContext } from 'react';
import { ProfileContext } from '../../contexts/ProfileContext';

import { Container } from './styles';

const LevelUpModal: React.FC = () => {
  const { level, closeLevelUpModal } = useContext(ProfileContext);

  return (
    <Container>
      <div className="modal">
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>
        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal"/>
        </button>
      </div>
    </Container>
  );
}

export default LevelUpModal;