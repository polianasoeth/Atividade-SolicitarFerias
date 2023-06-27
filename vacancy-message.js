class VacancyMessage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        fetch('vacancy-message.html')
            .then(res => res.text())
            .then(html => {
                this.shadowRoot.innerHTML = html
                const employeeName = this.getAttribute('employeeName')
                const startDate = this.getAttribute('startDate')
                const endDate = this.getAttribute('endDate')
                this.setInnerTextInStrongElements(employeeName, startDate, endDate)
                this.shadowRoot.querySelector('button').onclick = this.goToVacancyForm
            })

    }

    /**
     * Invalida a carta de férias no DOM - 27 a 29
     * Cria o formulário - 30
     * Adiciona o formulário no DOM - 31
     */
    goToVacancyForm() {
        const vacancyMessage = document.querySelector('vacancy-message');
        const parentElement = vacancyMessage.parentElement
        parentElement.removeChild(vacancyMessage)
        const vacancyForm = document.createElement('vacancy-form')
        parentElement.appendChild(vacancyForm)

    }

    /**
     * Busca os elementos onde será inserido os atributos - 44 a 48
     * Insere o valor dos atributos como conteúdo interno desses elementos - 49 a 53
     * @param {string} employeeName Nome do Colaborador
     * @param {string} startDate Data de início
     * @param {string} endDate Data de término
     */
    setInnerTextInStrongElements(employeeName, startDate, endDate) {
        const todayDate = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
        const employeeNameStrong = this.shadowRoot.getElementById('employeeName')
        const startDateStrong = this.shadowRoot.getElementById('startDate')
        const endDateStrong = this.shadowRoot.getElementById('endDate')
        const attStrong = this.shadowRoot.getElementById('attEmployeeName')
        const todayDateStrong = this.shadowRoot.getElementById('todayDate')
        employeeNameStrong.innerText = employeeName
        startDateStrong.innerText = startDate
        endDateStrong.innerText = endDate
        attStrong.innerText = employeeName
        todayDateStrong.innerText = todayDate
    }
}
customElements.define('vacancy-message', VacancyMessage)