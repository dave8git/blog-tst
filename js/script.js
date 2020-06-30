'use strict';

function titleClickHandler(event){
  console.log(event);
  console.log('Link was clicked!');
  const clickedElement = this;
  for (let link of links) { /* remove class 'active' from all article links  */
  link.classList.remove('active');
}
  clickedElement.classList.add('active'); /* add class 'active' to the clicked link */

  const articles = document.querySelectorAll('.post'); /* remove class 'active' from all articles */
  for (let article of articles) {
      article.classList.remove('active');
  }
  const clickedArticle = clickedElement.getAttribute('href'); /* get 'href' attribute from the clicked link */
  console.log(clickedArticle);
  const selectedArticle = document.querySelector(clickedArticle); /* find the correct article using the selector (value of 'href' attribute) */

  selectedArticle.classList.add('active'); /* add class 'active' to the correct article */
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  document.querySelector(optTitleListSelector).innerHTML = ''; /* remove contents of titleList */

  const articles = document.querySelectorAll(optArticleSelector); /* for each article */
    for (let article of articles) {
    const articleId = article.getAttribute('id'); /* get the article id */
    // console.log(articleId);
    const articleTitle = article.querySelector(optTitleSelector).innerHTML; ; /* find the title element */ /* get the title from the title element */
    const linkHTML = '<li><a href="#'+ articleId +'"><span>' + articleTitle + '</span></a></li>';/* create HTML of the link */
    // console.log(linkHTML);
    document.querySelector(optTitleListSelector).insertAdjacentHTML('beforeend', linkHTML); /* insert link into titleList */
    }
}

generateTitleLinks();
const links = document.querySelectorAll('.titles a');

for (let link of links) {
    link.addEventListener('click', titleClickHandler);
}