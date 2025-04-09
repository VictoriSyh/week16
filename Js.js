document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const submitBtn = document.getElementById('submitBtn');

    // Функция для проверки валидности формы
    function validateForm() {
        let isValid = true;

        // Проверка имени
        const name = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        if (!name.checkValidity()) {
            nameError.textContent = 'Имя должно содержать только буквы и пробелы (2-20 символов).';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        // Проверка электронной почты
        const email = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        if (!email.checkValidity()) {
            emailError.textContent = 'Введите корректный адрес электронной почты.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        // Проверка возраста
        const age = document.getElementById('age');
        const ageError = document.getElementById('ageError');
        if (!age.checkValidity()) {
            ageError.textContent = 'Введите корректный возраст.';
            isValid = false;
        } else {
            ageError.textContent = '';
        }

        // Проверка профессии
        const profession = document.getElementById('profession');
        const professionError = document.getElementById('professionError');
        if (!profession.checkValidity()) {
            professionError.textContent = 'Выберите профессию.';
            isValid = false;
        } else {
            professionError.textContent = '';
        }

       // Проверка пароля
       const password = document.getElementById('password'); 
       const passwordError = document.getElementById('passwordError'); 
       if (!password.checkValidity()) { 
           passwordError.textContent = 'Пароль должен содержать не менее 8 символов, включая заглавные буквы и цифры.'; 
           isValid = false; 
       } else { 
           passwordError.textContent = ''; 
       } 

       // Проверка согласия с обработкой данных
       const consentCheckbox = document.getElementById('consent'); 
       const consentError = document.getElementById('consentError'); 
       if (!consentCheckbox.checked) { 
           consentError.textContent = 'Необходимо согласие на обработку данных.'; 
           isValid = false; 
       } else { 
           consentError.textContent = ''; 
       } 

       return isValid; 
   }

   // Обработчик события отправки формы
   form.addEventListener('submit', function (event) {
       event.preventDefault(); // Отменяем действие по умолчанию

       if (validateForm()) { // Если форма валидна
           console.log({
               name: form.name.value,
               email: form.email.value,
               age: form.age.value,
               gender: form.gender.value,
               profession: form.profession.value,
               password: form.password.value,
               consent: form.consent.checked,
           });
           form.reset(); // Очищаем форму
           submitBtn.disabled=true; // Деактивируем кнопку отправки после успешной отправки формы.
       }
   });

   // Обработчик события изменения состояния полей формы
   form.addEventListener('input', function () {
       submitBtn.disabled=!validateForm(); // Активируем/деактивируем кнопку отправки в зависимости от валидности формы.
   });

   // Обработчики событий focus и blur для каждого поля
   Array.from(form.elements).forEach(element => {
      element.addEventListener('focus', () => { element.classList.add('focused'); });
      element.addEventListener('blur', () => { element.classList.remove('focused'); });
   });
});