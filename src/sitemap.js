const convert = require('xml-js'),
  fs = require('fs'),
  options = {
    compact: true,
    ignoreComment: true,
    spaces: 4
  },
  moment = require('moment');
const url = 'https://www.elsabenoldi.com';

const projects = [{
    projectId: "beauti",
    projectName: "Beauti",
    projectDescription: "Refreshed brand identity for a beauty and skin clinic chain in London. The visual language has evolved to feel more inclusive, open and sophisticated. The customized typography matches soft curves and straight lines and the letters reveal sinuous shapes. The identity captures its unique mix of playfulness and harmony.",
    clientName: "Beauti Skin Clinic",
    clientUrl: "http://www.beautiskinclinic.com",
    services: "Logo Design, Web Design, Brochure",
    country: "UK",
    mainImgUrlSmall: "/assets/images/projects/beauti/Beauti-skin-clinic-london-website-design-mobile.jpg",
    mainImgUrlLarge: "/assets/images/projects/beauti/Beauti-skin-clinic-london-website-design-main.jpg",
    thumbnailUrlSmall: "/assets/images/projects/beauti/Beauti-skin-clinic-london-website-design-mobile.jpg",
    thumbnailUrlLarge: "/assets/images/projects/beauti/Beauti-skin-clinic-london-website-design-thumb.jpg",
    galleryImgs: [{
        smallImgUrl: "/assets/images/projects/beauti/Beauti-skin-clinic-london-logo-design-mobile.jpg",
        largeImgUrl: "/assets/images/projects/beauti/Beauti-skin-clinic-london-logo-design-big.jpg",
        type: "full"
      },
      {
        smallImgUrl: "/assets/images/projects/beauti/Beauti-skin-clinic-london-salon-brochure-mobile.jpg",
        largeImgUrl: "/assets/images/projects/beauti/Beauti-skin-clinic-london-salon-brochure.jpg",
        type: "half"
      },
      {
        smallImgUrl: "/assets/images/projects/beauti/Beauti-skin-clinic-london-beauty-brochure-mobile.jpg",
        largeImgUrl: "/assets/images/projects/beauti/Beauti-skin-clinic-london-beauty-brochure.jpg",
        type: "half"
      },
      {
        smallImgUrl: "/assets/images/projects/beauti/Beauti-skin-clinic-london-website-mobileapp-mobile.jpg",
        largeImgUrl: "/assets/images/projects/beauti/Beauti-skin-clinic-london-website-mobileapp-big.jpg",
        type: "full"
      }
    ],
    imgAlt: "Beauti Skin Clinic London | Elsa Benoldi Graphic Design"
  },
  {
    projectId: "italy-at-frieze",
    projectName: "Italy at Frieze",
    projectDescription: "Catalogue design for the Italy at Frieze exhibition that was held at the Embassy on Italy in London. The one-of-a-kind event in London was part of the programme of the art fairs Frieze London and Frieze Masters, which draw collectors and art lovers from around the world.",
    clientName: "Embassy of Italy",
    clientUrl: "",
    services: "Catalogue Design",
    country: "UK",
    mainImgUrlSmall: "/assets/images/projects/italyatfrieze/italy-frieze-contemporary-art-exhibition-catalogue-scheggi-mobile.jpg",
    mainImgUrlLarge: "/assets/images/projects/italyatfrieze/italy-frieze-contemporary-art-exhibition-catalogue-scheggi-main.jpg",
    thumbnailUrlSmall: "/assets/images/projects/italyatfrieze/italy-frieze-contemporary-art-exhibition-catalogue-scheggi-mobile.jpg",
    thumbnailUrlLarge: "/assets/images/projects/italyatfrieze/italy-frieze-contemporary-art-exhibition-catalogue-scheggi-thumb.jpg",
    galleryImgs: [{
        smallImgUrl: "/assets/images/projects/italyatfrieze/italy-frieze-contemporary-art-exhibition-catalogue-mobile.jpg",
        largeImgUrl: "/assets/images/projects/italyatfrieze/italy-frieze-contemporary-art-exhibition-catalogue-big.jpg",
        type: "full"
      },
      {
        smallImgUrl: "/assets/images/projects/italyatfrieze/italy-frieze-contemporary-art-exhibition-catalogue-pistoletto-mobile.jpg",
        largeImgUrl: "/assets/images/projects/italyatfrieze/italy-frieze-contemporary-art-exhibition-catalogue-pistoletto-big.jpg",
        type: "full"
      },
      {
        smallImgUrl: "/assets/images/projects/italyatfrieze/italy-frieze-contemporary-art-exhibition-embassy-pistoletto-mobile",
        largeImgUrl: "/assets/images/projects/italyatfrieze/italy-frieze-contemporary-art-exhibition-embassy-pistoletto-big.jpg",
        type: "full"
      }
    ],
    imgAlt: "Italy at Frieze | Elsa Benoldi Graphic Design"
  },
  {
    projectId: "De-Stress-Me",
    projectName: "De-Stress Me",
    projectDescription: "Branding design project for a new wellness & spa platform which provides useful information about new top spa offers, body care products and best beauty clinics in London. This project is currently work-in-progress.",
    clientName: "De-Stress Me",
    clientUrl: "",
    services: "Logo Design",
    country: "UK",
    mainImgUrlSmall: "/assets/images/projects/destressme/destressme-wellness-spa-skincare-logo-design-mobile.jpg",
    mainImgUrlLarge: "/assets/images/projects/destressme/destressme-wellness-spa-skincare-logo-design-main.jpg",
    thumbnailUrlSmall: "/assets/images/projects/destressme/destressme-wellness-spa-skincare-logo-design-mobile.jpg",
    thumbnailUrlLarge: "/assets/images/projects/destressme/destressme-wellness-spa-skincare-logo-design-thumb.jpg",
    galleryImgs: [{
        smallImgUrl: "/assets/images/projects/destressme/destressme-wellness-spa-skincare-soap-packaging-mobile.jpg",
        largeImgUrl: "/assets/images/projects/destressme/destressme-wellness-spa-skincare-soap-packaging-big.jpg",
        type: "full"
      },
      {
        smallImgUrl: "/assets/images/projects/destressme/destressme-wellness-spa-skincare-website-design-mobile.jpg",
        largeImgUrl: "/assets/images/projects/destressme/destressme-wellness-spa-skincare-website-design-big.jpg",
        type: "full"
      },
      {
        smallImgUrl: "/assets/images/projects/destressme/destressme-wellness-spa-skincare-phone-case-mobile.jpg",
        largeImgUrl: "/assets/images/projects/destressme/destressme-wellness-spa-skincare-phone-case-big.jpg",
        type: "full"
      }
    ],
    imgAlt: "De–Stress Me | Elsa Benoldi Graphic Design"
  },
  {
    projectId: "Faceology",
    projectName: "Faceology",
    projectDescription: "Branding project for a global beauty chain specialized in facial treatments. The first shop has been opend in Moscow, Russia. The project includes logo design, packaging, stationery, signs, uniform and website design.",
    clientName: "Faceology",
    clientUrl: "",
    services: "Creative Direction",
    country: "Russia",
    mainImgUrlSmall: "/assets/images/projects/faceology/faceology-skincare-beauty-salon-soap-packaging-mobile.jpg",
    mainImgUrlLarge: "/assets/images/projects/faceology/faceology-skincare-beauty-salon-soap-packaging-main.jpg",
    thumbnailUrlSmall: "/assets/images/projects/faceology/faceology-skincare-beauty-salon-soap-packaging-mobile.jpg",
    thumbnailUrlLarge: "/assets/images/projects/faceology/faceology-skincare-beauty-salon-soap-packaging-thumb.jpg",
    galleryImgs: [{
        smallImgUrl: "/assets/images/projects/faceology/faceology-skincare-beauty-salon-logo-design-mobile.jpg",
        largeImgUrl: "/assets/images/projects/faceology/faceology-skincare-beauty-salon-logo-design-half.jpg",
        type: "half"
      },
      {
        smallImgUrl: "/assets/images/projects/faceology/faceology-skincare-beauty-salon-icons-design-mobile.jpg",
        largeImgUrl: "/assets/images/projects/faceology/faceology-skincare-beauty-salon-icons-design-half.jpg",
        type: "half"
      },
      {
        smallImgUrl: "/assets/images/projects/faceology/faceology-skincare-beauty-salon-website-design-mobile.jpg",
        largeImgUrl: "/assets/images/projects/faceology/faceology-skincare-beauty-salon-website-design-big.jpg",
        type: "full"
      },
      {
        smallImgUrl: "/assets/images/projects/faceology/faceology-skincare-beauty-salon-interior-design-mobile.jpg",
        largeImgUrl: "/assets/images/projects/faceology/faceology-skincare-beauty-salon-interior-design-half.jpg",
        type: "half"
      },
      {
        smallImgUrl: "/assets/images/projects/faceology/faceology-skincare-beauty-salon-business-cards-mobile.jpg",
        largeImgUrl: "/assets/images/projects/faceology/faceology-skincare-beauty-salon-business-cards-half.jpg",
        type: "half"
      }
    ],
    imgAlt: "Faceology | Elsa Benoldi Graphic Design"
  },
  {
    projectId: "nailor",
    projectName: "Nailor",
    projectDescription: "Brand identity for a new professional line of nail polishes. The project includes logo and labels design. Nailor is a solution for creative professionals which offers best-selling shades of gel and nail polish to create a true masterpiece.",
    clientName: "Nailor",
    clientUrl: "https://nailorstore.com/",
    services: "Logo, Packaging, Biz Card",
    country: "Latvia",
    mainImgUrlSmall: "/assets/images/projects/nailor/nailor-nail-polish-manicure-business-card-design-mobile.jpg",
    mainImgUrlLarge: "/assets/images/projects/nailor/nailor-nail-polish-manicure-business-card-design-main.jpg",
    thumbnailUrlSmall: "/assets/images/projects/nailor/nailor-nail-polish-manicure-business-card-design-mobile.jpg",
    thumbnailUrlLarge: "/assets/images/projects/nailor/nailor-nail-polish-manicure-business-card-design-thumb.jpg",
    galleryImgs: [{
        smallImgUrl: "/assets/images/projects/nailor/nailor-nail-polish-manicure-logo-design-mobile.jpg",
        largeImgUrl: "/assets/images/projects/nailor/nailor-nail-polish-manicure-logo-design-half.jpg",
        type: "half"
      },
      {
        smallImgUrl: "/assets/images/projects/nailor/nailor-nail-polish-manicure-gift-packaging-design-mobile.jpg",
        largeImgUrl: "/assets/images/projects/nailor/nailor-nail-polish-manicure-gift-packaging-design-half.jpg",
        type: "half"
      },
      {
        smallImgUrl: "/assets/images/projects/nailor/nailor-nail-polish-manicure-label-packaging-mobile.jpg",
        largeImgUrl: "/assets/images/projects/nailor/nailor-nail-polish-manicure-label-packaging-big.jpg",
        type: "full"
      },
      {
        smallImgUrl: "/assets/images/projects/nailor/nailor-nail-polish-manicure-packaging-design-mobile.jpg",
        largeImgUrl: "/assets/images/projects/nailor/nailor-nail-polish-manicure-packaging-design-half.jpg",
        type: "half"
      },
      {
        smallImgUrl: "/assets/images/projects/nailor/nailor-nail-art-polish-manicure-packaging-label-design-mobile.jpg",
        largeImgUrl: "/assets/images/projects/nailor/nailor-nail-art-polish-manicure-packaging-label-design-half.jpg",
        type: "half"
      }
    ],
    imgAlt: "Nailor | Elsa Benoldi Graphic Design"
  },
  {
    projectId: "Tenten",
    projectName: "Tenten",
    projectDescription: "Branding project for a worldwide nail salon chain. Starting from the logo design I’ve been asked to developed all the branding assets including: biz cards, facade design, packaging and bags, staff uniform and website. The custom typography which matches soft curves and straight shapes, evokes the idea of fingers that create letters. These bold and distinctive shapes, combined with coloured semi-circles that represent polished nails, reveals the playful spirit of a fresh new manicure and pedicure chain.",
    clientName: "Tenten",
    clientUrl: "https://tenten-nails.com/",
    services: "Creative Direction",
    country: "Georgia",
    mainImgUrlSmall: "/assets/images/projects/tenten/tenten-nail-care-salon-manicure-logo-design-mobile.jpg",
    mainImgUrlLarge: "/assets/images/projects/tenten/tenten-nail-care-salon-manicure-logo-design-main.jpg",
    thumbnailUrlSmall: "/assets/images/projects/tenten/tenten-nail-care-salon-manicure-logo-design-mobile.jpg",
    thumbnailUrlLarge: "/assets/images/projects/tenten/tenten-nail-care-salon-manicure-logo-design-thumb.jpg",
    galleryImgs: [{
        smallImgUrl: "/assets/images/projects/tenten/tenten-nail-care-salon-manicure-packaging-design-mobile.jpg",
        largeImgUrl: "/assets/images/projects/tenten/tenten-nail-care-salon-manicure-packaging-design-half.jpg",
        type: "half"
      },
      {
        smallImgUrl: "/assets/images/projects/tenten/tenten-nail-care-salon-manicure-icons-design-mobile.jpg",
        largeImgUrl: "/assets/images/projects/tenten/tenten-nail-care-salon-manicure-icons-design-half.jpg",
        type: "half"
      },
      {
        smallImgUrl: "/assets/images/projects/tenten/tenten-nail-care-salon-foot-cream-packaging-design-mobile.jpg",
        largeImgUrl: "/assets/images/projects/tenten/tenten-nail-care-salon-foot-cream-packaging-design-half.jpg",
        type: "half"
      },
      {
        smallImgUrl: "/assets/images/projects/tenten/tenten-nail-care-salon-hand-cream-packaging-design-mobile.jpg",
        largeImgUrl: "/assets/images/projects/tenten/tenten-nail-care-salon-hand-cream-packaging-design-half.jpg",
        type: "half"
      },
      {
        smallImgUrl: "/assets/images/projects/tenten/tenten-nail-care-salon-website-design-mobile.jpg",
        largeImgUrl: "/assets/images/projects/tenten/tenten-nail-care-salon-website-design-big.jpg",
        type: "full"
      },
      {
        smallImgUrl: "/assets/images/projects/tenten/tenten-nail-care-salon-business-card-design-mobile.jpg",
        largeImgUrl: "/assets/images/projects/tenten/tenten-nail-care-salon-business-card-design-half.jpg",
        type: "half"
      },
      {
        smallImgUrl: "/assets/images/projects/tenten/tenten-nail-care-salon-uniform-apron-design-mobile.jpg",
        largeImgUrl: "/assets/images/projects/tenten/tenten-nail-care-salon-uniform-apron-design-half.jpg",
        type: "half"
      }
    ],
    imgAlt: "Tenten | Elsa Benoldi Graphic Design"
  },
  {
    projectId: "who-be-me",
    projectName: "Who Be Me",
    projectDescription: "Catalogue design for Kofi Setordji’s exhibition in Accra, Ghana. In this exhibition, Nada Moukarzel, founder of La Maison and curator of Who Be Me, creates a series of unique, living environments in which artist Kofi Setordji expresses and exhibits new artworks.",
    clientName: "La Maison",
    clientUrl: "",
    services: "Catalogue Design",
    country: "Ghana",
    mainImgUrlSmall: "/assets/images/projects/whobeme/whobeme-exhibition-ghana-art-catalogue-lamaison-kofi-setordji-mobile.jpg",
    mainImgUrlLarge: "/assets/images/projects/whobeme/whobeme-exhibition-ghana-art-catalogue-lamaison-kofi-setordji-main.jpg",
    thumbnailUrlSmall: "/assets/images/projects/whobeme/whobeme-exhibition-ghana-art-catalogue-lamaison-kofi-setordji-mobile.jpg",
    thumbnailUrlLarge: "/assets/images/projects/whobeme/whobeme-exhibition-ghana-art-catalogue-lamaison-kofi-setordji-thumb.jpg",
    galleryImgs: [{
        smallImgUrl: "/assets/images/projects/whobeme/whobeme-exhibition-ghana-catalogue-lamaison-kofi-setordji-mobile.jpg",
        largeImgUrl: "/assets/images/projects/whobeme/whobeme-exhibition-ghana-catalogue-lamaison-kofi-setordji-half.jpg",
        type: "half"
      },
      {
        smallImgUrl: "/assets/images/projects/whobeme/whobeme-exhibition-ghana-catalogue-ayse-birsel-bibi-seck-chair-mobile.jpg",
        largeImgUrl: "/assets/images/projects/whobeme/whobeme-exhibition-ghana-catalogue-ayse-birsel-bibi-seck-chair-half.jpg",
        type: "half"
      },
      {
        smallImgUrl: "/assets/images/projects/whobeme/whobeme-exhibition-ghana-art-painting-catalogue-lamaison-kofi-setordji-mobile.jpg",
        largeImgUrl: "/assets/images/projects/whobeme/whobeme-exhibition-ghana-art-painting-catalogue-lamaison-kofi-setordji-big.jpg",
        type: "full"
      }
    ],
    imgAlt: "Who Be Me | Elsa Benoldi Graphic Design"
  },
  {
    projectId: "Palchiki",
    projectName: "Palchiki",
    projectDescription: "Rebranding project for a russian retail chain of nail services (manicure and pedicure). Starting from the logo restyling, I developed all the branding assets among which: packaging and bags, pattern design, biz cards, price list and phone case.",
    clientName: "Palchiki",
    clientUrl: "",
    services: "Creative Direction",
    country: "Russia",
    mainImgUrlSmall: "/assets/images/projects/palchiki/palchiki-nailcare-salon-manicure-pedicure-nailart-logo-design-mobile.jpg",
    mainImgUrlLarge: "/assets/images/projects/palchiki/palchiki-nailcare-salon-manicure-pedicure-nailart-logo-design-main.jpg",
    thumbnailUrlSmall: "/assets/images/projects/palchiki/palchiki-nailcare-salon-manicure-pedicure-nailart-logo-design-mobile.jpg",
    thumbnailUrlLarge: "/assets/images/projects/palchiki/palchiki-nailcare-salon-manicure-pedicure-nailart-logo-design-thumb.jpg",
    galleryImgs: [{
        smallImgUrl: "/assets/images/projects/palchiki/palchiki-nailcare-salon-manicure-pedicure-nailart-phone-case-design-big.jpg",
        largeImgUrl: "/assets/images/projects/palchiki/palchiki-nailcare-salon-manicure-pedicure-nailart-phone-case-design-big.jpg",
        type: "full"
      },
      {
        smallImgUrl: "/assets/images/projects/palchiki/palchiki-nailcare-salon-manicure-pedicure-nailart-book-design-mobile.jpg",
        largeImgUrl: "/assets/images/projects/palchiki/palchiki-nailcare-salon-manicure-pedicure-nailart-book-design-big.jpg",
        type: "full"
      },
      {
        smallImgUrl: "/assets/images/projects/palchiki/palchiki-nailcare-salon-manicure-pedicure-nailart-bag-design-mobile.jpg",
        largeImgUrl: "/assets/images/projects/palchiki/palchiki-nailcare-salon-manicure-pedicure-nailart-bag-design-big.jpg",
        type: "full"
      }
    ],
    imgAlt: "Palchiki | Elsa Benoldi Graphic Design"
  },
  {
    projectId: "Baumann-Skin-Types",
    projectName: "Baumann Skin Types",
    projectDescription: "Baumann Skin Types flowers poster and card design. This scientific methodology is used to diagnose the skin type and match to a customized skincare regimen. For each skin type I designed the related printed card which shows a drawing of the flower that embodies the characteristics of that specific skin type. This project is part of the branding for Faceology, a global beauty chain specialized in facial treatments.",
    clientName: "Faceology",
    clientUrl: "",
    services: "Poster Design, Card Design",
    country: "Russia",
    mainImgUrlSmall: "/assets/images/projects/baumannskintypes/Baumann-Skincare-Type-Beauty-Cards-Mobile.jpg",
    mainImgUrlLarge: "/assets/images/projects/baumannskintypes/Baumann-Skincare-Type-Beauty-Cards-Main.jpg",
    thumbnailUrlSmall: "/assets/images/projects/baumannskintypes/Baumann-Skincare-Type-Beauty-Cards-Mobile.jpg",
    thumbnailUrlLarge: "/assets/images/projects/baumannskintypes/Baumann-Skincare-Type-Beauty-Cards-Thumb.jpg",
    galleryImgs: [{
        smallImgUrl: "/assets/images/projects/baumannskintypes/Baumann-Skincare-Type-Beauty-Catalogue-Mobile.jpg",
        largeImgUrl: "/assets/images/projects/baumannskintypes/Baumann-Skincare-Type-Beauty-Catalogue-Big.jpg",
        type: "full"
      },
      {
        smallImgUrl: "/assets/images/projects/baumannskintypes/Baumann-Skincare-Type-Beauty-Poster-Mobile.jpg",
        largeImgUrl: "/assets/images/projects/baumannskintypes/Baumann-Skincare-Type-Beauty-Poster-Big.jpg",
        type: "full"
      }
    ],
    imgAlt: "Baumann Skin Types | Elsa Benoldi Graphic Design"
  },
  {
    projectId: "Parma-360",
    projectName: "Parma 360",
    projectDescription: "Identity project for a contemporary art festival in Parma, Italy. The branding project includes: logo, signs, catalogue, city map and merchandising.",
    clientName: "Parma 360",
    clientUrl: "",
    services: "Design Direction",
    country: "Italy",
    mainImgUrlSmall: "/assets/images/projects/parma360/parma360-italy-festival-contemporary-art-illustration-brochure-design-mobile.jpg",
    mainImgUrlLarge: "/assets/images/projects/parma360/parma360-italy-festival-contemporary-art-illustration-brochure-design-main.jpg",
    thumbnailUrlSmall: "/assets/images/projects/parma360/parma360-italy-festival-contemporary-art-illustration-brochure-design-mobile.jpg",
    thumbnailUrlLarge: "/assets/images/projects/parma360/parma360-italy-festival-contemporary-art-illustration-brochure-design-thumb.jpg",
    galleryImgs: [{
        smallImgUrl: "/assets/images/projects/parma360/parma360-italy-festival-contemporary-art-illustration-brochure-magistretti-design-mobile.jpg",
        largeImgUrl: "/assets/images/projects/parma360/parma360-italy-festival-contemporary-art-illustration-brochure-magistretti-design-half.jpg",
        type: "half"
      },
      {
        smallImgUrl: "/assets/images/projects/parma360/parma360-italy-festival-contemporary-art-illustration-brochure-citymap-design-mobile.jpg",
        largeImgUrl: "/assets/images/projects/parma360/parma360-italy-festival-contemporary-art-illustration-brochure-citymap-design-half.jpg",
        type: "half"
      },
      {
        smallImgUrl: "/assets/images/projects/parma360/parma360-italy-festival-contemporary-art-illustration-print-design-mobile.jpg",
        largeImgUrl: "/assets/images/projects/parma360/parma360-italy-festival-contemporary-art-illustration-print-design-half.jpg",
        type: "half"
      },
      {
        smallImgUrl: "/assets/images/projects/parma360/parma360-italy-festival-contemporary-art-illustration-maurizio-galimberti-mobile.jpg",
        largeImgUrl: "/assets/images/projects/parma360/parma360-italy-festival-contemporary-art-illustration-maurizio-galimberti-half.jpg",
        type: "half"
      },
      {
        smallImgUrl: "/assets/images/projects/parma360/parma360-italy-festival-contemporary-art-illustration-leaflet-design-mobile.jpg",
        largeImgUrl: "/assets/images/projects/parma360/parma360-italy-festival-contemporary-art-illustration-leaflet-design-big.jpg",
        type: "full"
      },
      {
        smallImgUrl: "/assets/images/projects/parma360/parma360-italy-festival-contemporary-art-illustration-brochure-map-design-mobile.jpg",
        largeImgUrl: "/assets/images/projects/parma360/parma360-italy-festival-contemporary-art-illustration-brochure-map-design-half.jpg",
        type: "half"
      },
      {
        smallImgUrl: "/assets/images/projects/parma360/parma360-italy-festival-contemporary-art-illustration-tote-bag-mobile.jpg",
        largeImgUrl: "/assets/images/projects/parma360/parma360-italy-festival-contemporary-art-illustration-tote-bag-half.jpg",
        type: "half"
      },
      {
        smallImgUrl: "/assets/images/projects/parma360/parma360-italy-festival-contemporary-art-illustration-exhibition-mobile.jpg",
        largeImgUrl: "/assets/images/projects/parma360/parma360-italy-festival-contemporary-art-illustration-exhibition-half.jpg",
        type: "half"
      },
      {
        smallImgUrl: "/assets/images/projects/parma360/parma360-italy-festival-contemporary-art-illustration-exhibition-people-mobile.jpg",
        largeImgUrl: "/assets/images/projects/parma360/parma360-italy-festival-contemporary-art-illustration-exhibition-people-half.jpg",
        type: "half"
      }
    ],
    imgAlt: "Parma 360 | Elsa Benoldi Graphic Design"
  },
  {
    projectId: "Hito-Steyerl",
    projectName: "Hito Steyerl",
    projectDescription: "This is a conceptual design inspired by the Hito Steyerl’s exhibition at Serpentine Galleries in London. Hito Steyerl is a German filmmaker and artist whose work explores the complexities of the digital world, art, capitalism, and the implications of Artificial Intelligence for society. The design displays a closeup frame of one of the video which plays in the exhibition. The video shows abstract floating flowers on a black background.",
    clientName: "Hito Steyerl",
    clientUrl: "",
    services: "Poster & Invite Design",
    country: "UK",
    mainImgUrlSmall: "/assets/images/projects/hitosteyerl/hito-steyerl-exhibition-serpentine-london-art-poster-design-mobile.jpg",
    mainImgUrlLarge: "/assets/images/projects/hitosteyerl/hito-steyerl-exhibition-serpentine-london-art-poster-design-main.jpg",
    thumbnailUrlSmall: "/assets/images/projects/hitosteyerl/hito-steyerl-exhibition-serpentine-london-art-poster-design-mobile.jpg",
    thumbnailUrlLarge: "/assets/images/projects/hitosteyerl/hito-steyerl-exhibition-serpentine-london-art-poster-design-thumb.jpg",
    galleryImgs: [{
        smallImgUrl: "/assets/images/projects/hitosteyerl/hito-steyerl-exhibition-serpentine-london-gallery-poster-design-mobile.jpg",
        largeImgUrl: "/assets/images/projects/hitosteyerl/hito-steyerl-exhibition-serpentine-london-gallery-poster-design-big.jpg",
        type: "full"
      },
      {
        smallImgUrl: "/assets/images/projects/hitosteyerl/hito-steyerl-exhibition-serpentine-london-print-invite-design-mobile.jpg",
        largeImgUrl: "/assets/images/projects/hitosteyerl/hito-steyerl-exhibition-serpentine-london-print-invite-design-big.jpg",
        type: "full"
      },
      {
        smallImgUrl: "/assets/images/projects/hitosteyerl/hito-steyerl-exhibition-serpentine-london-pattern-design-mobile.jpg",
        largeImgUrl: "/assets/images/projects/hitosteyerl/hito-steyerl-exhibition-serpentine-london-pattern-design-big.jpg",
        type: "full"
      }
    ],
    imgAlt: "Hito Steyerl | Elsa Benoldi Graphic Design"
  },
  {
    projectId: "Summer-Poster",
    projectName: "Summer Poster",
    projectDescription: "Personal illustration inspired by the summer season.",
    clientName: "Personal Project",
    clientUrl: "",
    services: "Poster Design",
    country: "UK",
    mainImgUrlSmall: "/assets/images/projects/summerposter/summer-poster-digital-illustration-design-mobile.jpg",
    mainImgUrlLarge: "/assets/images/projects/summerposter/summer-poster-digital-illustration-design-main.jpg",
    thumbnailUrlSmall: "/assets/images/projects/summerposter/summer-poster-digital-illustration-design-mobile.jpg",
    thumbnailUrlLarge: "/assets/images/projects/summerposter/summer-poster-digital-illustration-design-thumb.jpg",
    galleryImgs: [{
      smallImgUrl: "/assets/images/projects/summerposter/summer-poster-digital-illustration-design-interior-mobile.jpg",
      largeImgUrl: "/assets/images/projects/summerposter/summer-poster-digital-illustration-design-interior-big.jpg",
      type: "full"
    }],
    imgAlt: "Summer Poster | Elsa Benoldi Graphic Design"
  },
  {
    projectId: "Threadless-Rug",
    projectName: "Threadless Rug",
    projectDescription: "Threadless Collection is the result of a fusion between art and technology. It’s an experimental encounter between human aesthetic choices and digital re-interpretation. The designer draws circular fractal shapes using an accurate colour selection. The computer breaks the geometrical coherence of these images transforming them into asymmetrical simplified new compositions. The unpredictability of the result generates novel graphic visuals.",
    clientName: "Personal Project",
    clientUrl: "",
    services: "Rug Design",
    country: "UK",
    mainImgUrlSmall: "/assets/images/projects/threadlessrug/threadless-rug-design-interior-mobile.jpg",
    mainImgUrlLarge: "/assets/images/projects/threadlessrug/threadless-rug-design-interior-main.jpg",
    thumbnailUrlSmall: "/assets/images/projects/threadlessrug/threadless-rug-design-interior-mobile.jpg",
    thumbnailUrlLarge: "/assets/images/projects/threadlessrug/threadless-rug-design-interior-thumb.jpg",
    galleryImgs: [{
        smallImgUrl: "/assets/images/projects/threadlessrug/threadless-rug-design-interior-floor-mobile.jpg",
        largeImgUrl: "/assets/images/projects/threadlessrug/threadless-rug-design-interior-floor-half.jpg",
        type: "half"
      },
      {
        smallImgUrl: "/assets/images/projects/threadlessrug/threadless-rug-design-interior-whole-mobile.jpg",
        largeImgUrl: "/assets/images/projects/threadlessrug/threadless-rug-design-interior-whole-half.jpg",
        type: "half"
      }
    ],
    imgAlt: "Threadless Rug | Elsa Benoldi Graphic Design"
  },
  {
    projectId: "Salumi-Italiani",
    projectName: "Salumi Italiani",
    projectDescription: "Corporate book which provides historical information about the Italian meat industry. It is supported by evocative pictures and printed on refined paper.",
    clientName: "Gruppo Food",
    clientUrl: "",
    services: "Book Design",
    country: "Italy",
    mainImgUrlSmall: "/assets/images/projects/salumitaliani/salumi-italiani-luxury-book-editorial-design-mobile.jpg",
    mainImgUrlLarge: "/assets/images/projects/salumitaliani/salumi-italiani-luxury-book-editorial-design-main.jpg",
    thumbnailUrlSmall: "/assets/images/projects/salumitaliani/salumi-italiani-luxury-book-editorial-design-mobile.jpg",
    thumbnailUrlLarge: "/assets/images/projects/salumitaliani/salumi-italiani-luxury-book-editorial-design-thumb.jpg",
    galleryImgs: [{
        smallImgUrl: "/assets/images/projects/salumitaliani/salumi-italiani-luxury-book-editorial-design-interior-mobile.jpg",
        largeImgUrl: "/assets/images/projects/salumitaliani/salumi-italiani-luxury-book-editorial-design-interior-half.jpg",
        type: "half"
      },
      {
        smallImgUrl: "/assets/images/projects/salumitaliani/salumi-italiani-luxury-book-editorial-design-ham-mobile.jpg",
        largeImgUrl: "/assets/images/projects/salumitaliani/salumi-italiani-luxury-book-editorial-design-ham-half.jpg",
        type: "half"
      },
      {
        smallImgUrl: "/assets/images/projects/salumitaliani/salumi-italiani-luxury-book-editorial-design-parma-ham-mobile.jpg",
        largeImgUrl: "/assets/images/projects/salumitaliani/salumi-italiani-luxury-book-editorial-design-parma-ham-big.jpg",
        type: "full"
      }
    ],
    imgAlt: "Salumi Italiani | Elsa Benoldi Graphic Design"
  }
];

function readXml() {
  fs.readFile('./sitemap.xml', (err, data) => {
    if (data) {
      const existingSitemapList = JSON.parse(convert.xml2json(data, options));
      let existingSitemapURLStringList = [];
      if (existingSitemapList.urlset && existingSitemapList.urlset.url && existingSitemapList.urlset.url.length) {
          existingSitemapURLStringList = existingSitemapList.urlset.url.map(ele => ele.loc._text);
      }
      for (const project of projects) {

        if (existingSitemapURLStringList.indexOf(`${url}/${project.projectId}`) == -1) {
          existingSitemapList.urlset.url.push({
            loc: {
              _text: `${url}/${project.projectId}`,
            },
            changefreq: {
              _text: 'monthly'
            },
            priority: {
              _text: 0.8
            },
            lastmod: {
              _text: moment(new Date()).format('YYYY-MM-DD')
            }
          });
        }
      }
      createSitemapFile(existingSitemapList);
    }
  });
}

/*
    Method to convert JSON format data into XML format
*/
const createSitemapFile = (list) => {
  const finalXML = convert.json2xml(list, options); // to convert json text to xml text
  saveNewSitemap(finalXML);
}

/*
  Method to Update sitemap.xml file content
*/
const saveNewSitemap = (xmltext) => {
  fs.writeFile('sitemap.xml', xmltext, (err) => {
      if (err) {
          return console.log(err);
      }

      console.log("The file was saved!");
  });
}

readXml();
