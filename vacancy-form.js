class VacancyForm extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement('template')
        template.innerHTML = `<form class="vacancy-form">
    
        <h1><strong>Solicitação de Férias</strong></h1>
    
        <div class="input-area">
            <label class="employee-name-label" for="Nome Colaborador"><strong>Nome do colaborador</strong></label><input id="campo-nome-colaborador" type="text" placeholder="Nome completo" />
            <span id="error-nome" class="texto-erro" hidden >Nome é obrigatório</span>
        </div>
    
        <div class="flex-container"> 
    
            <div class="flex-item"><label for="Data Inicio"><strong>Data de início</strong></label><input id="campo-data-inicio" type="date" placeholder="dd-mm-aaaa" /></div> 
            <span id="error-data-inicio" class="data-erro" hidden >Data de inicio é obrigatória!</span>
    
            <div class="flex-item"><label for="Data Termino"><strong>Data de término</strong></label><input id="campo-data-termino" type="date" placeholder="dd-mm-aaaa" /></div> 
            <span id="error-data-termino" class="data-erro" hidden >Data do término é obrigatória!</span>
    
        </div>
    
                  
        <button class="styled" type="button" onclick="solicitarFerias()">Gerar Solicitação</button>
    
    </form>    `
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    solicitarFerias() {
        const employeeName = document.getElementById('campo-nome-colaborador').value
        const startDate = document.getElementById('campo-data-inicio').value
        const endDate = document.getElementById('campo-data-termino').value
        this.shadowRoot.innerHTML = `<vacancy-message employeeName="${employeeName}" startDate="${startDate}" endDate="${endDate}"></vacancy-message>`
    }
}
customElements.define('vacancy-form', VacancyForm)