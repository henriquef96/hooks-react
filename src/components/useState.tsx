import { useState } from 'react'

// Tipando os dados das informações
interface infoProps {
    nome: string;
    idade: number;
}

export function UseState() {
    // Constante para capturar os dados dos inputs
    const [inputNome, setInputNome] = useState("");
    const [inputIdade, setInputIdade] = useState<number>(0);
    // Constante para setar os dados dos inputs
    const [info, setInfo] = useState<infoProps>();
    // Função para mostrar as informações
    function mostrarInfos() {
        setInfo({
            nome: inputNome,
            idade: inputIdade,
        });
    }

    return (
        <div>
            <div className='border rounded m-3 p-2'>
                <h3 className='mt-1'>Use State</h3><hr />

                <div className='d-flex
                justify-content-center p-1'>

                    <div className='col-7 d-flex flex-column border rounded p-2 m-1 '>

                        <label>Digite seu nome: </label>
                        <input className='mt-1 mb-2' type="text" placeholder="Digite seu nome..." value={inputNome} onChange={(event => setInputNome(event.target.value))} />

                        <label>Digite sua idade: </label>
                        <input className='mt-1 mb-2' type="number" value={inputIdade} onChange={(event => setInputIdade(parseInt(event.target.value)))} />
                    </div>

                    <div className='col-5 d-flex flex-column border rounded p-3 m-1 justify-content-center'>
                        <button className='mb-3 btn btn-primary' onClick={mostrarInfos}>Consultar</button>
                        <span>Bem vindo: {info?.nome}</span>
                        <span>Sua idade é: {info?.idade}</span>
                    </div>

                </div>
            </div>
        </div>
    )
}