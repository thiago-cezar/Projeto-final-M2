import Habit from "./Habit.models.js";


class criarModal {

    static criarNovoHabito() {

        let botaoCriar = document.querySelector('.botao_criar');
        let botaoFechar = document.getElementById('fechar_criarModal')

        botaoCriar.addEventListener('click', (e) => {
            e.preventDefault()
            console.log('estou funcionando')
            let modal = document.getElementById('criar_modal');

            modal.style.display = 'flex';

            let botaoInserir = document.getElementById('botaoInserir')

            botaoInserir.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('botaoFuncionando')
                let titulo = document.getElementById('titulo_criarModal');
                let descricao = document.getElementById('descricao_criarModal');
                let selecionar = document.getElementById('selecionar_categoriaHabito');

                let bodyNewHabit = {
                    titulo_habito: titulo.value,
                    descricao_habito: descricao.value,
                    categoria_habito: selecionar.value
                }

                Habit.criarHabito(novoHabito);
            })
        })

        botaoFechar.addEventListener('click', (e) => {
            e.preventDefault()

            let modal = document.getElementById('criar_modal');

            modal.style.display = 'none';
        })
    }

}
export default criarModal


