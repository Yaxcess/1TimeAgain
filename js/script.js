window.onload = () => {
    const hamburger = document.getElementById("hamburger");

    hamburger.onclick = () => {
        let topNav = document.getElementById("topNav");
        topNav.className = topNav.className === "responsive" ? "" : "responsive";
    }
    const menuList = document.querySelectorAll('.menu-element');
    menuList.forEach(element => {
        element.addEventListener("click", event => {
            const elementLink = element.dataset.link;
            if (!elementLink) return;
            event.preventDefault();
            
            document.getElementById(elementLink).scrollIntoView({behavior: "smooth"});
        });
    });
}