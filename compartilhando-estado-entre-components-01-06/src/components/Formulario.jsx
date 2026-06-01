export default function Formulario({ nome, setNome}){
    return(
        <>
            <input 
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite seu nome"    
            />
        </>
    )
}