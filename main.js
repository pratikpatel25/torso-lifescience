document.addEventListener('DOMContentLoaded', () => {
    // --- Sticky Header Scroll Effect ---
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- Mobile Navigation Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Animate toggle bars
            const spans = menuToggle.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close menu on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // --- Active Page Navigation Link Highlight on Scroll (SPA Observer) ---
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a:not(.btn)');

    if (sections.length > 0 && navItems.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px', // Trigger when section occupies core viewport
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navItems.forEach(item => {
                        const href = item.getAttribute('href');
                        if (href === `#${id}`) {
                            item.classList.add('active');
                        } else {
                            item.classList.remove('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));
    }

    // --- Products Database ---
    const products = [
        {
            id: 1,
            name: "Uxotor 40 Febuxostat",
            category: "Febuxostat 40mg Table",
            composition: "Febuxostat 40mg Tablets",
            description: "Uxotor 40 as Febuxostat 40mg Tablets, used to treat and prevent gout. Gout happens when the body produces too much uric acid — especially relevant for transplant patients.",
            image: "assets/uxotor.png"
        },
        {
            id: 2,
            name: "Toromus",
            category: "Transplant Range",
            composition: "Tacrolimus Capsules 0.5mg & 1mg",
            description: "Tacrolimus is an immunosuppressive drug whose main use is after organ transplant to reduce the activity of the immune system and lower the risk of organ rejection.",
            image: "assets/toromus.png"
        },
        {
            id: 3,
            name: "Cymevir",
            category: "Cymevir",
            composition: "Valganciclovir Tablets IP 450mg",
            description: "Cymevir as Valganciclovir is an antiviral medication used to treat cytomegalovirus (CMV) infections in transplant patients.",
            image: "assets/cy,evir.png"
        },
        {
            id: 4,
            name: "Mycotor S 360",
            category: "Transplant Range",
            composition: "Mycophenolic Acid Tablets USP 360mg",
            description: "Mycotor S 360 — Mycophenolic Acid Tablets USP 360mg — is an immunosuppressant used to prevent organ rejection after transplant.",
            image: "assets/mycotor.png"
        },
        {
            id: 5,
            name: "Mycotor 500",
            category: "Transplant Range",
            composition: "Mycophenolate Mofetil Tablets 500mg",
            description: "Mycotor 500 as Mycophenolate Mofetil (MMF), a prodrug of mycophenolic acid — an immunosuppressant used after organ transplant.",
            image: "assets/mycotor.png"
        },
        {
            id: 6,
            name: "Tornesp 40 PFS",
            category: "Dialysis",
            composition: "Darbepoetin Alfa Injection 40 mcg / 0.40 ml",
            description: "Tornesp 40 PFS is a recombinant form of human erythropoietin used to treat anemia by stimulating red blood cell production in dialysis patients.",
            image: "assets/tornesp-40.png"
        },
        {
            id: 7,
            name: "OTF - SOFT",
            category: "Renal Nutrition",
            composition: "Omega-3 Marine Triglycerides – EPA 180mg, DHA 120mg",
            description: "OTF-SOFT Omega-3 Marine Triglycerides Capsules are polyunsaturated fatty acids (PUFAs) in softgel capsule form, supporting cardiovascular and renal health.",
            image: "assets/otf-soft.png"
        },
        {
            id: 8,
            name: "Torpero HP",
            category: "Renal Nutrition",
            composition: "For HD: 1.2g protein/kg body weight · For PD: 1.5g protein/kg body weight",
            description: "Protein is an important nutrient that helps repair and build body tissues, drives metabolic processes, and is especially critical for dialysis patients with elevated protein needs.",
            image: "assets/torpero-hp.png"
        },
        {
            id: 9,
            name: "Renotreat Tablet",
            category: "Renal Nutrition",
            composition: "Ketoanalogues of Amino Acids (KAs)",
            description: "Renotreat Tablet — Ketoanalogues of amino acids (KAs) — are nitrogen-free analogs of essential amino acids used to support nutrition in CKD patients on low-protein diets.",
            image: "assets/renotreate.png"
        },
        {
            id: 10,
            name: "Renotreat DS",
            category: "Renal Nutrition",
            composition: "Ketoanalogues of Amino Acids (KAs) — Double Strength",
            description: "Renotreat DS Tablet — Double Strength Ketoanalogues of amino acids (KAs) — nitrogen-free analogs of essential amino acids for enhanced renal nutritional support.",
            image: "assets/renotreate.png"
        },
        {
            id: 11,
            name: "Renotreat Sachet",
            category: "Renal Nutrition",
            composition: "Ketoanalogues of Amino Acids (KAs)",
            description: "Renotreat Sachet — Ketoanalogues of amino acids (KAs) — nitrogen-free analogs of essential amino acids in convenient powder sachet form.",
            image: "assets/renotreate.png"
        },
        {
            id: 12,
            name: "Tosovap",
            category: "Renal Medicine",
            composition: "Tolvaptan IP 15mg Tablets",
            description: "Tolvaptan is a selective vasopressin V2-receptor antagonist used to slow kidney function decline in patients with autosomal dominant polycystic kidney disease (ADPKD).",
            image: "assets/tosovap.png"
        },
        {
            id: 13,
            name: "Sobitor DS",
            category: "Renal Medicine",
            composition: "Enteric Coated Sodium Bicarbonate Tablets 1000mg",
            description: "Sobitor DS (Double Strength 1000mg) is an Enteric Coated Sodium Bicarbonate formulation used in the management of metabolic acidosis in chronic kidney disease patients.",
            image: "assets/sobitor.png"
        },
        {
            id: 14,
            name: "Sobitor",
            category: "Renal Medicine",
            composition: "Enteric Coated Sodium Bicarbonate Tablets 500mg & 1000mg",
            description: "Sobitor 500 and Sobitor DS (Double Strength 1000mg) are Enteric Coated Sodium Bicarbonate formulations for kidney disease management and metabolic acidosis.",
            image: "assets/sobitor.png"
        },
        {
            id: 15,
            name: "Torbiotic Forte",
            category: "Renal Medicine",
            composition: "Each hard gelatin capsule contains pre-probiotic 90 BN CFU",
            description: "Torbiotic Forte Capsules are made up of Prebiotics and Probiotics. Prebiotics are indigestible dietary fibers that feed beneficial gut bacteria, supporting gut and renal health.",
            image: "assets/torbiotic.png"
        },
        {
            id: 16,
            name: "Torbiotic",
            category: "Renal Medicine",
            composition: "Prebiotics and Probiotics Capsules",
            description: "Torbiotic Capsules are made up of Prebiotics and Probiotics. Prebiotics are indigestible plant fibers that help nourish and grow healthy gut bacteria in renal patients.",
            image: "assets/torbiotic.png"
        },
        {
            id: 17,
            name: "Renoace",
            category: "Renal Medicine",
            composition: "Taurine 500mg + Acetylcysteine 150mg Tablets",
            description: "Renoace is a combination of Taurine 500mg and N-acetylcysteine 150mg. Renoace prevents or manages kidney-related oxidative stress and supports renal function.",
            image: "assets/renoace.png"
        },
        {
            id: 18,
            name: "Sevasor",
            category: "Renal Medicine",
            composition: "Sevelamer Carbonate Tablets 400mg & 800mg",
            description: "Sevasor — Sevelamer Carbonate — is a phosphate binder used to treat hyperphosphatemia in patients with chronic kidney disease who are on dialysis.",
            image: "assets/sevasor.png"
        },
        {
            id: 19,
            name: "Lacimto",
            category: "Renal Medicine",
            composition: "Calcium Acetate Tablets USP 667mg",
            description: "Lacimto is used to prevent high blood phosphate levels (hyperphosphatemia) in patients who are on dialysis due to end-stage renal disease.",
            image: "assets/lacimto.png"
        },
        {
            id: 20,
            name: "Torpanto DSR",
            category: "Acid Reflux",
            composition: "Pantoprazole 40mg + Domperidone 30mg",
            description: "Torpanto DSR is a combination of 2 medicines: Pantoprazole (a proton pump inhibitor) and Domperidone (a prokinetic), used to treat acid reflux and related gastric symptoms.",
            image: "assets/torpanto.png"
        },
        {
            id: 21,
            name: "Eisen FE",
            category: "Iron Supplement",
            composition: "Ferric Saccharate (in microencapsulated form) 100mg",
            description: "Iron is an essential constituent of the body and is necessary for haemoglobin formation. Eisen FE provides microencapsulated ferric saccharate for better absorption and tolerability.",
            image: "assets/eisen-fe.png"
        },
        {
            id: 22,
            name: "Megastrol 40/160 mg",
            category: "Megastrol",
            composition: "Megastrol 40mg & 160mg",
            description: "Megastrol acetate is a progestin steroid hormone administered orally to treat specific infections and is used in the context of renal patient care.",
            image: "assets/megastrol.png"
        },
        {
            id: 23,
            name: "Torfoscin Sachet",
            category: "UTI Infection",
            composition: "Fosfomycin Trometamol Sachet 3gm",
            description: "TorfoSCIN powder as Fosfomycin Trometamol is a broad-spectrum antibiotic used to treat uncomplicated urinary tract infections (UTIs), common in renal and transplant patients.",
            image: "assets/torfo.png"
        },
        {
            id: 24,
            name: "Clonisor",
            category: "Hypertension",
            composition: "Clonidine Hydrochloride Tablets IP 100mcg / 150mcg",
            description: "Clonisor is used to treat high blood pressure (hypertension). Lowering high blood pressure helps prevent strokes, heart attacks, and kidney problems in CKD patients.",
            image: "assets/clonisor.png"
        }
    ];

    // --- Products Render Logic (on Homepage) ---
    const productsGrid = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');
    const productSearch = document.getElementById('productSearch');
    const filterChipsContainer = document.getElementById('filterChips');

    let activeCategory = 'all';
    let searchQuery = '';

    function renderProducts() {
        if (!productsGrid) return; // Guard for pages without product grid

        const filtered = products.filter(p => {
            const matchesCategory = (activeCategory === 'all' || p.category === activeCategory);
            const matchesSearch = (
                p.name.toLowerCase().includes(searchQuery) ||
                p.composition.toLowerCase().includes(searchQuery) ||
                p.description.toLowerCase().includes(searchQuery)
            );
            return matchesCategory && matchesSearch;
        });

        productsGrid.innerHTML = '';

        if (filtered.length === 0) {
            noResults.style.display = 'block';
            productsGrid.style.display = 'none';
        } else {
            noResults.style.display = 'none';
            productsGrid.style.display = 'grid';

            filtered.forEach(p => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
                    <div class="product-image-container">
                        <span class="product-category-badge">${p.category}</span>
                        <img src="${p.image || 'assets/product-placeholder.svg'}" alt="${p.name}" style="width:100px; height:auto;">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${p.name}</h3>
                        <p class="product-composition">${p.composition}</p>
                        <p class="product-desc">${p.description}</p>
                        <div class="product-card-footer">
                            <a href="product-detail.html?id=${p.id}" class="btn btn-outline btn-sm">View Details <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                `;
                productsGrid.appendChild(card);
            });
        }
    }

    // --- Product Search & Filters ---
    if (productSearch) {
        productSearch.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            renderProducts();
        });
    }

    if (filterChipsContainer) {
        filterChipsContainer.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                filterChipsContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activeCategory = btn.getAttribute('data-category');
                renderProducts();
            });
        });
    }

    // --- Footer Category Link Triggers ---
    const footerCatLinks = document.querySelectorAll('.footer-cat-link');
    footerCatLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const cat = link.getAttribute('data-category');
            if (filterChipsContainer) {
                const targetChip = Array.from(filterChipsContainer.querySelectorAll('.filter-btn'))
                    .find(b => b.getAttribute('data-category').toLowerCase() === cat.toLowerCase());
                if (targetChip) {
                    filterChipsContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                    targetChip.classList.add('active');
                    activeCategory = targetChip.getAttribute('data-category');
                    renderProducts();
                }
            }
        });
    });

    // --- Initial Products Render ---
    renderProducts();

    // --- Events Gallery Lightbox ---
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');

    if (lightboxModal && lightboxImg) {
        document.addEventListener('click', (e) => {
            const media = e.target.closest('.gallery-media');
            if (media) {
                const imgSource = media.querySelector('img').src;
                lightboxImg.src = imgSource;
                lightboxModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        });

        const closeLightbox = () => {
            lightboxModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        };

        if (lightboxCloseBtn) {
            lightboxCloseBtn.addEventListener('click', closeLightbox);
        }
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) closeLightbox();
        });
    }



    // --- Contact Subject Parameter Processing ---
    function checkHashParams() {
        const hash = window.location.hash;
        if (hash.startsWith('#contact')) {
            const queryIdx = hash.indexOf('?');
            if (queryIdx !== -1) {
                const queryString = hash.substring(queryIdx + 1);
                const params = new URLSearchParams(queryString);
                const inquiry = params.get('inquiry');
                if (inquiry) {
                    const subjectInput = document.getElementById('contactSubject');
                    const messageInput = document.getElementById('contactMessage');
                    if (subjectInput) {
                        subjectInput.value = `Inquiry regarding: ${decodeURIComponent(inquiry)}`;
                    }
                    if (messageInput) {
                        messageInput.placeholder = `Please write your questions about ${decodeURIComponent(inquiry)} here...`;
                        messageInput.focus();
                    }
                }
            }
        }
    }

    // Run hash check on load and hash change
    window.addEventListener('hashchange', checkHashParams);
    checkHashParams();



    // --- Contact Form Submission Handler ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('contactName').value.trim();
            const email = document.getElementById('contactEmail').value.trim();
            const phone = document.getElementById('contactPhone').value.trim();
            const subject = document.getElementById('contactSubject').value.trim();
            const message = document.getElementById('contactMessage').value.trim();

            if (name && email && message) {
                alert(`Hello ${name}, your inquiry regarding "${subject || 'General Info'}" has been successfully sent. We will respond shortly.`);
                contactForm.reset();
            } else {
                alert('Please fill out all required fields (Name, Email, and Message).');
            }
        });
    }

    // --- CCNA Events Owl Carousel & Year-Wise Filtering ---
    const eventsGallery = $('#eventsGallery');
    const galleryYearFilter = $('#galleryYearFilter');
    
    if (eventsGallery.length > 0) {
        // Clone and save the original gallery cards
        const originalCards = eventsGallery.find('.gallery-card').clone();
        
        function filterGallery(year) {
            // Destroy the carousel if it is already initialized
            if (eventsGallery.data('owl.carousel')) {
                eventsGallery.owlCarousel('destroy');
            }
            
            // Empty the container
            eventsGallery.empty();
            
            // Filter cards matching the year
            const filteredCards = originalCards.filter(function() {
                const cardYear = $(this).attr('data-year');
                return year === 'all' || cardYear === year;
            });
            
            // Append filtered cards back
            eventsGallery.append(filteredCards);
            
            // Re-initialize Owl Carousel
            eventsGallery.owlCarousel({
                loop: filteredCards.length > 3, // Enable looping only if there are enough items
                margin: 30,
                nav: true,
                dots: false,
                navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    }
                }
            });
        }
        
        // Initial render (show all events)
        filterGallery('all');
        
        // Filter tabs click handler
        if (galleryYearFilter.length > 0) {
            galleryYearFilter.find('.filter-btn').on('click', function() {
                galleryYearFilter.find('.filter-btn').removeClass('active');
                $(this).addClass('active');
                const selectedYear = $(this).attr('data-year');
                filterGallery(selectedYear);
            });
        }
    }

    // --- Back to Top Button ---
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
