module.exports = {
  plugins: [`gatsby-plugin-react-helmet`],

  siteMetadata: {
    title: "Dan Mathisen",
    subTitle: "Full-stack web app developer",
    contact: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/danmathisen",
        image: "linkedin.png"
      },
      {
        name: "GitHub",
        url: "https://github.com/dmathisen",
        image: "github.png"
      },
      {
        name: "StackOverflow",
        url: "https://stackoverflow.com/users/1308734/dmathisen",
        image: "stack-overflow.png"
      },
      {
        name: "Twitter",
        url: "https://twitter.com/dmathisen36",
        image: "twitter.png"
      }
    ],
    testimonials: [
      {
        personName: "Cherie Kirkland, PMP",
        personTitle: "Senior Manager, Portfolio Management",
        personCompany: "Cox Communications",
        personImage: "cherie-kirkland.jpg",
        content:
          "I was fortunate to work with Dan on several projects at KIT and to have him as a lead developer on one of our more complex projects. He is, in the nutshell, one of the most dedicated, competent professionals with which I've had the opportunity to work. In addition to his skill set, Dan has a positive attitude and always willing to assist internally with issues and discuss directly with clients when needed"
      },
      {
        personName: "Anthony J. Malach, SAFe/CSM",
        personTitle: "Manager, Digital Marketing & Analytics",
        personCompany: "Herbalife",
        personImage: "anthony-malach.jpg",
        content:
          "Dan worked as a remote technical SME on our company OVP. He was without a doubt the most reliable, responsive and effective technical resource on the vendor team; my own internal team grew to rely on and respect his technical insights, troubleshooting & programming skills. With Dan as our technical POC, we experienced a high resolution rate, usually by his own hand; when issues needed to be shared or escalated, he remained our advocate until it met closure. I highly recommend Dan to any organization who is lucky enough to pick up his resume!"
      },
      {
        personName: "Brian Kaufman",
        personTitle: "Regional Account Director",
        personCompany: "Brightcove",
        personImage: "brian-kaufman.jpg",
        content:
          "Every conversation I had with Dan was productive. He stepped up to the plate many times (when he didn't have to), and helped solve problems day in and day out. That, paired with fantastic developer skills, make him a strong asset to any project."
      }
    ],
    graphics: [
      {
        name: "Landscaping Flyer",
        client: "Green Valley Landscaping",
        desc: "",
        image: "aeration.jpg",
        thumb: "aeration-thumb.jpg"
      },
      {
        name: "MIT iGEM Flyer",
        client: "International Genetically Engineered Machine (iGEM) & MIT",
        desc: "",
        image: "igem.jpg",
        thumb: "igem-thumb.jpg"
      },
      {
        name: "Charity Event Flyer",
        client: "Ramapo-Bergen Animal Refuge",
        desc: "",
        image: "rbari.jpg",
        thumb: "rbari-thumb.jpg"
      }
    ],
    websites: [
      {
        name: "My Portfolio",
        desc: "",
        technologies: [
          "Node JS",
          "React",
          "GraphQL",
          "Webpack",
          "Materialize CSS",
          "UI/UX Design"
        ],
        website: "https://danmathisen.com/",
        image: "portfolio.png"
      },
      {
        name: "MIK Fund Solutions",
        desc: "",
        technologies: [
          "C#",
          ".NET",
          "SQL",
          "Angular",
          "Kendo",
          "Typescript",
          "Less",
          "UI/UX Design"
        ],
        website: "http://www.mikfs.com/",
        image: "mikfs.png"
      },
      {
        name: "Doctor OZ",
        desc: "",
        technologies: ["HTML", "CSS", "Javascript", "PHP", "Grunt"],
        website: "https://www.doctoroz.com/",
        image: "doctor-oz.png"
      },
      {
        name: "MIT",
        desc: "",
        technologies: ["HTML", "CSS", "Javascript", "PHP", "Grunt"],
        website: "https://executive.mit.edu/",
        image: "mit-sloan.png"
      },
      {
        name: "Hoboken Brewing Co",
        desc: "",
        technologies: [
          "Wordpress",
          "PHP",
          "SQL",
          "HTML",
          "CSS",
          "UI/UX Design"
        ],
        website: "https://hobokenbrewing.beer/",
        image: "hoboken-brewing-co.png"
      },
      {
        name: "WhoWeUse",
        desc: "",
        technologies: [
          "Node JS",
          "Javascript",
          "PHP",
          "MongoDB",
          "Sass",
          "Gulp",
          "UI/UX Design"
        ],
        website: "https://www.whoweuse.com/",
        image: "whoweuse.png"
      },
      {
        name: "Pintmeisters",
        desc: "",
        technologies: ["HTML", "CSS", "PHP", "SQL", "UI/UX Design"],
        website: "https://pintmeisters.com/",
        image: "pintmeisters.png"
      },
      {
        name: "Barnes and Noble",
        desc: "",
        technologies: ["HTML", "CSS", "Javascript", "PHP", "Grunt"],
        website: "https://www.barnesandnoble.com/blog/category/interviews/",
        image: "barnes-and-noble.png"
      },
      {
        name: "Illy",
        desc: "",
        technologies: ["HTML", "CSS", "Javascript", "PHP", "Grunt"],
        website: "https://www.illy.com/en-us/live-happilly/circolo-illy",
        image: "circolo-illy.png"
      },
      {
        name: "Herbalife",
        desc: "",
        technologies: ["HTML", "CSS", "Javascript", "PHP", "Grunt"],
        website: "https://video.herbalife.com/",
        image: "herbalife.png"
      },
      {
        name: "Unsheltered Voice",
        desc: "",
        technologies: ["Wordpress", "PHP", "SQL", "UI/UX Design"],
        website: "https://unshelteredvoice.org/",
        image: "unsheltered-voice.png"
      },
      {
        name: "Alex Eating Pancakes",
        desc: "",
        technologies: ["Javascript", "HTML", "CSS", "PHP", "UI/UX Design"],
        website: "https://alexeatingpancakes.com/",
        image: "alex-eating-pancakes.png"
      }
    ],
    technologies: [
      // languages
      {
        name: "HTML",
        type: "language",
        slug: "html5",
        color: "#E34D26"
      },
      {
        name: "CSS",
        type: "language",
        slug: "css3",
        color: "#0170B9"
      },
      {
        name: "Javascript",
        type: "language",
        slug: "javascript",
        color: "#E9CA32"
      },
      {
        name: "Typescript",
        type: "language",
        slug: "typescript",
        color: "#007ACC"
      },
      {
        name: "PHP",
        type: "language",
        slug: "php",
        color: "#8993BD"
      },
      {
        name: "C#",
        type: "language",
        slug: "c-sharp",
        color: "#9A4993"
      },
      {
        name: ".NET",
        type: "language",
        slug: "dot-net",
        color: "#672A7A"
      },
      {
        name: "SQL",
        type: "language",
        slug: "mysql",
        color: "#F9AA47"
      },
      {
        name: "MongoDB",
        type: "language",
        slug: "mongodb",
        color: "#57AA50"
      },
      {
        name: "GraphQL",
        type: "language",
        slug: "graphql",
        color: "#E12B98"
      },

      // libraries
      {
        name: "Node JS",
        type: "library",
        slug: "nodejs",
        color: "#64A459"
      },
      {
        name: "React",
        type: "library",
        slug: "react",
        color: "#00D8FF"
      },
      {
        name: "Redux",
        type: "library",
        slug: "redux",
        color: "#764ABB"
      },
      {
        name: "Angular",
        type: "library",
        slug: "angular",
        color: "#DF2E31"
      },
      {
        name: "Webpack",
        type: "library",
        slug: "webpack",
        color: "#1C78C0"
      },
      {
        name: "Git",
        type: "library",
        slug: "git",
        color: "#EF4F33"
      },
      {
        name: "Wordpress",
        type: "library",
        slug: "wordpress",
        color: "#32373C"
      },
      {
        name: "Gulp",
        type: "library",
        slug: "gulp",
        color: "#D34A47"
      },
      {
        name: "Grunt",
        type: "library",
        slug: "grunt",
        color: "#FBA919"
      },
      {
        name: "Kendo",
        type: "library",
        slug: "progress-kendo",
        color: "#5CE400"
      },
      {
        name: "Sass",
        type: "library",
        slug: "sass",
        color: "#CD6799"
      },
      {
        name: "Less",
        type: "library",
        slug: "less",
        color: "#1E416F"
      },
      {
        name: "Bootstrap CSS",
        type: "library",
        slug: "bootstrap",
        color: "#563D7C"
      },
      {
        name: "Materialize CSS",
        type: "library",
        slug: "materialize",
        color: "#EB7077"
      },

      // other
      {
        name: "UI/UX Design",
        type: "other",
        slug: "ui-ux",
        color: "#EB5E03"
      },
      {
        name: "Responsive Design",
        type: "other",
        slug: "responsive-design",
        color: "#32373C"
      },
      {
        name: "Adobe Photoshop",
        type: "other",
        slug: "adobe-photoshop",
        color: "#5BC3F6"
      },
      {
        name: "Adobe Illustrator",
        type: "other",
        slug: "adobe-illustrator",
        color: "#FE7903"
      }
      // {
      // 	name: "Adobe InDesign",
      // 	type: "other",
      // 	slug: "adobe-indesign",
      // 	color: "#FF3C91"
      // }
    ]
  }
};
