class VacancyMessage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        const employeeName = this.getAttribute('employeeName')
        const startDate = this.getAttribute('startDate')
        const endDate = this.getAttribute('endDate')
        const todayDate = new Date().toLocaleDateString()
        const vacancyMessage = `Caro(a) responsável 
        Gostaria de solicitar minhas férias: 
        Nome do Colaborador: ${employeeName} 
        Data de inicio: ${startDate}
        Data de fim: ${endDate}
        Agradeço a atenção
        Atenciosamente, ${employeeName}
        Gerado em ${todayDate}
        `
        this.shadowRoot.innerHTML = vacancyMessage
    }
}
customElements.define('vacancy-message', VacancyMessage)