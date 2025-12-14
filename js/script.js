// Configuration: replace FORM_ENDPOINT with your endpoint (Formspree, Netlify Forms, or your API)
const FORM_ENDPOINT = 'https://api.web3forms.com/submit'; // <-- replace this

// Lightweight i18n (English + Hindi)
const i18n = {
  en: {
    'nav.home':'Home','nav.about':'About','nav.services':'Services','nav.contact':'Contact','nav.book':'Book Appointment',
    'hero.title':'Legal Solutions You Can Trust','hero.intro':'Legal Rex is a small law firm with a worldwide client base, providing physical and online assistance for over 17 years. It emphasizes a blend of vast expertise and personalized service.',
    'cta.whatsapp':'Chat on WhatsApp','cta.book':'Book Appointment','cta.inquiry':'Submit Inquiry Form',
    'about.title':'About Pawan Kumar Gautam','about.bio':'[Placeholder bio] Pawan Kumar Gautam is an experienced advocate serving clients at Karkardooma Court, Delhi. He focuses on practical, compassionate representation across family, civil, and attestation matters.','about.expertTitle':'Qualifications & Expertise','about.practiceAreas':'Practice Areas','about.blurb':'Focused, experienced counsel across a wide spectrum of legal needs.',
    'service.nabc':'Non Availability Birth Certificate (NABC)','service.namc':'Non Availability Marriage Certificate (NAMC)','service.apostille':'Apostille (MEA Attestation)','service.notary':'Notary Attestation',
    'service.nabc_short':'Non Availability Birth Certificate (NABC)','service.nabc_desc':'Assistance with documentation and court procedures to obtain a birth certificate when original records are missing.',
    'service.namc_short':'Non Availability Marriage Certificate (NAMC)','service.namc_desc':'Help to procure legal proof of marriage when the certificate is not available.',
    'service.apostille_short':'Apostille (MEA Attestation)','service.apostille_desc':'End-to-end handling for apostille/MEA attestation for documents to be used abroad.',
    'service.valid_short':'Valid Outside India','service.valid_desc':'Guidance to make documents legally valid and recognized outside India.',
    'service.notary_short':'Notary Attestation','service.notary_desc':'Notary services and attestations for affidavits and legal documents.',
    'service.family_short':'The best family lawyer in Delhi','service.family_desc':'Compassionate and experienced family law representation at Karkardooma Court and other forums.',
    'services.title':'Services','services.subtitle':'Practical legal solutions tailored to your needs.',
    'contact.title':'Contact & Inquiries','contact.subtitle':'Use the form below for inquiries or reach out via WhatsApp or phone.',
    'contact.office':'Office','contact.phoneLabel':'Phone:','contact.emailLabel':'Email:','contact.addressLabel':'Address:','contact.whatsapp':'Message on WhatsApp','contact.location':'Location',
    'modal.title':'Book Appointment','modal.instructions':'Please fill out the appointment form below and we will get back to you to confirm the slot.','modal.close':'Close',
    'form.success':'Thank you — your message has been sent. We will contact you shortly.',
    'form.error':'Sorry, something went wrong. Please try again or message on WhatsApp.'
  },
  hi: {
    'nav.home':'होम','nav.about':'परिचय','nav.services':'सेवाएँ','nav.contact':'संपर्क','nav.book':'नियुक्ति बुक करें',
    'hero.title':'कानूनी समाधान जिन पर आप भरोसा कर सकते हैं','hero.intro':'पवन कुमार गौतम – NABC, NAMC, अपोस्टिल (MEA अटेस्टेशन), नोटरी अटेस्टेशन और परिवार कानून में विशेषज्ञ वकील। न्याय ईमानदारी के साथ प्रदान करने के लिए समर्पित।','hero.role':'अधिवक्ता एवं परिवार वकील, कारकुर्दूमा कोर्ट',
    'cta.whatsapp':'WhatsApp पर चैट करें','cta.book':'अपॉइंटमेंट बुक करें','cta.inquiry':'इनक्वायरी फॉर्म भेजें',
    'about.title':'पवन कुमार गौतम के बारे में','about.bio':'[Placeholder bio] पवन कुमार गौतम कारकर्डूमा कोर्ट में क्लाइंट्स की सेवा करने वाले अनुभवी अधिवक्ता हैं। वे व्यावहारिक और संवेदनशील प्रतिनिधित्व पर ध्यान देते हैं।','about.expertTitle':'योग्यता और विशेषज्ञता','about.practiceAreas':'अभ्यास क्षेत्र','about.blurb':'विविध कानूनी आवश्यकताओं के लिए विशिष्ट और अनुभवी परामर्श।',
    'service.nabc':'नॉन अवेलेबिलिटी बर्थ सर्टिफिकेट (NABC)','service.namc':'नॉन अवेलेबिलिटी मैरिज सर्टिफिकेट (NAMC)','service.apostille':'अपोस्टिल (MEA अटेस्टेशन)','service.notary':'नोटरी अटेस्टेशन',
    'service.nabc_short':'NABC (जन्म प्रमाण पत्र)','service.nabc_desc':'मूल रिकॉर्ड न होने पर जन्म प्रमाण पत्र प्राप्त करने के लिए दस्तावेज़ और कोर्ट प्रक्रियाओं में सहायता।',
    'service.namc_short':'NAMC (विवाह प्रमाण पत्र)','service.namc_desc':'जब विवाह प्रमाण पत्र उपलब्ध न हो तो कानूनी प्रमाण प्राप्त करने में सहायता।',
    'service.apostille_short':'अपोस्टिल (MEA अटेस्टेशन)','service.apostille_desc':'विदेश में उपयोग के लिए दस्तावेज़ों के अपोस्टिल/MEA अटेस्टेशन की सम्पूर्ण प्रक्रिया।',
    'service.valid_short':'विदेश में मान्य','service.valid_desc':'दस्तावेज़ों को विदेश में मान्यता दिलवाने की मार्गदर्शिका।',
    'service.notary_short':'नोटरी अटेस्टेशन','service.notary_desc':'हवाला पत्तों और कानूनी दस्तावेज़ों के लिए नोटरी सेवाएँ और अटेस्टेशन।',
    'service.family_short':'दिल्ली का सर्वश्रेष्ठ पारिवारिक वकील','service.family_desc':'कारकर्डूमा कोर्ट और अन्य फोरम में संवेदनशील और अनुभवी पारिवारिक कानून प्रतिनिधित्व।',
    'services.title':'सेवाएँ','services.subtitle':'आपकी ज़रूरतों के अनुसार व्यावहारिक कानूनी समाधान।',
    'contact.title':'संपर्क और पूछताछ','contact.subtitle':'कृपया नीचे का फॉर्म भरें या WhatsApp/फोन से संपर्क करें।',
    'contact.office':'कार्यालय','contact.phoneLabel':'फोन:','contact.emailLabel':'ईमेल:','contact.addressLabel':'पता:','contact.whatsapp':'WhatsApp पर संदेश भेजें','contact.location':'स्थान',
    'modal.title':'अपॉइंटमेंट बुक करें','modal.instructions':'कृपया अपॉइंटमेंट फॉर्म भरें, हम स्लॉट की पुष्टि करने के लिए आपसे संपर्क करेंगे।','modal.close':'बंद करें',
    'form.success':'धन्यवाद — आपका संदेश भेज दिया गया है। हम शीघ्र ही आपसे संपर्क करेंगे।',
    'form.error':'क्षमा करें, कुछ गलत हो गया। कृपया पुनः प्रयास करें या WhatsApp पर संदेश भेजें।'
  }
};

function applyLanguage(lang){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(i18n[lang] && i18n[lang][key]) el.textContent = i18n[lang][key];
  });
  const label = document.getElementById('langLabel');
  if(label) label.textContent = (lang === 'hi') ? 'HI' : 'EN';
  localStorage.setItem('siteLang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  // Year
  const y = document.getElementById('currentYear');
  if(y) y.textContent = new Date().getFullYear();

  // Init language (no theme controls)
  const savedLang = localStorage.getItem('siteLang') || 'en';
  applyLanguage(savedLang);

  // Language buttons
  document.querySelectorAll('.lang-switch').forEach(btn => {
    btn.addEventListener('click', e => applyLanguage(e.currentTarget.dataset.lang));
  });

  // Smooth scroll anchors
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(!href || href === '#') return;
      const target = document.getElementById(href.slice(1));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); const navCollapse = document.querySelector('.navbar-collapse'); if(navCollapse && navCollapse.classList.contains('show')) new bootstrap.Collapse(navCollapse).hide(); }
    });
  });

  // Navbar scroll
  const navbar = document.getElementById('mainNavbar');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 20) navbar.classList.add('navbar-scrolled'); else navbar.classList.remove('navbar-scrolled');
  });

  // Reveal animations
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(en => { if(en.isIntersecting){ en.target.classList.add('visible'); obs.unobserve(en.target); } });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  ['about','services','contact'].forEach(id => { const el = document.getElementById(id); if(el){ el.classList.add('reveal'); observer.observe(el); } });

  // Form submission handling (client-side)
  const contactForm = document.getElementById('contactForm');
  const formAlert = document.getElementById('formAlert');
  const submitBtn = document.getElementById('formSubmit');
  const clearBtn = document.getElementById('formClear');

  if(contactForm){
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      contactForm.classList.add('was-validated');

      if(!contactForm.checkValidity()){
        formAlert.innerHTML = `<div class="alert alert-danger">Please fill required fields correctly.</div>`;
        return;
      }else{
		  contactForm.submit();
		return true;
	  }
	  /*	  
      //const formData = new FormData(contactForm);
      //formData.append('page', window.location.href);

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...`;
	  submitBtn.disabled = false;
      submitBtn.innerHTML = `Submit Query`;
	  
	  

      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if(res.ok){
          formAlert.innerHTML = `<div class="alert alert-success">${i18n[localStorage.getItem('siteLang') || 'en']['form.success']}</div>`;
          contactForm.reset();
          contactForm.classList.remove('was-validated');
        } else {
          console.error('Form submission error', await res.text().catch(()=>null));
          formAlert.innerHTML = `<div class="alert alert-danger">${i18n[localStorage.getItem('siteLang') || 'en']['form.error']}</div>`;
        }
      } catch (err){
        console.error('Form submit failed', err);
        formAlert.innerHTML = `<div class="alert alert-danger">${i18n[localStorage.getItem('siteLang') || 'en']['form.error']}</div>`;
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `Submit Query`;
      }
	  
	  */
    });

      clearBtn.addEventListener('click', () => {
      contactForm.reset();
      contactForm.classList.remove('was-validated');
      formAlert.innerHTML = '';
    });
  }

  // Ensure modal language updates (if used)
  const bookModal = document.getElementById('bookModal');
  if(bookModal) bookModal.addEventListener('show.bs.modal', () => { applyLanguage(localStorage.getItem('siteLang')||'en'); });
});