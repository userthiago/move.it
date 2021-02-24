import { useState } from "react";
import Button from "../components/Button";
import ExperienceBar from "../components/ExperienceBar";

export default function Home() {
  const maxExperience = 300;
  const [experience, setExperience] = useState(0);

  const addExperience = (experienceToAdd: number) => {
    if(maxExperience >= experience + experienceToAdd) {
      setExperience(experience + experienceToAdd);
    }
  }
  
  return (
    <div className="container">
      <ExperienceBar maxExperience={maxExperience} actualExperience={experience} />
      <Button type="button" onClick={() => addExperience(50)}>Adicionar 50 de experiência</Button>
    </div>
  );
}
