// Menu items component
class MenuItems extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div>
                <ion-menu-toggle auto-hide="false">
                    <a class="item-comp" href="./attendance.html">
                        <ion-label>Attendance</ion-label>
                    </a>

                    <a class="item-comp" href="./leave.html">
                        <ion-label>Leave</ion-label>
                    </a>

                    <a class="item-comp" href="./profile.html">
                        <ion-label>Profile</ion-label>
                    </a>

                    <a class="item-comp" href="http://indigohelp.shireburn.com/en/collections/1960200-indigo-mobile">
                        <ion-label>Help <span>↗</span> </ion-label>
                    </a>

                    <a class="item-comp" href="https://portal.prodpad.com/fca19e08-964d-11e9-9ce6-0abbec7104a5">
                        <ion-label>Provide feedback <span>↗</span></ion-label>
                    </a>     
                </ion-menu-toggle>  
            </div>     
        `;
    }
}
customElements.define('menu-items', MenuItems);

// Menu logo component
class MenuLogo extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <img style="width: calc(100% - 48px); margin:24px 24px 24px 24px;" class="logo" src="./mat/indigo-mobile-br.svg">
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
            <div></div>
            <div></div>             
        </div>
        `;
    }
}
customElements.define('week-div', WeekDiv);

$("ion-item").attr("detail", "false").attr("lines", "full").attr("style", "--background: var(--w);");

$(".greyBg").attr("style", "--background: var(--b5);");

