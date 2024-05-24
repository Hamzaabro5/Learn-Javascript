// TASK

function createList() {

    const div = document.createElement(`div`);
    const ul = document.createElement(`UL`);
    const li1 = document.createElement(`li`);
    const li2 = document.createElement(`li`);
    const li3 = document.createElement(`li`);
    const li4 = document.createElement(`li`);
    const li5 = document.createElement(`li`);

    const li1Text = document.createTextNode(`Frontend Developer`);
    const li2Text = document.createTextNode(`Backend Developer`);
    const li3Text = document.createTextNode(`Full Stack Developer`);
    const li4Text = document.createTextNode(`MernStack Dveloper`);
    const li5Text = document.createTextNode(`Laravel Developer`);

    li1.appendChild(li1Text);
    li2.appendChild(li2Text);
    li3.appendChild(li3Text);
    li4.appendChild(li4Text);
    li5.appendChild(li5Text);

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);

    div.appendChild(ul);


    console.log(ul)
}

