import { useState } from "react";

export function RederizacaoCondicional() {
  const [signed, setSigned] = useState(false);

  return (
    <div>
      <div className='border rounded m-3 p-2'>

        <h3 className="mt-1">Renderização Condicional</h3><hr />

        <button className='btn btn-outline-light mt-2 mb-2 m-1' onClick={() => setSigned(true)}>Entrar</button>
        <button className='btn btn-outline-light mt-2 mb-2 m-1' onClick={() => setSigned(false)}>Sair</button>

        <div className="m-3">
          {signed ? (<div><h4>Bem vindo, Henrique!</h4><p className='text-success'>Usuário online</p></div>) : (<h4>Visitante</h4>)}
        </div>

      </div>
    </div>
  )
}