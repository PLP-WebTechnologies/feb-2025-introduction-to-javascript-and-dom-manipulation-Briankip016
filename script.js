// script.js
// Text content modification
function updateTextContent() {
    const target = document.getElementById('targetElement');
    target.textContent = 'Updated text content dynamically!';
}

// Style modification
function modifyStyles() {
    const mainSection = document.querySelector('main');
    mainSection.style.backgroundColor = '#f0f8ff';
    mainSection.style.padding = '2rem';
    mainSection.style.borderRadius = '8px';
}

// Element creation/removal
let elementExists = false;

function toggleDynamicElement() {
    const container = document.getElementById('dynamicContainer');
    
    if (!elementExists) {
        const newElement = document.createElement('p');
        newElement.textContent = 'Dynamically created element';
        newElement.className = 'dynamic-text';
        container.appendChild(newElement);
        elementExists = true;
    } else {
        container.innerHTML = '';
        elementExists = false;
    }
}

// Event listeners
document.getElementById('styleButton').addEventListener('click', modifyStyles);
document.getElementById('toggleElement').addEventListener('click', toggleDynamicElement);

// Initial setup
window.addEventListener('DOMContentLoaded', () => {
    updateTextContent();
});
