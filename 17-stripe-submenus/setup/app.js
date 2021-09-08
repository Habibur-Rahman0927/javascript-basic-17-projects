import sublinks from './data.js';

const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const sideWapper = document.querySelector('.sidebar-wrapper');
const sidebar = document.querySelector('.sidebar-links');
const linksBtn = [...document.querySelectorAll('.link-btn')];
const submenu = document.querySelector('.submenu');
const hero = document.querySelector('.hero');
const nav = document.querySelector('.nav');


toggleBtn.addEventListener('click', () => {
    sideWapper.classList.add('show')
});
closeBtn.addEventListener('click', () => {
    sideWapper.classList.remove('show')
});

// set sidebar

sidebar.innerHTML = sublinks.map((item) => {
    const { links, page } = item;
    return `<article>
        <h4>${page}</h4>
        <div className="sidebar-sublinks">
            ${links.map((link) => {
        return `
                <a href="${link.url}">
                    <i class="${link.icon}"></i>${link.label}
                </a>
                
                `
    }).join('')}
        </div>
    
    </article>`
});



linksBtn.forEach((btn) => {
    btn.addEventListener('mouseover', function (e) {
        const text = e.currentTarget.textContent;
        const tempBtn = e.currentTarget.getBoundingClientRect();
        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom - 3

        const tempPage = sublinks.find(({ page }) => page === text);
        if (tempPage) {
            const { page, links } = tempPage;
            submenu.classList.add('show');
            submenu.style.left = `${center}px`;
            submenu.style.top = `${bottom}px`;
            let colums = 'col-2';
            if (links.length === 3) {
                colums = 'col-3'
            }
            submenu.innerHTML = `
                <section>
                    <h4>${page}</h4>
                    <div class="submenu-center ${colums}">
                        ${links.map((link) => {
                return ` <a href="${link.url}">
                    <i class="${link.icon}"></i>${link.label}
                </a>`
            }).join('')}
                    </div>
                </section>
            `
        }



    })
})


hero.addEventListener('mouseover', function (e) {
    submenu.classList.remove('show')
})
nav.addEventListener('mouseover', function (e) {
    if (!e.target.classList.contains('link-btn')) {
        submenu.classList.remove('show');
    }
})