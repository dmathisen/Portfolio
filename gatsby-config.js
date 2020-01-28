module.exports = {
	plugins: [`gatsby-plugin-react-helmet`],
	
	siteMetadata: {
		title: 'Dan Mathisen',
		subTitle: 'Full-stack web app developer',
		testimonials: [
			{
				personName: "Cherie Kirkland, PMP",
				personTitle: "Senior Manager, Portfolio Management",
				personCompany: "Cox Communications",
				personImage: "cherie-kirkland.jpg",
				content: "I was fortunate to work with Dan on several projects at KIT and to have him as a lead developer on one of our more complex projects. He is, in the nutshell, one of the most dedicated, competent professionals with which I've had the opportunity to work. In addition to his skill set, Dan has a positive attitude and always willing to assist internally with issues and discuss directly with clients when needed"
			},
			{
				personName: "Anthony J. Malach, SAFe/CSM",
				personTitle: "Manager, Digital Marketing & Analytics",
				personCompany: "Herbalife",
				personImage: "anthony-malach.jpg",
				content: "Dan worked as a remote technical SME on our company OVP. He was without a doubt the most reliable, responsive and effective technical resource on the vendor team; my own internal team grew to rely on and respect his technical insights, troubleshooting & programming skills. With Dan as our technical POC, we experienced a high resolution rate, usually by his own hand; when issues needed to be shared or escalated, he remained our advocate until it met closure. I highly recommend Dan to any organization who is lucky enough to pick up his resume!"
			},
			{
				personName: "Brian Kaufman",
				personTitle: "Regional Account Director",
				personCompany: "Brightcove",
				personImage: "brian-kaufman.jpg",
				content: "Every conversation I had with Dan was productive. He stepped up to the plate many times (when he didn't have to), and helped solve problems day in and day out. That, paired with fantastic developer skills, make him a strong asset to any project."
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
			},
		],
		websites: [
			{
				name: "Portfolio",
				desc: "",
				technologies: ["Node JS", "React", "GraphQL", "Materialize CSS", "UI/UX Design"],
				website: "https://danmathisen.com/",
				image: "portfolio.png"
			},
			{
				name: "MIK Fund Solutions",
				desc: "",
				technologies: ["C#", ".NET", "SQL", "Angular", "Kendo", "Typescript", "Less", "UI/UX Design"],
				website: "http://www.mikfs.com/",
				image: "mikfs.png"
			},
			{
				name: "Doctor OZ",
				desc: "",
				technologies: ["HTML", "CSS", "Javascript", "PHP"],
				website: "https://www.doctoroz.com/",
				image: "doctor-oz.png"
			},
			{
				name: "Hoboken Brewing Co",
				desc: "",
				technologies: ["Wordpress", "PHP", "SQL", "HTML", "CSS", "UI/UX Design"],
				website: "https://hobokenbrewing.beer/",
				image: "hoboken-brewing-co.png"
			},
			{
				name: "WhoWeUse",
				desc: "",
				technologies: ["Node JS", "Javascript", "PHP", "MongoDB", "Sass", "Grunt", "Git", "UI/UX Design"],
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
				name: "Illy",
				desc: "",
				technologies: ["HTML", "CSS", "Javascript", "PHP"],
				website: "https://www.illy.com/en-us/live-happilly/circolo-illy",
				image: "circolo-illy.png"
			},
			{
				name: "Herbalife",
				desc: "",
				technologies: ["HTML", "CSS", "Javascript", "PHP"],
				website: "https://video.herbalife.com/",
				image: "herbalife.png"
			},
			{
				name: "Barnes and Noble",
				desc: "",
				technologies: ["HTML", "CSS", "Javascript", "PHP"],
				website: "https://www.barnesandnoble.com/blog/category/interviews/",
				image: "barnes-and-noble.png"
			},
			{
				name: "MIT",
				desc: "",
				technologies: ["HTML", "CSS", "Javascript", "PHP"],
				website: "https://executive.mit.edu/",
				image: "mit-sloan.png"
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
				image: "html5.png",
				color: "#E34D26"
			},
			{
				name: "CSS",
				type: "language",
				image: "css3.png",
				color: "#0170B9"
			},
			{
				name: "Javascript",
				type: "language",
				image: "javascript.png",
				color: "#E9CA32"
			},
			{
				name: "Typescript",
				type: "language",
				image: "typescript.png",
				color: "#007ACC"
			},
			{
				name: "PHP",
				type: "language",
				image: "php.png",
				color: "#8993BD"
			},
			{
				name: "C#",
				type: "language",
				image: "c-sharp.png",
				color: "#9A4993"
			},
			{
				name: ".NET",
				type: "language",
				image: "dot-net.png",
				color: "#672A7A"
			},
			{
				name: "SQL",
				type: "language",
				image: "mysql.png",
				color: "#F9AA47"
			},
			{
				name: "MongoDB",
				type: "language",
				image: "mongodb.png",
				color: "#57AA50"
			},
			{
				name: "GraphQL",
				type: "language",
				image: "graphql.png",
				color: "#E12B98"
			},

			// libraries
			{
				name: "Node JS",
				type: "library",
				image: "nodejs.png",
				color: "#64A459"
			},
			{
				name: "React",
				type: "library",
				image: "react.png",
				color: "#00D8FF"
			},
			{
				name: "Redux",
				type: "library",
				image: "redux.png",
				color: "#764ABB"
			},
			{
				name: "Angular",
				type: "library",
				image: "angular.png",
				color: "#DF2E31"
			},
			{
				name: "Webpack",
				type: "library",
				image: "webpack.png",
				color: "#1C78C0"
			},
			{
				name: "Git",
				type: "library",
				image: "git.png",
				color: "#EF4F33"
			},
			{
				name: "Wordpress",
				type: "library",
				image: "wordpress.png",
				color: "#32373C"
			},
			{
				name: "Gulp",
				type: "library",
				image: "gulp.png",
				color: "#D34A47"
			},
			{
				name: "Grunt",
				type: "library",
				image: "grunt.png",
				color: "#FBA919"
			},
			{
				name: "Kendo",
				type: "library",
				image: "progress-kendo.png",
				color: "#5CE400"
			},
			{
				name: "Sass",
				type: "library",
				image: "sass.png",
				color: "#CD6799"
			},
			{
				name: "Less",
				type: "library",
				image: "less.png",
				color: "#1E416F"
			},
			{
				name: "Bootstrap CSS",
				type: "library",
				image: "bootstrap.png",
				color: "#563D7C"
			},
			{
				name: "Materialize CSS",
				type: "library",
				image: "materialize.png",
				color: "#EB7077"
			},

			// other
			{
				name: "UI/UX Design",
				type: "other",
				image: "ui-ux.png",
				color: "#EB5E03"
			},
			{
				name: "Responsive Design",
				type: "other",
				image: "responsive-design.png",
				color: "#32373C"
			},
			{
				name: "Adobe Photoshop",
				type: "other",
				image: "adobe-photoshop.png",
				color: "#5BC3F6"
			},
			{
				name: "Adobe Illustrator",
				type: "other",
				image: "adobe-illustrator.png",
				color: "#FE7903"
			}
			// {
			// 	name: "Adobe InDesign",
			// 	type: "other",
			// 	image: "adobe-indesign.png",
			// 	color: "#FF3C91"
			// }
		]
	}
}