import Header from './components/Header';

buildPage();

function buildPage(){
    header();
}

function header() {
    const headerElement = document.querySelector('.header');
    headerElement.innerHTML = Header();
}