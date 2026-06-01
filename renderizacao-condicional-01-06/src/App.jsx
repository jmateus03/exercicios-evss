export default function App(){
  const logado = true
  
  return(
    <>
      {logado
        ? <h2>Bem-vindo!</h2> //valor verdadeiro
        : <h2>Faça login.</h2> //valor falos
      }
    </>
  )
}