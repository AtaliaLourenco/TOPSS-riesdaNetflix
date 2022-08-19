function initTabNav() {
  const tabMenu = document.querySelectorAll ('.js-tabmenu li');
  const tabContent = document.querySelectorAll ('.js-tabcontent section');

  if(tabMenu.length && tabContent.length){
    tabContent[0].classList.add('activo');

    function activeTab(index) {
      tabContent.forEach((sectin)=>{
        sectin.classList.remove('activo');
      });
      tabContent[index].classList.add('activo');
    }

    tabMenu.forEach((itemMenu, index)=>{
      itemMenu.addEventListener('click', () =>{
        activeTab(index);
      })
    })

  }}
initTabNav();

function initAccordion(){
  const accordionList = document.querySelectorAll ('.js-accordion dt');
  const ActiveClass = 'activo'
  if(accordionList.length) {
    accordionList[0].classList.add(ActiveClass);
    accordionList[0].nextElementSibling.classList.add(ActiveClass);

    function aciveAccordion(){
      console.log(this.classList.toggle(ActiveClass));
      console.log(this.nextElementSibling.classList.toggle(ActiveClass));
    }


    accordionList.forEach((item) =>{
      item.addEventListener('click', aciveAccordion);
    })
  }
}

initAccordion();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
  
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linksInternos.forEach((link) =>{
    link.addEventListener ('click', scrollToSection);

  });
}

initScrollSuave();

function initAnicacaoSroll() {
  const sections = document.querySelectorAll('.js-scroll');
  if(sections.length){
    const windowMetade = window.innerHeight * 0.5;

    function animaScroll(){
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const Visibletop = (sectionTop - windowMetade) < 0;
        if(Visibletop){
          section.classList.add('activo')
        }
      })
    }
    animaScroll();

    window.addEventListener('scroll', animaScroll)}
}

initAnicacaoSroll();
