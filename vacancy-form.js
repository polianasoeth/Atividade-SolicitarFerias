class VacancyForm extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement('template')
        fetch('vacancy-form.html')
            .then(res => res.text())
            .then(html => {
                template.innerHTML = html
                this.shadowRoot.appendChild(template.content.cloneNode(true))
                this.shadowRoot.querySelector('button').onclick = this.solicitarFerias
            })
        this.attachShadow({ mode: 'open' })

    }

    /**
     * Busca o formulário no DOM - 24 e 25
     * Busca o valor dos campos do formulário - 26 a 28
     * Invalida o formulário no DOM - 29 e 30
     * Cria um elemento para renderizar a carta de férias - 31
     * Adiciona a carta de férias no DOM - 32
     */
    solicitarFerias() {
        const vacancyForm = document.querySelector('vacancy-form');
        const vacancyFormShadowRoot = vacancyForm && vacancyForm.shadowRoot;
        const employeeName = vacancyFormShadowRoot.getElementById('campo-nome-colaborador').value
        const startDate = new Date(vacancyFormShadowRoot.getElementById('campo-data-inicio').value).toLocaleDateString()
        const endDate = new Date(vacancyFormShadowRoot.getElementById('campo-data-termino').value).toLocaleDateString()
        const parentElement = vacancyForm.parentElement
        parentElement.removeChild(vacancyForm)
        const vacancyMessage = this.createVacancyMessage(employeeName, startDate, endDate)
        parentElement.appendChild(vacancyMessage)
    }

    /**
     * Cria um elemento com a tag HTML vacancy-message
     * Insere os atributos necessários para formatar a mensagem da carta de férias
     * @param {string} employeeName Nome do colaborador
     * @param {string} startDate Data de início 
     * @param {string} endDate Data de término
     */
    createVacancyMessage(employeeName, startDate, endDate) {
        const vacancyMessage = document.createElement('vacancy-message')
        vacancyMessage.setAttribute('employeeName', employeeName)
        vacancyMessage.setAttribute('startDate', startDate)
        vacancyMessage.setAttribute('endDate', endDate)
        return vacancyMessage
    }
}
customElements.define('vacancy-form', VacancyForm)