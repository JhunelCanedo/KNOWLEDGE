const list = [
    {
        link: 'links/print.html',
        title: 'Print Tutorial',
        image: '/images/pexels-athena-2582931.jpg',
        
    },

    {
        link: 'links/wet.html',
        title: 'Wet Tutorial',
        image: '/images/pexels-azamat-esenaliev-117729.jpg'
    },

    {
        link: 'links/print.html',
        title: 'Website Tutorial',
        image: '/images/pexels-blaz-erzetic-2628105.jpg'
    },

    {
        link: 'links/camera.html',
        title: 'Camera Tutorial',
        image: 'images/pexels-valentine-tanasovich-2588757.jpg'
    },

];
const menu = document.querySelector('.menu-list');

let html = '';

list.forEach((element) => {

    html += `
    
    <a href='${element.link}' class='element'>
        <img src="${element.image}"   alt="" >
        <p class='title'>${element.title}</p>
    </a>
    `
})

menu.innerHTML = html;

