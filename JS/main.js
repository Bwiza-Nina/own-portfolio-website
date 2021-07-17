const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

      if(navToggle){
          navToggle.addEventListener('click', ()=>{
              navMenu.classList.add('show-menu');
          })
      }

      if(navClose){
          navClose.addEventListener('click', ()=>{
              navMenu.classList.remove('show-menu');
          })
      }

      const navLink = document.querySelectorAll('nav-link');
      function linkAction(){
          const navMenu = document.getElementById('nav-menu');
          // on each link we click remove the show-menu class //
          navMenu.classList.remove('show-menu');
      }
      navLink.forEach(n => n.addEventListener('click', linkAction));

      const skillsContent = document.getElementsByClassName('skills-content'),
            skillsHeader = document.getElementsByClassName('skills-header');
      
      function toggleSkills(){
          let itemClass = this.parentNode.className;
          for(i=0; i<skillsContent.length; i++){
              skillsContent[i].className = 'skills-content skills-close'
          }
          if(itemClass === 'skills-content skills-close'){
              this.parentNode.className = 'skills-content skills-open'
          }
      }
      skillsHeader.forEach((el) =>{
          el.addEventListener('click', toggleSkills)
      });

      const tabs = document.querySelector('[data-target]'),
            tabContent = document.querySelectorAll('[data-content]')

      tabs.forEach(tab => {
          tab.addEventListener('click', ()=>{
              const target = document.querySelector(tab.dataset.target);
              tabContents.forEach(tabContent =>{
                  tabContent.classList.remove('qualification-active');
              })
              target.classList.add('qualification-active')
              tabs.forEach(tab => {
                  tab.classList.remove('qualification-active')
              })
              tab.classList.add('qualification-active')
          })
      })

      const modalViews = document.querySelectorAll('services-modal'),
            modalBtns = document.querySelectorAll('services-button'),
            modalCloses = document.querySelectorAll('services-modal-close');
      
      let modal = function(modalClick){
          modalViews[modalClick].classList.add('active-modal')
      }
      modalBtns.forEach((modalBtn, i)=>{
          modalBtn.addEventListener('click', ()=>{
              modal(i)
          })
      })
      modalCloses.forEach((modalClose)=>{
          modalClose.addEventListener('click',()=>{
              modalViews.forEach((modalView)=>{
                  modalView.classList.remove('active-modal')
              })
          })
      })

      let swiper = new Swiper(".portfolio-container", {
        cssMode: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      let swiperTestimonial = new Swiper(".testimonial-container", {
        loop: true,
        grabCursor: true,
        spaceBetween: 48,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        breakpoints:{
            568:{
                slidesPreview: 2,
            }
        }
      });

      const sections = document.querySelectorAll('section[id]')
      function scrollActive(){
            const scrollY = window.pageYOffset
            sections.forEach(current => {
                const sectionHeight = current.offsetHeight
                const sectionTop = current.offsetTop - 50;
                sectionId = current.getAttribute('id')

                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                    document.querySelector('nav-menu a[href*='+sectionId+']').classList.add('active-link')
                }else{
                    document.querySelector('nav-menu a[href*='+sectionId+']').classList.remove('active-link')
                }
            })
      }
      window.addEventListener('scroll', scrollActive)

      function scrollHeader(){
          const nav = document.getElementById('header')
          if(this.scrollY >= 80)nav.classList.add('scroll-header');
          else nav.classList.remove('scroll-header')
      }
      window.addEventListener('scroll', scrollHeader);

      function scrollTop(){
          const scrollTop = document.getElementById('scroll-top');
          if(this.scrollY >= 560) scrollTop.classList.add('show-scroll');
          else scrollTop.classList.remove('show-scroll')
      }
      window.addEventListener('scroll', scrollTop);