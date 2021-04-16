const accordions = document.querySelectorAll('.accordion')
const panels = document.querySelectorAll('.panel');

function toggleAccordion() {
    let state = this.classList.contains('active');
    const ownPanel = this.nextElementSibling;
    console.dir(this);

    if(!state) {
        this.classList.add('active');
        this.firstElementChild.style.transform = 'rotate(180deg)';
        ownPanel.style.display = 'block';
    }
    else {
        this.classList.remove('active');
        this.firstElementChild.style.transform = '';   
        ownPanel.style.display = 'none';
    }
}

function openAccordion() {
    const ownPanel = this.nextElementSibling;
    this.classList.add('active');
    this.firstElementChild.style.transform = 'rotate(180deg)';
    ownPanel.style.display = 'block';
}

function closeAccordion() {
    const ownPanel = this.nextElementSibling;
    this.classList.remove('active');
    this.firstElementChild.style.transform = '';   
    ownPanel.style.display = 'none';
}

accordions.forEach(element => element.addEventListener('click', toggleAccordion));