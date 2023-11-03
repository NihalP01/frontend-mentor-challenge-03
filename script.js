function openTab(e, featureName) {
  var tabContent, tabLink;
  tabContent = document.getElementsByClassName('tab-content');
  //Hide all the elements with class="tab-content"
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }
  //Hide all the elements with class="tab-link"
  tabLink = document.getElementsByClassName('tablink');
  for (let i = 0; i < tabLink.length; i++) {
    tabLink[i].className = tabLink[i].className.replace(' active', '');
  }

  document.getElementById(featureName).style.display = 'flex';
  e.currentTarget.className += ' active';
}

// To default open the first feature
document.getElementById('defaultOpen').click();


const accordionHeaders = document.querySelectorAll(
  '.accordion-box .accordion-header'
);
const panels = document.querySelectorAll('.accordion-box .panel');
const arrows = document.querySelectorAll('.accordion-box .btn-arrow');

accordionHeaders.forEach((header, index) => {
  header.addEventListener('click', function () {
    panels[index].style.display =
      panels[index].style.display === 'block' ? 'none' : 'block';
    arrows[index].classList.toggle('rotate');
  });
});
