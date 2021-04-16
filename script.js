const accordions = document.querySelectorAll('.accordion')
const panels = document.querySelectorAll('.panel');

function toggleAccordion() {
    let state = this.classList.contains('active');
    const activeSibling = Array.from(this.parentElement.children).filter(e => e.classList.contains('active'));
    
    if(!state) {
        openAccordion(this);
        if(activeSibling.length !== 0) closeAccordion(activeSibling[0]);
    }
    else closeAccordion(this);
}

function openAccordion(element) {
    const ownPanel = element.nextElementSibling;
    element.classList.add('active');
    element.firstElementChild.style.transform = 'rotateX(180deg)';
    ownPanel.style.maxHeight = `${ownPanel.scrollHeight}px`;
}

function closeAccordion(element) {
    const ownPanel = element.nextElementSibling;
    element.classList.remove('active');
    element.firstElementChild.style.transform = '';   
    ownPanel.style.maxHeight = '0';
}

accordions.forEach(element => element.addEventListener('click', toggleAccordion));