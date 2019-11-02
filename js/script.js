new Carousel('carousel-1', 3000, 10);

let isMobileMenuClicked = false;
let isMobileSearchClicked = false;
let isHeaderToggleButtonClicked = false;
let mobileSearchMenuElement = document.getElementsByClassName('mobile-search-menu')[0];
let mobileMenuElement = mobileSearchMenuElement.getElementsByClassName('fa-bars')[0];
let mobileNavigationMenuElement = document.getElementsByClassName('navigation-menu')[0];
let mobileSearchElement = mobileSearchMenuElement.getElementsByClassName('fa-search')[0];
let searchFormElement = document.getElementsByClassName('search-form')[0];
let toggleHeaderButton = document.getElementsByClassName('toggle-header-button')[0];
let headerTopElement = document.getElementsByClassName('header-top')[0];

mobileMenuElement.onclick = () => {
  if(!isMobileMenuClicked){
    mobileNavigationMenuElement.style.display = 'block';
    isMobileMenuClicked = true;
  }else{
    mobileNavigationMenuElement.style.display = 'none';
    isMobileMenuClicked = false;
  }
};

mobileSearchElement.onclick = () => {
  if(!isMobileSearchClicked){
    searchFormElement.style.display = 'block';
    isMobileSearchClicked = true;
  }else{
    searchFormElement.style.display = 'none';
    isMobileSearchClicked = false;
  }
};

if (window.innerWidth >= 1000) {
  searchFormElement.style.display = 'block';
  mobileNavigationMenuElement.style.display = 'block';
}

if (window.innerWidth < 1000) {
  searchFormElement.style.display = 'none';
  mobileNavigationMenuElement.style.display = 'none';
  isMobileMenuClicked = false;
  isMobileSearchClicked = false;
}

window.onresize = () => {
  if (window.innerWidth >= 1000) {
    searchFormElement.style.display = 'block';
    mobileNavigationMenuElement.style.display = 'block';
  }

  if (window.innerWidth < 1000) {
    searchFormElement.style.display = 'none';
    mobileNavigationMenuElement.style.display = 'none';
    isMobileMenuClicked = false;
    isMobileSearchClicked = false;
  }
};

toggleHeaderButton.onclick = (e) => {
  if(!isHeaderToggleButtonClicked){
    e.currentTarget.classList.remove('toggle-button-minus');
    e.currentTarget.classList.add('toggle-button-plus');
    headerTopElement.style.display = 'none';
    isHeaderToggleButtonClicked = true;
  }else{
    e.currentTarget.classList.remove('toggle-button-plus');
    e.currentTarget.classList.add('toggle-button-minus');
    headerTopElement.style.display = 'block';
    isHeaderToggleButtonClicked = false;
  }
};

