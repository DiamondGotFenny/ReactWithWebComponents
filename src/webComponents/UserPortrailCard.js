const myTemplate = document.createElement('template');

myTemplate.innerHTML = `
  <style>
  * {
  box-sizing: border-box;
}
  .User{ 
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    color: rgba(189, 189, 192, 1);
    display: flex;
    width:100%;
    height:10rem;
    align-items: center;
    padding: 1rem;
}]
.User_details{
    text-align: center;
}
.User_pic{
    border: 1px solid #03BFCB;
	border-radius: 50%;
	padding: 7px;
    width: 5rem;
    height: auto;
}
.User_details-title{
    text-align: center;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 0.8rem;
}
  </style>
  <div class="User">
   <img src="" alt="" class="User_pic"/>
   <div class="User_details">
    <p class="User_details-name"></p>
    <p class="User_details-title"></p>
    <p class="User_details-status"></p>
   </div>
   </div>
`;
export default class UserPortrail extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(myTemplate.content.cloneNode(true));
    this._cardValues = {};
    this.populateCard = this.populateCard.bind(this);
  }
  populateCard() {
    this.shadowRoot.querySelector('.User_details-name').innerText =
      this.cardValues.name;
    this.shadowRoot.querySelector('.User_details-title').innerText =
      this.cardValues.description;
    this.shadowRoot.querySelector('.User_pic').src = this.cardValues.img;
    this.shadowRoot
      .querySelector('.User_pic')
      .setAttribute('alt', this.cardValues.name);
  }
  set cardValues(values) {
    this._cardValues = values;
  }

  get cardValues() {
    return this._cardValues;
  }
}

window.customElements.define('user-portrail', UserPortrail);
