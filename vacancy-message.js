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
                const todayDate = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric'})
                const employeeNameStrong = this.shadowRoot.getElementById('employeeName')
                const startDateStrong = this.shadowRoot.getElementById('startDate')
                const endDateStrong = this.shadowRoot.getElementById('endDate')
                const attStrong = this.shadowRoot.getElementById('attEmployeeName')
                const todayDateStrong = this.shadowRoot.getElementById('todayDate')
                employeeNameStrong.innerText=employeeName
                startDateStrong.innerText=startDate
                endDateStrong.innerText=endDate
                attStrong.innerText=employeeName
                todayDateStrong.innerText=todayDate



                this.shadowRoot.querySelector('button').onclick = this.goToVacancyForm 
            })

    }

    goToVacancyForm() {
        const vacancyMessage = document.querySelector('vacancy-message');
        const parentElement = vacancyMessage.parentElement
        parentElement.removeChild(vacancyMessage)
        const vacancyForm = document.createElement('vacancy-form')
        parentElement.appendChild(vacancyForm)

    }
}
customElements.define('vacancy-message', VacancyMessage)