const printer = [
    {
        step: 'Step 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, eius sit consectetur voluptate praesentium ipsa?',
        image: '/printer/pexels-cottonbro-studio-4123764.jpg'
    },
    {
        step: 'Step 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, eius sit consectetur voluptate praesentium ipsa?',
        image: '/printer/pexels-cottonbro-studio-4123764.jpg',
    
    },
    {
        step: 'Step 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, eius sit consectetur voluptate praesentium ipsa?',
        image: '/printer/pexels-cottonbro-studio-4123764.jpg'
    },
    {
        step: 'Step 4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, eius sit consectetur voluptate praesentium ipsa?',
        image: '/printer/pexels-cottonbro-studio-4123764.jpg'
    },
    {
        step: 'Step 5',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, eius sit consectetur voluptate praesentium ipsa?',
        image: '/printer/pexels-cottonbro-studio-4123764.jpg'
    },
   
    {
        step: 'Step 6',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, eius sit consectetur voluptate praesentium ipsa?',
        image: '/printer/pexels-cottonbro-studio-4123764.jpg'
    },
];


const container = document.querySelector('.printer-container');

let printerHTML = ''

printer.forEach(element =>{

    printerHTML += `
    <section class ='printer-section'>
        <div class ='title-container'>
            <h4>${element.step}</h4>
            <p>${element.description}</p>
        </div>
            <img src="${element.image}" alt="">
    </section>
    `
});

container.innerHTML = printerHTML;




