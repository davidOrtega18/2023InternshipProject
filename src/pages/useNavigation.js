import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useNavigation() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  return {
    name,
    setName,
    navigate,
  };
}
