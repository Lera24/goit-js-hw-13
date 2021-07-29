import './sass/main.scss';
import onSearchData from './search_img';

const searchForm = document.querySelector('.search-form');
const btnloadMore = document.querySelector('.load-more');

searchForm.addEventListener('submit', onSearchApi);

function onSearchApi (e) {
    e.preventDefault();

    onSearchData.clearMarcup();
    onSearchData.clearCounter();

    onSearchData.query(e.target.elements.searchQuery.value);
    onSearchData.onSearchImg();
};


btnloadMore.addEventListener('click', showMorePictures);

function showMorePictures (e) {
    e.preventDefault();
    onSearchData.counter();
    onSearchData.onSearchImg();
}