import './sass/main.scss';
import onSearchData from './search_img';

const searchForm = document.querySelector('.search-form');
const loadMore = document.querySelector('.load-more');
const selector = 'button-hidden';
loadMore.classList.add(selector);

searchForm.addEventListener('submit', onSearchApi);

function onSearchApi (e) {
    e.preventDefault();

    onSearchData.clearMarcup();
    onSearchData.clearCounter();
    loadMore.classList.add(selector);

    onSearchData.query(e.target.elements.searchQuery.value);
    onSearchData.onSearchImg();
    loadMore.classList.remove(selector);
};


loadMore.addEventListener('click', showMorePictures);

function showMorePictures (e) {
    e.preventDefault();
    onSearchData.counter();
    onSearchData.onSearchImg ();
    onSearchData.hiddenBtnInFinally(loadMore, selector);

}