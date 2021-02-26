import React, { ChangeEvent, useEffect, useState } from 'react';
import Input from '../Input';

import { Container, FormButton } from './styles';

const RegisterModal: React.FC = () => {
  const [modalState, setModalState] = useState(true);
  const [actualStep, setActualStep] = useState(0);
  const [githubUsername, setGithubUsername] = useState('');
  const [countdownTimer, setCountdownTimer] = useState('');

  function changeStep() {
    if(actualStep === 0) {
      setActualStep(1);
    }
    if(actualStep === 1) {
      setModalState(false);
    }
  }

  function changeGithubValue(e: ChangeEvent<HTMLInputElement>) {
    setGithubUsername(e.target.value);
  }

  function countdownTimerValue(e: ChangeEvent<HTMLInputElement>) {
    setCountdownTimer(e.target.value);
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
    }
  }, []);

  if(!modalState) {
    return <></>;
  }

  return (
    <Container>
      <div className="modal__steps-box">
        <div className="steps-box__ball-group">
          <span className={`ball-group__ball ${actualStep === 0 ? 'ball-group__ball--active' : ''}`} />
          <span className={`ball-group__ball ${actualStep === 1 ? 'ball-group__ball--active' : ''}`} />
        </div>
        <form className="steps-box__form">
          <div className={`form__step ${actualStep === 0 ? 'form__step--active' : ''}`}>
            <img src="/developer.svg" alt="Imagem de um desenvolvedor"/>
            <strong>Vamos criar um perfil</strong>
            <p>Insira o seu usuário do Github ou selecione o perfil de convidado para entrar sem se identificar</p>
            <Input id="github-username" placeholder="Usuário do github" value={githubUsername} changeValueFunction={changeGithubValue} />
            <FormButton color="--blue" type="button" onClick={changeStep}>Entrar com o Github</FormButton>
            <FormButton type="button" onClick={changeStep}>Entrar como convidado</FormButton>
          </div>
          <div className={`form__step ${actualStep === 1 ? 'form__step--active' : ''}`}>
            <Input id="tempo-ciclo" placeholder="Tempo do ciclo" value={countdownTimer} changeValueFunction={countdownTimerValue}/>
            <FormButton color="--blue" type="button" onClick={changeStep}>Sair</FormButton>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default RegisterModal;