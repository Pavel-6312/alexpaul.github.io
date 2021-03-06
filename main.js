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

// Picker extension
class PickerItem extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <ion-item lines="none">
            <ion-label>Mark clocking as incorrect</ion-label>
            <ion-toggle id="switch" slot="start" name="custom"></ion-toggle>
        </ion-item>
        `;
    }
}
customElements.define('picker-item', PickerItem);

// Picker title
class PickerTitle extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div style="width:100vw; display:flex; flex-direction:column;">
            <h1 style="margin:24px auto 12px auto; font-size:20px;"> Edit clocking time </h1>
            <p style="margin:0px auto 12px auto; font-size:14px; padding: 0px 24px; text-align:center; color:var(--b54);">You can mark clocking as 
incorrect to inform your manager. </p>
        </div>
        `;
    }
}
customElements.define('picker-title', PickerTitle);


// Ionic overrides
$("ion-item").attr("detail", "false").attr("lines", "full").attr("style", "--background: var(--w);");
$(".greyBg").attr("style", "--background: var(--b5);");

//Input management
let dateFrom = document.getElementById("date-from");
let dateTo = document.getElementById("date-to");
let dateFromTeam = document.getElementById("dateFromTeam");
let dateToTeam = document.getElementById("dateToTeam");

let storedDateFrom = localStorage.setItem("dateFrom", dateFrom.getAttribute("value"));
let storedDateTo = localStorage.setItem("dateTo", dateFrom.getAttribute("value"));

// Update dates in team tab
function updateTeamDates (){
    dateFromTeam.setAttribute('value' , dateFrom.value);
    dateToTeam.setAttribute('value' , dateTo.value);
};

function saveRemark(){

    //Set variable for remark field value
    let remarkAreaValue = document.getElementById('remarkArea').value;

    //Save it to the local storage
    localStorage.setItem('remarkValue', remarkAreaValue);
    
    // Return to main page
    window.location.href = './leave.html';
};

function presentAlert(header,buttons,message) {
  const alert = document.createElement('ion-alert');
  alert.header = header;
  alert.message = message;
  alert.buttons = buttons;

  document.body.appendChild(alert);
  return alert.present();
};

