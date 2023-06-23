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
                const todayDate = new Date().toLocaleDateString()
                const employeeNameStrong = this.shadowRoot.getElementById('employeeName')
                const startDateStrong = this.shadowRoot.getElementById('startDate')
                const endDateStrong = this.shadowRoot.getElementById('endDate')
                const attStrong = this.shadowRoot.getElementById('employeeName')
                const todayDateStrong = this.shadowRoot.getElementById('todayDate')
                employeeNameStrong.innerText=employeeName
                startDateStrong.innerText=startDate
                endDateStrong.innerText=endDate
                attStrong.innerText=employeeName
                todayDateStrong.innerText=todayDate
                

               
                this.shadowRoot.querySelector('button').onclick = this.goToVacancyForm
            })

        const vacancyMessage = `Caro(a) responsável 
        Gostaria de solicitar minhas férias: 
        Nome do Colaborador: ${employeeName} 
        Data de inicio: ${startDate}
        Data de fim: ${endDate}
        Agradeço a atenção
        Atenciosamente, ${employeeName}
        Gerado em ${todayDate}
        `
        
    }

    goToVacancyForm() {
        const vacancyMessage = document.querySelector('vacancy-message');
        const vacancyMessageShadowRoot = vacancyMessage && vacancyMessage.shadowRoot;
        vacancyMessageShadowRoot.innerHTML = `<vacancy-form></vacancy-form>`

    }
}
customElements.define('vacancy-message', VacancyMessage)