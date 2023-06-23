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
        const startDate = vacancyFormShadowRoot.getElementById('campo-data-inicio').value
        const endDate = vacancyFormShadowRoot.getElementById('campo-data-termino').value
        vacancyFormShadowRoot.innerHTML = `<vacancy-message employeeName="${employeeName}" startDate="${startDate}" endDate="${endDate}"></vacancy-message>`
    }
}
customElements.define('vacancy-form', VacancyForm)