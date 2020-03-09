// Menu items component
class MenuItems extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <ion-item href="./attendance.html">
                <ion-label>Attendance</ion-label>
            </ion-item>

            <ion-item href="./leave.html">
                <ion-label>Leave</ion-label>
            </ion-item>

            <ion-item href="./profile.html">
                <ion-label>Profile</ion-label>
            </ion-item>

            <ion-item href="http://indigohelp.shireburn.com/en/collections/1960200-indigo-mobile">
                <ion-label>Help <span>↗</span> </ion-label>
            </ion-item>

            <ion-item href="https://portal.prodpad.com/fca19e08-964d-11e9-9ce6-0abbec7104a5">
                <ion-label>Provide feedback <span>↗</span></ion-label>
            </ion-item>            
        `;
    }
}
customElements.define('menu-items', MenuItems);

// Menu logo component
class MenuLogo extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <img class="logo" src="./mat/indigo-mobile-br.svg">
        `;
    }
}
customElements.define('menu-logo', MenuLogo);

// Week div
class WeekDiv extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="week-div">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div> 
            <div></div>
            <div></div>             
        </div>
        `;
    }
}
customElements.define('week-div', WeekDiv);


$("ion-item").attr("detail", "false").attr("lines", "full");
$(".noLines").attr("lines", "none");
$(".greyBg").attr("style", "--background: var(--b5);");
