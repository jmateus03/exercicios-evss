export default function App(){
  const alunos = ["Ana", "mateus lindo", "Carlos", "Pedro", "John", "maria"]
  
  return(
    <>
    <ul>
      {
        alunos.map((aluno, index) =>(
          <li key={index}>{aluno}</li>
        ))
      }
    </ul>
    </>
  )
}