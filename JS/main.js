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
      })