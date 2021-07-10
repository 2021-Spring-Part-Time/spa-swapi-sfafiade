import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HomePage from './pages/HomePage.js';
import apiActions from './api-actions/api-actions';

buildPage();

function buildPage(){
    header();
    footer();
    navigateToHomePage();
}

function header() {
    const headerElement = document.querySelector('.header');
    headerElement.innerHTML = Header();
}

function footer() {
    const headerElement = document.querySelector('.footer');
    headerElement.innerHTML = Footer();
}

function navigateToHomePage() {
    const homeButton = document.querySelector('.nav__list_home');
    homeButton.addEventListener('click', ()=> {
        const app = document.querySelector('#app');
        app.innerHTML = HomePage();
    });
}

function renderPeopleInfoList(){
    const peopleButton = document.querySelector('.nav__list_people')
    peopleButton.addEventListener('click', () => {
        getRequest('https://swapi.dev/api/people', (people) => {
            console.log(people);
        });
    });
}