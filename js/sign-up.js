let signUpHTML = '';
signUpButton();

function signUpButton () {
  signUpHTML = 
  `
    <div class="top-container">
      <button class="b-login-sign-up">
        Log in or sign up
      </button>
      <button class="t-premium">
        Swimmy Premium
        <p>
          Try Premium
        </p>
      </button>
    </div>

  <div class="list-button">
    <button>Find a pool</button>
    <button>List a pool</button>
    <button class="new-button new-button-1">
      List tennis
      <p>New</p>
    </button>
    <button class="new-button new-button-2">
      List pickleball
      <p>New</p>
    </button>
    <button class="new-button new-button-3">
      List a home
      <p>New</p>
    </button>
  </div>

  <div class="lower-container">
    <button>Support for neighbors</button>
    <button>Help</button>
  </div>
  `
}
export const signHTML = document.querySelector('.sign-up-container')
  .innerHTML = signUpHTML;