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
    tabLink[i].className = tabLink[i].className.replace(
      ' active',
      ''
    );
  }
  
  document.getElementById(featureName).style.display = 'flex';
  e.currentTarget.className += ' active';
}
