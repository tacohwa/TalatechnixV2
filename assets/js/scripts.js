document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Update active nav link
        updateActiveNavLink();
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will contact you shortly.');
            contactForm.reset();
        });
    }
    
    // Initialize brand slider
    const brandSlider = new Swiper('.brand-slider', {
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 5000, // Time for one complete loop (lower = faster)
        freeMode: true,
        slidesPerView: 'auto',
        spaceBetween: 50,
        grabCursor: true,
        breakpoints: {
            320: {
                spaceBetween: 30,
                slidesPerView: 2
            },
            576: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            992: {
                slidesPerView: 5
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 50
            }
        }
    });

    
        
    // Product modal functionality
    const productCards = document.querySelectorAll('.product-card');
    const productModal = document.querySelector('.product-modal');
    const closeModal = document.querySelector('.close-modal');

    
    
    // Sample product data (replace with your actual data)
    const productsData = {
        "AV Conference System": {
            categories: [
                {
                    name: "Bilik Mesyuarat",
                    images: [
                        "assets/images/product/AV/1.png",
                        "assets/images/product/AV/2.png",
                        "assets/images/product/AV/3.png",
                        "assets/images/product/AV/4.png",
                        "assets/images/product/AV/5.png",
                        "assets/images/product/AV/6.png",
                        "assets/images/product/AV/7.png",
                        "assets/images/product/AV/8.png"
                    ]
                },
                {
                    name: "Senarai Klien",
                    list: [
                        "Majlis Daerah Pasir Puteh",
                        "Majlis Daerah Kuala Krai",
                        "Majlis Daerah Tumpat",
                        "Bilik Mesyuarat FAMA RTC",
                        "Bilik Mesyuarat PKB"
                    ]
                }
            ]
        },

        

        "Fire Evacuation & Announcement System": {
            categories: [
                {
                    name: "LHDN Terengganu",
                    images: [
                        "assets/images/product/PAVA/1.png",
                        "assets/images/product/PAVA/2.png",
                        "assets/images/product/PAVA/3.png",
                        "assets/images/product/PAVA/4.png",
                        "assets/images/product/PAVA/5.png",
                        "assets/images/product/PAVA/6.png",
                        "assets/images/product/PAVA/7.png",
                        "assets/images/product/PAVA/8.png"
                    ]
                }
            ]
        },

        "Sound Reinforcement System (Professional Audio System)": {
            categories: [
            
                {
                    name: "Senarai Klien",
                    list: [
                        "Masjid Muhammadiah Beris Panchor",
                        "Masjid Mukim Bukit Abal",
                        "Masjid Umar Al-Khattab, Taman Kobena Pasir Puteh",
                        "Masjid Al-Hidayah, Panggong 3 Daerah Bukit Abal",
                        "Masjid Mukim Tualang Rendah Lama",
                        "Masjid Mukim Pek",
                        "Masjid Hadhari, Jerteh",
                        "Masjid Ar-Rahman, Mukim Seri Gedombak",
                        "Masjid Al-Mukhlisin",
                        "Masjid Mukim Sri Aman, Pasir Puteh",
                        "Masjid Khairiah Kg. Tok Dir, Selising",
                        "Masjid Iktikaf Ismaili",
                        "Masjid Padang Pak Amat, Pasir Puteh",
                        "Masjid Permai Padang Bongor, Binjai",
                        "Masjid Kampung Wakaf, Pasir Puteh",
                        "Masjid Mukim Permatang Sungkai",
                        "Masjid Yaacobiah, Pasir Puteh",
                        "Masjid Taman Hadhari Paka",
                        "Masjid Long Tan, Lojing Highlands",
                        "Masjid Al-Husna",
                        "Masjid Raudhah Al-Muslimin Mukim Bukit Bidang",
                        "Masjid Al-Makmur Mukim Changgai",
                        "Masjid Kg. Kolam Tembesu",
                        "Masjid Mukim Patek",
                        "Masjid Al-Falah Kampung Gerai",
                        "Masjid Al-Ikhlas, Mukim Kedai Menanti",
                        "Masjid Mukim Serdang Masjid Nurul Ehsan",
                        "Masjid Alor Selising",
                        "Masjid Solihiah, Kg. Jerat",
                        "Masjid Darul Salam",
                        "Masjid Al-Ihsan Mukim Kolam Abu",
                        "Masjid Mukim Bukit Merbau",
                        "Masjid Al-Muhaimin Mukim Gong Garu",
                        "Masjid Kampung Banggol",
                        "Masjid Kg Alor Ganu",
                        "Masjid Mukim Jelor, Pasir Puteh",
                        "Masjid Bandar Annur Guchil",
                        "Masjid Mukim Panggong",
                        "Masjid Taman Uda Murni",
                        "Masjid Kg Kolam Tembesu",
                        "Masjid Al-Muttohhiriin Kg Bukit Belah"
                    ]
                }
          
            ]
        },

        "Public Address & Paging System": {
            categories: [
                {
                    name: "Sekolah",
                    images: [
                        "assets/images/product/PAPS/1.png",
                        "assets/images/product/PAPS/2.png",
                        "assets/images/product/PAPS/3.png",
                        "assets/images/product/PAPS/4.png",
                        "assets/images/product/PAPS/5.png",
                        "assets/images/product/PAPS/6.png",
                        "assets/images/product/PAPS/7.png",
                        "assets/images/product/PAPS/8.png",
                        "assets/images/product/PAPS/9.png",
                        "assets/images/product/PAPS/10.png",
                        "assets/images/product/PAPS/11.png",
                        "assets/images/product/PAPS/12.png"
                    ]
                },
                {
                    name: "Dewan Terbuka",
                    images: [
                        "assets/images/product/SRS/1.png",
                        "assets/images/product/SRS/2.png",
                        "assets/images/product/SRS/3.png",
                        "assets/images/product/SRS/4.png",
                        "assets/images/product/SRS/5.png",
                        "assets/images/product/SRS/6.png",
                        "assets/images/product/SRS/7.png",
                        "assets/images/product/SRS/8.png"
                    ]
                }
            ]
        },

        "Mosque System": {
            categories: [
                {
                    name: "PA System",
                    images: [
                        "assets/images/product/masjid/P1.png",
                        "assets/images/product/masjid/P2.png",
                        "assets/images/product/masjid/P3.png",
                        "assets/images/product/masjid/P4.png",
                        "assets/images/product/masjid/P5.png",
                        "assets/images/product/masjid/P6.png",
                        "assets/images/product/masjid/P7.png",
                        "assets/images/product/masjid/P8.png",
                        "assets/images/product/masjid/P9.png",
                        "assets/images/product/masjid/P10.png"
                    ]
                },
                {
                    name: "Speaker",
                    images: [
                        "assets/images/product/masjid/S1.png",
                        "assets/images/product/masjid/S2.png",
                        "assets/images/product/masjid/S3.png",
                        "assets/images/product/masjid/S4.png",
                        "assets/images/product/masjid/S5.png"
                    ]
                },
                {
                    name: "Microphone",
                    images: [
                        "assets/images/product/masjid/M1.png",
                        "assets/images/product/masjid/M2.png",
                        "assets/images/product/masjid/M3.png",
                        "assets/images/product/masjid/M4.png",
                        "assets/images/product/masjid/M5.png"
                    ]
                }

            ]
        }
    };

    

    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const productName = this.querySelector('h3').textContent.trim();
            const productData = productsData[productName];

            if (productData) {
                const modalImages = document.querySelector('.modal-images');
                const modalInfo = document.querySelector('.modal-info');

                // Clear previous content
                modalImages.innerHTML = '';
                modalInfo.innerHTML = `<h3>${productName}</h3>`;

                // Handle products with categories
        if (productData.categories) {
            productData.categories.forEach(category => {
                const categoryWrapper = document.createElement('div');
                categoryWrapper.style.marginBottom = "25px";

                const catTitle = document.createElement('h4');
                catTitle.textContent = category.name;
                catTitle.style.marginBottom = "10px";
                categoryWrapper.appendChild(catTitle);

                // If this category has images
                if (category.images) {
                    const imgGrid = document.createElement('div');
                    imgGrid.style.display = "flex";
                    imgGrid.style.flexWrap = "wrap";
                    imgGrid.style.gap = "10px";

                    category.images.forEach((imgSrc) => {
                        const anchor = document.createElement('a');
                        anchor.href = imgSrc;
                        anchor.target = '_blank';
                        anchor.rel = 'noopener noreferrer';

                        const img = document.createElement('img');
                        img.src = imgSrc;
                        img.alt = category.name;
                        img.style.width = "150px";
                        img.style.height = "auto";
                        img.style.display = "block";

                        anchor.appendChild(img);
                        imgGrid.appendChild(anchor);
                    });

                    categoryWrapper.appendChild(imgGrid);
                }

               // If this category has a list
            // if (category.list) {
            //     const listGrid = document.createElement('div');
            //     listGrid.style.display = "grid";
            //     listGrid.style.gridTemplateColumns = "repeat(5, 1fr)"; // 5 items in a row
            //     listGrid.style.gap = "15px";
            //     listGrid.style.marginTop = "15px";

            //     category.list.forEach(item => {
            //         const card = document.createElement('div');
            //         card.style.border = "1px solid #ddd";
            //         card.style.borderRadius = "10px";
            //         card.style.padding = "15px";
            //         card.style.textAlign = "center";
            //         card.style.background = "#f5f5f5ff";
            //         card.style.color = "#333";
            //         card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
            //         card.style.fontSize = "14px";
            //         card.style.fontWeight = "500";

            //         card.textContent = item;
            //         listGrid.appendChild(card);
            //     });

            //     categoryWrapper.appendChild(listGrid);
            // }

            if (category.list) {
                const listGrid = document.createElement('div');
                listGrid.classList.add("modal-list"); // ✅ use CSS class instead of inline

                category.list.forEach(item => {
                    const card = document.createElement('div');
                    card.classList.add("card"); // ✅ style from CSS
                    card.textContent = item;
                    listGrid.appendChild(card);
                });

                categoryWrapper.appendChild(listGrid);
            }



                modalImages.appendChild(categoryWrapper);
            });
        }


                // Show modal
                productModal.style.display = 'block';
            }
        });
    });

    
    closeModal.addEventListener('click', function() {
        productModal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === productModal) {
            productModal.style.display = 'none';
        }
    });

    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul'); // or '.nav-links' if you changed it
    
    if (mobileMenuBtn && navMenu) {
        // Toggle menu on button click
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            this.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // Close menu when clicking links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });

        // Close when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && 
                !mobileMenuBtn.contains(e.target) &&
                navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }
    


    
    // Update footer year dynamically  
    document.getElementById("year").textContent = new Date().getFullYear();

    
    
    // Active nav link tracking
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 200) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Initialize active nav link
    updateActiveNavLink();

   

    
});