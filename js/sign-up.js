export function signUp () {
  let signUpCondition = true;

  document.querySelector('.js-sign-up')
    .addEventListener('click', () => {
      const container = document.querySelector('.sign-up-container');
      if (signUpCondition) {
        container.classList.add('sign-up-opacity-t');
      } else {
        container.classList.remove('sign-up-opacity-t');
      }
      
      signUpCondition = !signUpCondition;
    });
  }