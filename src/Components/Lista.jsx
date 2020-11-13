import lista from '../Services/dados'

const Lista = () => {
    return (
        <div>
            {lista.map(lista =>
                <div key={lista.id}>
                    <h2>{lista.nome}</h2>
                    <img width={180} src={lista.imagem} alt='capa de série'/>
                    <p>{lista.descricao}</p>
                </div>
            )}
        </div>
    )
}

export default Lista