  // Function to toggle mobile menu
  function toggleMenu() {
    const navButtons = document.getElementById('navButtons');
    navButtons.classList.toggle('show');
  }
  
  // Function to open the side panel
  function openSidePanel() {
    document.getElementById('sidePanel').classList.add('open');
    document.querySelector('.letter-page .close-btn').style.display = 'none';
    document.getElementById('navButtons').classList.remove('show');
  }
  
  // Function to close the side panel
  function closeSidePanel() {
    document.getElementById('sidePanel').classList.remove('open');
    document.querySelector('.letter-page .close-btn').style.display = 'block';
  }
  
  // Function to submit the form
  function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const company = document.getElementById('company').value;
  
    if (firstName && lastName && email && phoneNumber && jobTitle && company) {
      // Display thank you message
      const thankYouMessage = document.getElementById('thankYouMessage');
      document.getElementById('sidePanelHeading').style.display = 'none';
      document.getElementById('formInputs').style.display = 'none';
      thankYouMessage.style.display = 'block';
  
      // Hide the message and close the panel after 2 seconds
      setTimeout(() => {
        thankYouMessage.style.display = 'none';
        document.getElementById('sidePanel').classList.remove('open');
        document.getElementById('sidePanelHeading').style.display = 'block';
        document.getElementById('formInputs').style.display = 'block';
      }, 2000);
    } else {
      alert('Please fill out all fields.');
    }
  }
  
  // Function to show the letter page
  function showLetterPage() {
    document.getElementById('tagline').style.display = 'none';
    document.getElementById('letterPage').style.display = 'block';
    document.getElementById('letterMessageBar').style.display = 'none';
    document.getElementById('carousel').style.display = 'none';
    document.getElementById('platformButtons').style.display = 'none';
    document.getElementById('navButtons').classList.remove('show');
  }
  
  // Function to hide the letter page
  function hideLetterPage() {
    document.getElementById('letterPage').style.display = 'none';
    document.getElementById('tagline').style.display = 'flex';
    document.getElementById('carousel').style.display = 'block';
    document.getElementById('platformButtons').style.display = 'flex';
  }
  
  // Function to go back to the home page
  function goToHomePage() {
    document.getElementById('letterPage').style.display = 'none';
    document.getElementById('tagline').style.display = 'flex';
    document.getElementById('carousel').style.display = 'block';
    document.getElementById('platformButtons').style.display = 'flex';
    document.getElementById('navButtons').classList.remove('show');
  }
  
  // Function to close the letter message bar
  function closeLetterMessageBar() {
    document.getElementById('letterMessageBar').style.display = 'none';
  }
  
  // Function to show the letter in the selected language
  function showLetter(language) {
    const letterText = document.getElementById('letterText');
    let content = '';
  
    switch (language) {
      case 'english':
        content = `
          <p>It is our privilege to announce the development of ROSSO, the first highly specialized artificial intelligence and machine learning platform designed to help the frontline detect human trafficking crimes that threaten local and national safety and security.</p>
          <p>A grave responsibility is imposed upon all of us to correct violations and vindicate laws by prosecuting those who carry out this malignant and devastating crime.</p>
          <p>ROSSO does not provide abstract interpretations. Created to pay significant tribute to victims and survivors, ROSSO honors the work of law enforcement officers and private sector security and safety professionals by providing the real-time, highly specialized intelligence they need to prevent and protect neighborhoods and businesses from human trafficking.</p>
        `;
        break;
      case 'spanish':
        content = `
          <p>Es nuestro privilegio ofrecer ROSSO, la primera plataforma de inteligencia artificial y aprendizaje automático altamente especializada diseñada para ayudar a la primera línea a detectar delitos de trata de personas que amenazan la seguridad pública local y nacional.</p>
          <p>Se impone una grave responsabilidad a los defensores de primera línea para corregir las violaciones y reivindicar las leyes enjuiciando a aquellos que llevan a cabo este crimen maligno y devastador.</p>
          <p>ROSSO no proporciona interpretaciones abstractas. Creado para rendir un homenaje significativo a las víctimas y sobrevivientes, ROSSO honra el trabajo de los defensores al desplegar la información en tiempo real y altamente especializada que necesitan para prevenir y proteger contra la trata de personas y garantizar la seguridad pública de todos los ciudadanos.</p>
        `;
        break;
      case 'french':
        content = `
          <p>French letter here</p>
        `;
        break;
      case 'german':
        content = `
          <p>German letter here</p>
        `;
        break;
      case 'chinese':
        content = `
          <p>Chinese letter here</p>
        `;
        break;
      default:
        content = `<p>Read the letter from Chief Executive Officer<br>Kimberly Adams:</p>`;
    }
  
    // Update the letter text and hide the language buttons
    letterText.innerHTML = content;
    document.querySelector('.language-buttons').style.display = 'none';
  }
  
  // Carousel Functionality
  const captions = [
    { text: "YOUBE working with local communities, law enforcement, and private companies to  ensure a safe and secure FIFA Cup World Cup 2025", link: "https://713le.github.io/AINA-Home/information-sharing.html" },
    { text: "Caption for Image 2", link: "https://713le.github.io/AINA-Home/machine-learning.html" },
    { text: "Caption for Image 3", link: "https://713le.github.io/AINA-Home/community-mapping.html" },
    { text: "Caption for Image 4", link: "https://713le.github.io/AINA-Home/specialized-ai.html" },
  ];
  
  function showImage(index) {
    const images = document.querySelectorAll('.carousel-images img');
    const tabs = document.querySelectorAll('.carousel-tabs button');
    const captionText = document.getElementById('captionText');
    const carouselCaption = document.getElementById('carouselCaption');
  
    // Hide all images
    images.forEach(img => img.classList.remove('active'));
    // Remove active class from all tabs
    tabs.forEach(tab => tab.classList.remove('active'));
  
    // Show the selected image and activate the corresponding tab
    images[index].classList.add('active');
    tabs[index].classList.add('active');
  
    // Update the caption and link
    captionText.textContent = captions[index].text;

    //uncomment when finish pages!!
    //carouselCaption.onclick = () => window.location.href = captions[index].link;
  }
  
  // Initialize the first image
  showImage(0);
  
  // Close menu when clicking outside on mobile
  document.addEventListener('click', function(event) {
    const navButtons = document.getElementById('navButtons');
    const menuToggle = document.querySelector('.menu-toggle');
    const isClickInside = navButtons.contains(event.target) || menuToggle.contains(event.target);
    
    if (!isClickInside && window.innerWidth <= 768) {
      navButtons.classList.remove('show');
    }
  });
  
  // Initialize event listeners when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Add any initialization code here if needed
  });