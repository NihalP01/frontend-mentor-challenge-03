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

document.getElementById('defaultOpen').click();

// document.addEventListener('DOMContentLoaded', (event) => {
//   var acc = document.getElementsByClassName('accordion-box');
//   var i;

//   for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener('click', function () {
//       // var panel = this.nextElementSibling;
//       var panel = document.getElementsByClassName('panel');
//       if (panel[0].style.display === 'flex') {
//         panel[0].style.display = 'none';
//       } else {
//         panel[0].style.display = 'flex';
//       }
//     });
//   }
// });

var acc = document.getElementsByClassName('accordion-box');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    var panel = document.getElementsByClassName('panel');
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}
