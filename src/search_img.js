import axios from "axios";
import pictures from './partials/markup.hbs';
import Notiflix from "notiflix";


axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '22659523-ac255ed135817256fe2f96438';
const API_OPTIONS = 'image_type=photo&orientation=horizontal&safesearch=&true';

const markup = document.querySelector('.gallery');

const errorMessage = 'Sorry, there are no images matching your search query. Please try again.';
const infoMessage = `We're sorry, but you've reached the end of search results.`;

let resultQuantity = '';
let valueResponse = '';
let currentValue = '';
let PAGE = '';

const PER_PAGE = 40;


async function onSearchImg () {
    const url = `/?key=${API_KEY}&q=${currentValue}&${API_OPTIONS}&page=${PAGE}&per_page=${PER_PAGE}`;
    const response = await axios.get(url);

    valueResponse = response.data.hits;
    resultQuantity = response.data.totalHits;

    if (!valueResponse.length) {
        fetchErrors();
    } createMarkup();
};

function createMarkup () {
    markup.insertAdjacentHTML('beforeend', pictures ({response : valueResponse}));
    const successfulMessage = `Hooray! We found ${resultQuantity} images.`;
    Notiflix.Notify.success(successfulMessage);
};

const fetchErrors = (() => {
    return Notiflix.Notify.failure(errorMessage);
  });

const fetchInfo = (() => {
    return Notiflix.Notify.info(infoMessage);
})

function counter () {
    return PAGE += 1;
}

const query = ((value) => {
    currentValue = value;
    return currentValue;
});

function clearMarcup () {
    return markup.innerHTML = '';
};

function clearCounter () {
    return PAGE = Number(1);
};

function hiddenBtnInFinally (elements, property) {
    if (markup.children.length >= resultQuantity) {
        fetchInfo();
        return elements.classList.add(property);
   }
    return;
}

export default {onSearchImg, counter, clearCounter, query, clearMarcup, hiddenBtnInFinally};