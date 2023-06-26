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

    solicitarFerias() {
        const vacancyForm = document.querySelector('vacancy-form');
        const vacancyFormShadowRoot = vacancyForm && vacancyForm.shadowRoot;
        const employeeName = vacancyFormShadowRoot.getElementById('campo-nome-colaborador').value
        const startDate = new Date(vacancyFormShadowRoot.getElementById('campo-data-inicio').value).toLocaleDateString()
        const endDate = new Date(vacancyFormShadowRoot.getElementById('campo-data-termino').value).toLocaleDateString()
        const parentElement = vacancyForm.parentElement
        parentElement.removeChild(vacancyForm)
        const vacancyMessage = document.createElement('vacancy-message')
        vacancyMessage.setAttribute('employeeName', employeeName)
        vacancyMessage.setAttribute('startDate', startDate)
        vacancyMessage.setAttribute('endDate', endDate)
        parentElement.appendChild(vacancyMessage)
    }
}
customElements.define('vacancy-form', VacancyForm)