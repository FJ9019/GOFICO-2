var _hsp = window._hsp = window._hsp || [];
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

var useGoogleConsentModeV2 = true;
var waitForUpdateMillis = 1000;



var hsLoadGtm = function loadGtm() {
    if(window._hsGtmLoadOnce) {
      return;
    }

    if (useGoogleConsentModeV2) {

      gtag('set','developer_id.dZTQ1Zm',true);

      gtag('consent', 'default', {
      'ad_storage': 'denied',
      'analytics_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'wait_for_update': waitForUpdateMillis
      });

      _hsp.push(['useGoogleConsentModeV2'])
    }

    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-NV59DG93');

    window._hsGtmLoadOnce = true;
};

_hsp.push(['addPrivacyConsentListener', function(consent){
  if(consent.allowed || (consent.categories && consent.categories.analytics)){
    hsLoadGtm();
  }
}]);


 // Start VWO Async SmartCode

window._vwo_code || (function() {
    var account_id=553023,
    version=2.1,
    settings_tolerance=2000,
    hide_element='body',
    hide_element_style = 'opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;transition:none !important;',
    /* DO NOT EDIT BELOW THIS LINE */
    f=false,w=window,d=document,v=d.querySelector('#vwoCode'),cK='_vwo_'+account_id+'_settings',cc={};try{var c=JSON.parse(localStorage.getItem('_vwo_'+account_id+'_config'));cc=c&&typeof c==='object'?c:{}}catch(e){}var stT=cc.stT==='session'?w.sessionStorage:w.localStorage;code={nonce:v&&v.nonce,use_existing_jquery:function(){return typeof use_existing_jquery!=='undefined'?use_existing_jquery:undefined},library_tolerance:function(){return typeof library_tolerance!=='undefined'?library_tolerance:undefined},settings_tolerance:function(){return cc.sT||settings_tolerance},hide_element_style:function(){return'{'+(cc.hES||hide_element_style)+'}'},hide_element:function(){if(performance.getEntriesByName('first-contentful-paint')[0]){return''}return typeof cc.hE==='string'?cc.hE:hide_element},getVersion:function(){return version},finish:function(e){if(!f){f=true;var t=d.getElementById('_vis_opt_path_hides');if(t)t.parentNode.removeChild(t);if(e)(new Image).src='https://dev.visualwebsiteoptimizer.com/ee.gif?a='+account_id+e}},finished:function(){return f},addScript:function(e){var t=d.createElement('script');t.type='text/javascript';if(e.src){t.src=e.src}else{t.text=e.text}v&&t.setAttribute('nonce',v.nonce);d.getElementsByTagName('head')[0].appendChild(t)},load:function(e,t){var n=this.getSettings(),i=d.createElement('script'),r=this;t=t||{};if(n){i.textContent=n;d.getElementsByTagName('head')[0].appendChild(i);if(!w.VWO||VWO.caE){stT.removeItem(cK);r.load(e)}}else{var o=new XMLHttpRequest;o.open('GET',e,true);o.withCredentials=!t.dSC;o.responseType=t.responseType||'text';o.onload=function(){if(t.onloadCb){return t.onloadCb(o,e)}if(o.status===200||o.status===304){w._vwo_code.addScript({text:o.responseText})}else{w._vwo_code.finish('&e=loading_failure:'+e)}};o.onerror=function(){if(t.onerrorCb){return t.onerrorCb(e)}w._vwo_code.finish('&e=loading_failure:'+e)};o.send()}},getSettings:function(){try{var e=stT.getItem(cK);if(!e){return}e=JSON.parse(e);if(Date.now()>e.e){stT.removeItem(cK);return}return e.s}catch(e){return}},init:function(){if(d.URL.indexOf('__vwo_disable__')>-1)return;var e=this.settings_tolerance();w._vwo_settings_timer=setTimeout(function(){w._vwo_code.finish();stT.removeItem(cK)},e);var t;if(this.hide_element()!=='body'){t=d.createElement('style');var n=this.hide_element(),i=n?n+this.hide_element_style():'',r=d.getElementsByTagName('head')[0];t.setAttribute('id','_vis_opt_path_hides');v&&t.setAttribute('nonce',v.nonce);t.setAttribute('type','text/css');if(t.styleSheet)t.styleSheet.cssText=i;else t.appendChild(d.createTextNode(i));r.appendChild(t)}else{t=d.getElementsByTagName('head')[0];var i=d.createElement('div');i.style.cssText='z-index: 2147483647 !important;position: fixed !important;left: 0 !important;top: 0 !important;width: 100% !important;height: 100% !important;background: white !important;display: block !important;';i.setAttribute('id','_vis_opt_path_hides');i.classList.add('_vis_hide_layer');t.parentNode.insertBefore(i,t.nextSibling)}var o=window._vis_opt_url||d.URL,s='https://dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(o)+'&vn='+version;if(w.location.search.indexOf('_vwo_xhr')!==-1){this.addScript({src:s})}else{this.load(s+'&x=true')}}};w._vwo_code=code;code.init();})();(function(){var i=window;function t(){if(i._vwo_code){var e=t.hidingStyle=document.getElementById('_vis_opt_path_hides')||t.hidingStyle;if(!i._vwo_code.finished()&&!_vwo_code.libExecuted&&(!i.VWO||!VWO.dNR)){if(!document.getElementById('_vis_opt_path_hides')){document.getElementsByTagName('head')[0].appendChild(e)}requestAnimationFrame(t)}}}t()})();
});


!function(){"use strict";window.RudderSnippetVersion="3.0.60";var e="rudderanalytics";window[e]||(window[e]=[])
    ;var rudderanalytics=window[e];if(Array.isArray(rudderanalytics)){
      if(true===rudderanalytics.snippetExecuted&&window.console&&console.error){
        console.error("RudderStack JavaScript SDK snippet included more than once.")}else{rudderanalytics.snippetExecuted=true,
          window.rudderAnalyticsBuildType="legacy";var sdkBaseUrl="https://cdn.rudderlabs.com";var sdkVersion="v3"
          ;var sdkFileName="rsa.min.js";var scriptLoadingMode="async"
          ;var r=["setDefaultInstanceKey","load","ready","page","track","identify","alias","group","reset","setAnonymousId","startSession","endSession","consent"]
          ;for(var n=0;n<r.length;n++){var t=r[n];rudderanalytics[t]=function(r){return function(){var n
          ;Array.isArray(window[e])?rudderanalytics.push([r].concat(Array.prototype.slice.call(arguments))):null===(n=window[e][r])||void 0===n||n.apply(window[e],arguments)
                                                                                                  }}(t)}try{
            new Function('class Test{field=()=>{};test({prop=[]}={}){return prop?(prop?.property??[...prop]):import("");}}'),
              window.rudderAnalyticsBuildType="modern"}catch(i){}var d=document.head||document.getElementsByTagName("head")[0]
              ;var o=document.body||document.getElementsByTagName("body")[0];window.rudderAnalyticsAddScript=function(e,r,n){
                var t=document.createElement("script");t.src=e,t.setAttribute("data-loader","RS_JS_SDK"),r&&n&&t.setAttribute(r,n),
                  "async"===scriptLoadingMode?t.async=true:"defer"===scriptLoadingMode&&(t.defer=true),
                  d?d.insertBefore(t,d.firstChild):o.insertBefore(t,o.firstChild)},window.rudderAnalyticsMount=function(){!function(){
                if("undefined"==typeof globalThis){var e;var r=function getGlobal(){
                  return"undefined"!=typeof self?self:"undefined"!=typeof window?window:null}();r&&Object.defineProperty(r,"globalThis",{
                    value:r,configurable:true})}
              }(),window.rudderAnalyticsAddScript("".concat(sdkBaseUrl,"/").concat(sdkVersion,"/").concat(window.rudderAnalyticsBuildType,"/").concat(sdkFileName),"data-rsa-write-key","27KAbww1XL2iv8mk4kKxHy4XYtt")
                                                                                                                         },
                "undefined"==typeof Promise||"undefined"==typeof globalThis?window.rudderAnalyticsAddScript("https://polyfill-fastly.io/v3/polyfill.min.js?version=3.111.0&features=Symbol%2CPromise&callback=rudderAnalyticsMount"):window.rudderAnalyticsMount()
                                                                                          ;var loadOptions={};rudderanalytics.load("27KAbww1XL2iv8mk4kKxHy4XYtt","https://remote-dataplane.rudderstack.com",loadOptions)}}}();


rudderanalytics.ready(() => {
rudderanalytics.page()
});


hbspt.forms.create({
    portalId: "7405301",
    formId: "11e75c1f-fed8-454f-97eb-be0b8615890c",
    region: "na1",
    //onFormReady: ((form) => trySettingFormTarget(form)),
    onFormReady: function($form) {
    trySettingFormTarget($form);

    //console.log($form);

    var clearout = window.clearout = window.clearout || [],
        opts = {
          "app_token": "db2c4a69b86bb470be6c930eb4609e0c:af10b2c7ae4d9e70c351750713d96112b15c8f334c430f7e3775cf32d109da45",
          "api_url": "https://api.clearout.io",
          "mode": "ajax",
          "timeout": 10
        };
    clearout.push(["initialize", opts]),
      function() {
      var t = document,
          e = t.createElement("script"),
          a = t.getElementsByTagName("script")[0];
      e.type = "text/javascript", e.async = !0, e.src = "https://clearout.io/wp-content/co-js-widget/clearout_js_widget.js", a.parentNode.insertBefore(e, a)
    }();

    initializeSelect2($form);

    // Observe the form for changes (e.g., when dependent fields are loaded)
    observeFormChanges($form);
    var getSelectText = $form.find('select option:first').text();
    $('.book-demo-modal select[name="company_headquarters"]').select2({
      placeholder: getSelectText,
      dropdownParent: $('.book-demo-modal')
    });

    function checkFieldValue(field) {
      if ($(field).val()) {
        $(field).closest('.hs-form-field').addClass('focused');
      } else {
        $(field).closest('.hs-form-field').removeClass('focused');
      }
    }

    var getSubmitButtonText = $form.find('.hs-button').val();

    $("#submitFormButton .sc-button-text").text(getSubmitButtonText);

    $(document).ready(function() {
      $('.book-demo-modal .hs-form-field .hs-input').each(function() {
        checkFieldValue(this);
      });

      $('.single-select-book-demo').each(function() {
        checkFieldValue(this);
      });
    });

    $(document).on('focusout', '.book-demo-modal .hs-form-field input', function() {
      var text_val = $(this).val();
      if (text_val === "") {
        //console.log("empty!");
        $(this).removeClass('has-value');
        $(this).closest('.hs-form-field').find('.clear-field-value').hide();
      } else {
        $(this).addClass('has-value');
        $(this).closest('.hs-form-field').find('.clear-field-value').show();
      }
      checkFieldValue(this); 
    });

    $(document).on('focus', '.book-demo-modal .hs-form-field .hs-input', function() {
      $(this).closest('.hs-form-field').addClass('focused');
    }).on('blur', '.book-demo-modal .hs-form-field .hs-input', function() {
      checkFieldValue(this); 
    });

    $(document).on('select2:open', '.single-select-book-demo', function() {
      $(this).closest('.hs-form-field').addClass('focused');
    }).on('select2:close', '.single-select-book-demo', function() {
      checkFieldValue(this); 
    });

    $(document).on('change', '.book-demo-modal .hs-form-field .hs-input, .single-select-book-demo', function() {
      checkFieldValue(this);
    });
  },
    onFormSubmit: function($form) {
      $('.sc-button-text').hide();
      $('.spinner-loader').show();
      var getEmail = $form.find('input[type="email"]').val();

      trackEvent(
        {
          name: 'Form Submitted',
          eventProps: {
            domain: 'marketing-website',
          },
        },
        {
          formName: 'Book Demo',
          locationOfAction: 'book-demo',
          formFieldValues: {
            email: getEmail, // The user email
            hubspotFormId: "11e75c1f-fed8-454f-97eb-be0b8615890c", 
          },
        }
      )
    },
      onFormSubmitted: function($form) {
        $('.spinner-loader').hide();
        $('.sc-button-text').show();
        $('.sticky-header-book-demo').hide();
        $("#header-book-demo").removeClass('in');
        $('.book-demo-modal').hide();
        $('.book-demo-text').hide();
      },
        onFormError: function($form) {
          $('.spinner-loader').hide();
          $('.sc-button-text').show();
        }
  });
  function trySettingFormTarget(form) {
    if (window['LDBookItV2'] && window['LDBookItV2'].setFormTarget) {
      LDBookItV2.setFormTarget(form.id ? form : form[0]);
    }
    else {
      window.setTimeout(() => trySettingFormTarget(form), 2000);
    }
  }
  var _ld_scriptEl = document.createElement('script');
  _ld_scriptEl.src = 'https://cdn.leandata.com/js-snippet/ld-book-v2.js';
  _ld_scriptEl.addEventListener('load', function () {
    LDBookItV2.initialize('00D0900000CwMMeEAN', 'BookItDemo', 'ld_bookit_log_id', { autoSubmit: true });
    LDBookItV2.setFormProvider('hubspot_embed');
  });
  document.body.appendChild(_ld_scriptEl);

  // Function to initialize select2 for dropdowns
  function initializeSelect2($form) {
    var getSelectText = $form.find('select option:first').text();
    $form.find('select').each(function() {
      if (!$(this).hasClass('select2-hidden-accessible')) {
        $(this).select2({
          minimumResultsForSearch: Infinity,
          placeholder: getSelectText,
        });
      }
    });
  }

  // Function to observe form changes and reinitialize select2
  function observeFormChanges($form) {
    // Use MutationObserver to detect changes in the form
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'childList') {
          // Reinitialize select2 for any new dropdowns
          initializeSelect2($form);
        }
      });
    });

    // Start observing the form for changes
    observer.observe($form[0], {
      childList: true, // Observe added or removed elements
      subtree: true, // Observe all descendants
    });
  }


  document.addEventListener("DOMContentLoaded", function () {
    let lastActiveCard = null; // Store the last hovered card

    // Debounce function to limit how often the resize event fires
    function debounce(func, wait) {
      let timeout;
      return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    }

    function setCardHeights() {
      document.querySelectorAll(".gridCards").forEach(grid => {
        const rows = grid.querySelectorAll(".cards-row");

        rows.forEach(row => {
          const cards = row.querySelectorAll(".card");

          // Reset heights before recalculating
          cards.forEach(card => {
            card.style.height = "auto";
            const cardImage = card.querySelector(".card-image");
            if (cardImage) {
              cardImage.style.height = "auto"; // Reset image height
            }
          });

          // Find max height among cards
          let maxHeight = 0;
          cards.forEach(card => {
            const cardText = card.querySelector(".card-text");
            if (cardText) {
              const textHeight = cardText.offsetHeight;
              if (textHeight > maxHeight) {
                maxHeight = textHeight;
              }
            }
          });

          // Apply max height to all cards and their images
          cards.forEach(card => {
            card.style.height = `${maxHeight}px`;
            const cardImage = card.querySelector(".card-image");
            if (cardImage) {
              cardImage.style.height = `${maxHeight}px`; // Set the same height for image
            }
          });
        });
      });
    }

    function activateGridCards() {
      setCardHeights(); // Set card heights including images

      document.querySelectorAll(".gridCards").forEach(grid => {
        const rows = grid.querySelectorAll(".cards-row");

        rows.forEach(row => {
          const cards = row.querySelectorAll(".card");

          // Add hover effect
          cards.forEach(card => {
            card.addEventListener("mouseenter", function () {
              cards.forEach(c => c.classList.remove("active"));
              this.classList.add("active");
              lastActiveCard = this; // Update last active card
            });
          });
        });
      });

      // If there was a last hovered card, make sure it remains active
      if (lastActiveCard) {
        lastActiveCard.classList.add("active");
      }
    }

    // Initial call
    activateGridCards();

    // Debounced resize event
    const debouncedActivateGridCards = debounce(activateGridCards, 50);
    window.addEventListener("resize", debouncedActivateGridCards);

    // Handle layout changes (e.g., zoom)
    const mediaQuery = window.matchMedia("(min-width: 1440px)");
    mediaQuery.addEventListener("change", activateGridCards);
  });



  //   Slick slider
  $(document).ready(function () {
    function initializeSlick() {
      if ($(window).width() <= 767) {
        if (!$(".gridCards .cards-row").hasClass("slick-initialized")) {
          $(".gridCards .cards-row").slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: false,
            autoplay: true,
            speed:600,
            autoplaySpeed: 2500,
            responsive: [
              {
                breakpoint: 421, 
                settings: {
                  slidesToShow: 1
                }
              }
            ]
          });
        }
      } else {
        if ($(".gridCards .cards-row").hasClass("slick-initialized")) {
          $(".gridCards .cards-row").slick("unslick");
        }
      }
    }

    // Initialize on page load
    initializeSlick();

    // Re-check on window resize
    $(window).resize(function () {
      initializeSlick();
    });
    setTimeout(function(){
    },1500);
  });


    //   $(window).on('load', function () {
        $(document).ready(function(){
            if ($('.slider').length) {
              $('.slider .slide[style*="display: none"]').remove();
        
              setTimeout(function () {
                $('.slider').slick({
                  dots:  true ,
                  infinite: true,
                  speed: 1000,
                  slidesToShow: 2.73,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 6000,
                  arrows: false,
                  centerMode: false,
                  responsive: [
                  {
                  breakpoint: 1441,
                  settings: {
                  slidesToShow: 2.73,
                  slidesToScroll: 1
                }
                                   },
                                   {
                                   breakpoint: 768,
                                   settings: {
                                   slidesToShow: 1,
                                   slidesToScroll: 1
                                   }
                         }
                         ]
            });
        
            function animateDots() {
              $('.slick-dots li button').removeClass('active-progress');
              $('.slick-dots li.slick-active button').addClass('active-progress');
            }
        
            $('.slider').on('beforeChange', function () {
              $('.slick-dots li button').removeClass('active-progress');
            });
        
            $('.slider').on('afterChange', function () {
              animateDots();
            });
        
            animateDots();
          }, 500);
          }
          });

          
type="application/ld+json"
[
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "186057898075",
    "url": "https://remote.com",
    "inLanguage": "en-us",
    "name": "Homepage",
    "description": "Hire international talent in minutes. Remote is the most disruptive global payroll, tax, HR and compliance solution for distributed teams.",
    "dateCreated": "February 12, 2025",
    "dateModified": "March 19, 2025",
    "isPartOf": {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "1U31hVvDr9xMljrbwCBo9H",
      "name": "Remote Europe Holding B.V",
      "url": "https://remote.com",
      "description": "Remote's website offers products such as Human Relations Information System (HRIS), employer of record (EOR), payroll, and contractor management. Remote's website also includes a job board where employers can list open roles for employees or contractors.",
      "inLanguage": "en-us",
      "publisher": {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "6ll0LTRqDNQf096vk7OesO",
        "name": "Remote",
        "foundingDate": "2019-01-01",
        "knowsAbout": "Remote specializes in human relations (HR), human relations information system (HRIS), employer of record (EOR), payroll, and contractor management.",
        "email": "help@remote.com",
        "description": "Remote offers products such as Human Relations Information System (HRIS), employer of record (EOR), payroll, and contractor management.",
        "logo": {
          "@context": "https://schema.org",
          "@type": "ImageObject",
          "@id": "3GW3LxBcB50zZ61dUD0HOz",
          "name": "Remote Logo",
          "description": "Remote logo on a blue background.",
          "contentUrl": "https://images.ctfassets.net/dlbjkw4rng8s/3GW3LxBcB50zZ61dUD0HOz/social-remote-employ.png",
          "encodingFormat": "image/png",
          "width": 1200,
          "height": 630
        },
        "brand": {
          "@context": "https://schema.org",
          "@type": "Brand",
          "@id": "3NAztscacdiyUTPV6CtfOx",
          "name": "Remote",
          "logo": {
            "@context": "https://schema.org",
            "@type": "ImageObject",
            "@id": "3GW3LxBcB50zZ61dUD0HOz",
            "name": "Remote Logo",
            "description": "Remote logo on a blue background.",
            "contentUrl": "https://images.ctfassets.net/dlbjkw4rng8s/3GW3LxBcB50zZ61dUD0HOz/social-remote-employ.png",
            "encodingFormat": "image/png",
            "width": 1200,
            "height": 630
          }
        },
        "founder": [
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "13EZ9aQoOxchX5hy1Sc1Kc",
            "name": "Job van der Voort"
          },
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "4SywP2X4lZcTzbwKFdAL1e",
            "name": "Marcelo Lebre"
          }
        ]
      }
    }
  },
  {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "HomePage",
      "item": "https://remote.com"
    }
    
    
    
  ]
}
]       


document.addEventListener("DOMContentLoaded", function () {
    let priceElements = document.querySelectorAll(".price-box");
    let priceplans = [];

    priceElements.forEach(item => {
      let priceName = item.querySelector("h4").textContent.trim();
      let price = item.querySelector("h3 span.monthly").textContent.trim();
      let getCurrency = item.querySelector("h3 span.monthly").getAttribute("data-currency");

      priceplans.push({ priceName, price, getCurrency });
    });

    let schemaData = {
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      "name": "Remote Pricing Plans",
      "itemListElement": priceplans.map(priceplan => ({
        "@type": "Offer",
        "name": priceplan.priceName,
        "description": "",
        "priceCurrency": priceplan.getCurrency,
        "price": priceplan.price,
        "validFrom": "2024-01-01",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "",
          "priceCurrency": ""
        },
        "availability": "https://schema.org/InStock",
        "url": "https://remote.com"
      }))
    };

    let scriptTag = document.createElement("script");
    scriptTag.type = "application/ld+json";
    scriptTag.textContent = JSON.stringify(schemaData);
    document.head.appendChild(scriptTag);
  });


  document.addEventListener("DOMContentLoaded", function () {
    let faqElements = document.querySelectorAll(".faqs .custom_accord");
    let faqs = [];

    faqElements.forEach(item => {
      let question = item.querySelector(".accordion-title").textContent.trim();
      let answer = item.querySelector(".accordion-content").textContent.trim();

      faqs.push({ question, answer });
    });

    let schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "name": "Frequently Asked Questions",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    let scriptTag = document.createElement("script");
    scriptTag.type = "application/ld+json";
    scriptTag.textContent = JSON.stringify(schemaData);
    document.head.appendChild(scriptTag);
  });



  $(document).ready(function() {
    setTimeout(function(){
      $('.main-banner .content-container .image-container').addClass('active');
    },500);
    
    let $lottieContainer = $("#lottie-background");
    let lottiePath = $lottieContainer.data("lottie"); 
    if (lottiePath) {
      bodymovin.loadAnimation({
        container: $lottieContainer[0],
        renderer: "svg",
        loop: false,
        autoplay: true,
        path: lottiePath, 
        rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
      });
    } else {
      console.error("Lottie path is missing in data-lottie attribute.");
    }
  });


  mobileOnlySlider(".slider-holder", false, false, true, 767);

  function mobileOnlySlider($slidername, $dots, $arrows, $autoplay, $breakpoint) {
    var slider = $($slidername);
    var settings = {
      mobileFirst: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: $dots,
      arrows: $arrows,
      autoplay: $autoplay,
      responsive: [
        {
          breakpoint: $breakpoint,
          settings: "unslick",
        }
      ]
    };

    slider.slick(settings);

    $(window).on("resize", function () {
      if ($(window).width() > $breakpoint) {
        return;
      }
      if (!slider.hasClass("slick-initialized")) {
        return slider.slick(settings);
      }
    });
  } // Mobile Only Slider

  if ("IntersectionObserver" in window) {
    // Detect when animation should be triggered
    const trigger = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const dataTarget = entry.target;
          dataTarget.classList.add("visible");
          observer.unobserve(dataTarget);
        }
      });
    };

    // Configure the observer
    const options = {
      root: null,
      threshold: 0.35
    };

    // Create the animation observer
    const myObserver = new IntersectionObserver(trigger, options);
    const myAnimate = document.querySelectorAll(".animate");
    myAnimate.forEach((animate) => myObserver.observe(animate));
  }


  $(document).ready(function() {

    $(".lottie-animation").each(function () { // Loop through all elements with class
      let $this = $(this);
      let lottiePath = $this.data("lottie");
console.log("d");
      if (lottiePath) {
        bodymovin.loadAnimation({
          container: $this[0], // Convert jQuery object to plain DOM element
          renderer: "svg",
          loop: true,
          autoplay: true,
          path: lottiePath,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice" // Ensure it scales properly
          }
        });
      } else {
        console.error("Lottie path is missing in data-lottie attribute.");
      }
    });
    });


    function setEqualColumnHeights() {
        if (window.innerWidth > 959) {
          document.querySelectorAll('.imageGrid').forEach(section => {
            const columns = section.querySelectorAll('.imageGrid-cards > .imageGrid-card');
            let maxHeight = 0;
    
            columns.forEach(column => (column.style.height = 'auto'));
    
            // Step 2: Find the tallest column
            columns.forEach(column => {
              const height = column.offsetHeight; 
              if (height > maxHeight) {
                maxHeight = height;
              }
            });
    
            columns.forEach(column => (column.style.height = `${maxHeight}px`));
          });
        } else {
          document.querySelectorAll('.imageGrid .imageGrid-cards > .imageGrid-card').forEach(column => {
            column.style.height = 'auto';
          });
        }
      }
    
      function debounce(func, wait) {
        let timeout;
        return function (...args) {
          clearTimeout(timeout);
          timeout = setTimeout(() => func.apply(this, args), wait);
        };
      }
    
      window.addEventListener("load", setEqualColumnHeights);
      window.addEventListener("resize", debounce(setEqualColumnHeights, 100));
    

      // Start of HubSpot Analytics Code
     var _hsq = _hsq || [];
      _hsq.push(["setContentType", "standard-page"]);
      _hsq.push(["setCanonicalUrl", "https:\/\/remote.com"]);
      _hsq.push(["setPageId", "186057898075"]);
      _hsq.push(["setContentMetadata", {
          "contentPageId": 186057898075,
          "legacyPageId": "186057898075",
          "contentFolderId": null,
          "contentGroupId": null,
          "abTestId": null,
          "languageVariantId": 186057898075,
          "languageCode": "en-us",
          
          
      }]);     
      
      var hsVars = {
        render_id: "37962a58-32c6-4c87-92e9-6912b57fa651",
        ticks: 1742399506231,
        page_id: 186057898075,
        
        content_group_id: 0,
        portal_id: 7405301,
        app_hs_base_url: "https://app.hubspot.com",
        cp_hs_base_url: "https://cp.hubspot.com",
        language: "en-us",
        analytics_page_type: "standard-page",
        scp_content_type: "",
        
        analytics_page_id: "186057898075",
        category_id: 1,
        folder_id: 0,
        is_hubspot_user: false
    }
          