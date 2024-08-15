/* stacks untuk menampung data */
const stacks = [{
        src: "img/html.png",
        alt: "html",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
        src: "img/css.png",
        alt: "css",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
        src: "img/javascript.png",
        alt: "javascript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
];

/* projects untuk menampung data */
const projects = [{
        title: "Sate Padang",
        description: "Sate Padang, meskipun asalnya dari Sumatera Barat, juga populer di Sumatera Utara. Ini adalah sate daging sapi atau kambing yang dipanggang dan disajikan dengan saus kacang yang pedas dan gurih. Kadang-kadang juga disajikan dengan lontong atau ketupat.",
        image: "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

    },
    {
        title: "Mie Gomak",
        description: "Mie Gomak adalah mie khas Batak yang terbuat dari mie yang dimasak dengan kuah kental berbumbu rempah dan daging. Hidangan ini memiliki rasa yang gurih dan sedikit pedas, serta sering disajikan dengan tambahan sayuran dan kerupuk.",
        image: "https://asset.kompas.com/crops/rTK5aEAPK1Uj78-QTYS0UfoJbn8=/0x0:5000x3333/750x500/data/photo/2021/06/08/60be69d57fa40.jpg",
    },
    {
        title: "Ayam Penyet",
        description: "Ayam Penyet adalah ayam goreng yang dipenyet atau dipukul-pukul hingga empuk dan kemudian disajikan dengan sambal terasi yang pedas, lalapan, dan nasi putih. Hidangan ini sangat digemari di Sumatera Utara karena cita rasanya yang menggugah selera.",
        image: "img/ayam-penyet.jpg",
    },
    {
        title: "Ikan Mas Bakar",
        description: "Ikan Bakar Toba adalah ikan yang dibumbui dengan rempah-rempah khas dan dibakar hingga matang. Ikan yang digunakan biasanya ikan mas atau mujair, dan hidangan ini sering disajikan dengan sambal, lalapan, dan nasi putih. Hidangan ini berasal dari sekitar Danau Toba.",
        image: "    https://cdn0-production-images-kly.akamaized.net/-qzjvItJN1TaO9czVkNFdgQWHS8=/1x79:1000x642/1360x766/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3382055/original/073592100_1613794408-shutterstock_1872898477.jpg",
    },
    {
        title: "Sambal Tuk Tuk",
        description: "Sambal Tuktuk adalah sambal khas Batak yang terbuat dari cabai, bawang merah, dan terasi. Sambal ini biasanya digunakan sebagai pelengkap berbagai hidangan seperti ikan bakar atau ayam goreng. Sambal Tuk Tuk adalah sambal khas Medan yang terdiri dari mie, daging, telur, dan bumbu rempah-rempah. Sambal ini biasanya disajikan dengan lontong, ketupat, atau tahu.",
        image: "https://bolumenara.co.id/uploads/8/2023-07/sambal_tuktuk_medan.png",
    },
];


/* olah stacks data */

const stackList = document.querySelector(".list");

function buatItemstack(stack) {
    const stackItem = document.createElement("div");
    stackItem.classList.add("list__item");

    const stackButton = document.createElement("button");
    stackButton.classList.add("stack__button");

    const stackImg = document.createElement("img");
    stackImg.src = stack.src;
    stackImg.alt = stack.alt;

    stackButton.appendChild(stackImg);
    stackButton.addEventListener("click", () => {
        window.open(stack.link, '_blank');
    });
    stackItem.appendChild(stackButton);
    return stackItem;
}

function olahStack() {
    stackList.innerHTML = "";
    stacks.forEach(stack => stackList.appendChild(buatItemstack(stack)));
}

olahStack();

/* olah projects */
const projectList = document.querySelector(".project-list");
function buatItemproject(project) {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    const projectImg = document.createElement("img");
    projectImg.src = project.image;
    projectImg.alt = project.title;
    projectCard.appendChild(projectImg);

    const projectCardInfo = document.createElement("div");
    projectCardInfo.classList.add("project-card__info");
    projectCard.appendChild(projectCardInfo);

    const projectTitle = document.createElement("h3");
    projectTitle.textContent = project.title;
    projectCardInfo.appendChild(projectTitle);

    const projectDescription = document.createElement("p");
    projectDescription.textContent = project.description;
    projectCardInfo.appendChild(projectDescription);
    return projectCard;
}

function olahProject() {
    projectList.innerHTML = "";
    projects.forEach(project => projectList.appendChild(buatItemproject(project)));
}

olahProject();
