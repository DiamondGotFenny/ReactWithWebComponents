const characterTemplate = document.createElement('template');

characterTemplate.innerHTML = `
<style>

* {
	box-sizing: border-box;
}

h3 {
	margin: 10px 0;
}

h6 {
	margin: 5px 0;
	text-transform: uppercase;
}

p {
	font-size: 14px;
	line-height: 21px;
}

.card-container {
	background-color: #231E39;
	border-radius: 5px;
	box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
	color: #B3B8CD;
	padding-top: 30px;
	position: relative;
	width: 350px;
	max-width: 100%;
	text-align: center;
	margin: 25px;
}

.card-container .pro {
	display: block;
	color: #231E39;
	background-color: #FEBB0B;
	border-radius: 3px;
	font-size: 14px;
	font-weight: bold;
	padding: 3px 7px;
	position: absolute;
	top: 30px;
	left: 30px;
}

.card-container .round {
	border: 1px solid #03BFCB;
	border-radius: 50%;
	padding: 7px;
}

button.message-btn,button.follow-btn {
	background-color: #03BFCB;
	border: 1px solid #03BFCB;
	border-radius: 3px;
	color: #231E39;
	font-family: Montserrat, sans-serif;
	font-weight: 500;
	padding: 10px 25px;
}

button.follow-btn {
	background-color: transparent;
	color: #02899C;
}

.skills {
	background-color: #1F1A36;
	text-align: left;
	padding: 15px;
	margin-top: 30px;
}

.skills ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
}

.skills ul li {
	border: 1px solid #2D2747;
	border-radius: 2px;
	display: inline-block;
	font-size: 12px;
	margin: 0 7px 7px 0;
	padding: 7px;
}
.card-container .hide {
	display: none;
}
</style>
<div class="card-container">
	<span class="pro">PRO</span>
	<img class="photo round" src="" alt="user" />
	<h3 class="name"></h3>
	<h6 class="location"></h6>
	<p class="description"></p>
	<div class="buttons">
		<button class="message-btn">
			Message
		</button>
		<button class="follow-btn">
			Following
		</button>
	</div>
	<div class="skills">
		<h6>Skills</h6>
		<ul class="skills-List">
		</ul>
	</div>
</div>
`;

export default class CharacterCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(characterTemplate.content.cloneNode(true));

    this.shadowRoot
      .querySelector('button.message-btn')
      .addEventListener('click', this.onMessageClick.bind(this));
    this.shadowRoot
      .querySelector('button.follow-btn')
      .addEventListener('click', this.onFollowClick.bind(this));
    this._cardValues = {};
    this.populateCard = this.populateCard.bind(this);
  }

  populateCard() {
    const proElement = this.shadowRoot.querySelector('.pro');
    this.cardValues.isPro
      ? proElement.classList.remove('hide')
      : proElement.classList.add('hide');
    this.shadowRoot.querySelector('.name').innerText = this.cardValues.name;
    this.shadowRoot.querySelector('.location').innerText =
      this.cardValues.location;
    this.shadowRoot.querySelector('.description').innerText =
      this.cardValues.description;
    this.shadowRoot.querySelector('.photo').src = this.cardValues.img;
    this.shadowRoot
      .querySelector('.photo')
      .setAttribute('alt', this.cardValues.name);
    const skillsList = this.shadowRoot.querySelector('.skills-List');
    skillsList.innerHTML = '';
    this.cardValues.skills.forEach((skill) => {
      const li = document.createElement('li');
      li.innerText = skill;
      skillsList.appendChild(li);
    });
  }
  set cardValues(values) {
    this._cardValues = values;
  }

  get cardValues() {
    return this._cardValues;
  }

  onMessageClick() {
    this.dispatchEvent(
      new CustomEvent('message-button-click', {
        bubbles: true,
        composed: true,
        detail: {
          message: `Hello from ${this.cardValues.name}`,
        },
      })
    );
  }

  onFollowClick() {
    this.dispatchEvent(
      new CustomEvent('follow-button-click', {
        bubbles: true,
        composed: true,
        detail: {
          message: 'Thank you for following me!',
        },
      })
    );
  }
}

window.customElements.define('character-card', CharacterCard);
