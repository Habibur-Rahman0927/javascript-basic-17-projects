const container = document.querySelector('.container');


const display = (followers) => {
    const newFollowers = followers.map((person) => {
        const { avatar_url, login, html_url } = person;
        return `
            <article class="card">
                <img src="${avatar_url}" alt="${login}"/>
                <a href="${html_url}" class="btn">view Profile</a>
            </article>

        `
    }).join('');
    container.innerHTML = newFollowers;
}

export default display
