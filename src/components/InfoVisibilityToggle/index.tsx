import React from "react";
import { Button } from "reactstrap";
import { useAppContext } from "../../context/AppContext";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const InfoVisibilityToggle: React.FC = () => {
  const { isSensitiveInfoVisible, toggleSensitiveInfoVisibility } =
    useAppContext();

  const TAMANHO_ICONE = 32;

  return (
    <Button
      onClick={toggleSensitiveInfoVisibility}
      className="p-0 m-0 bg-transparent border-0 text-white"
    >
      {isSensitiveInfoVisible ? (
        <AiFillEyeInvisible size={TAMANHO_ICONE} />
      ) : (
        <AiFillEye size={TAMANHO_ICONE} />
      )}
    </Button>
  );
};

export default InfoVisibilityToggle;
