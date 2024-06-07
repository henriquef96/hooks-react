import { useRef, useState } from "react";

export function UseRef() {
    // Criação da referência
    const box = useRef<HTMLDivElement>(null);

    // Array de classes de cores do Bootstrap
    const colors = ['bg-light', 'bg-success', 'bg-primary', 'bg-warning', 'bg-danger'];

    // Estado para manter o índice da cor atual
    const [colorIndex, setColorIndex] = useState(0);

    // Função para mudar a cor do box
    function mudaCor() {
        if (box.current) {
            // Remover a cor atual
            box.current.classList.remove(colors[colorIndex]);

            // Calcular o próximo índice
            const nextIndex = (colorIndex + 1) % colors.length;

            // Adicionar a nova cor
            box.current.classList.add(colors[nextIndex]);

            // Atualizar o índice da cor atual
            setColorIndex(nextIndex);
        }
    }

    return (
        <div>
            <div className='border rounded m-3 p-2'>

                <h3 className="mt-1">Use Ref</h3><hr />

                <button className='btn btn-primary mt-2 mb-3' onClick={mudaCor}>Mudar Cor</button>

                <div className="d-flex justify-content-center">
                    <div className='bg-light rounded mt-1 mb-3 p-1 w-50 ' ref={box}>&nbsp;</div>
                </div>

            </div>
        </div>
    )
}