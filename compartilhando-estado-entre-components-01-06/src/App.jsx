import { useState } from "react"
import Formulario from "./components/Formulario"
import Perfil from "./components/Perfil"

export default function App() {
  const [nome, setNome] = useState("")
  
  return (
    <>
      <Perfil nome={nome} />
      <Formulario 
        nome={nome}
        setNome={setNome}
      />
    </>
  )
}
