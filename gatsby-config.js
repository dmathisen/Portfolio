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
				desc: "",
				image: "aeration.jpg",
				thumb: "aeration-thumb.jpg"
			},
			{
				name: "MIT iGEM Flyer",
				desc: "",
				image: "igem.jpg",
				thumb: "igem-thumb.jpg"
			},
			{
				name: "Charity Event Flyer",
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
				technologies: ["C#", ".NET", "SQL", "Angular", "Kendo", "Typescript", "Less"],
				website: "http://www.mikfs.com/",
				image: "mikfs.png"
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
				technologies: ["Node JS", "Javascript", "PHP", "MongoDB", "Sass", "Grunt", "Git"],
				website: "https://www.whoweuse.com/",
				image: "whoweuse.png"
			},
			{
				name: "Pintmeisters",
				desc: "",
				technologies: ["HTML", "CSS", "PHP", "SQL"],
				website: "https://pintmeisters.com/",
				image: "pintmeisters.png"
			},
			{
				name: "Unsheltered Voice",
				desc: "",
				technologies: ["Wordpress", "PHP", "SQL"],
				website: "https://unshelteredvoice.org/",
				image: "unsheltered-voice.png"
			},
			{
				name: "Alex Eating Pancakes",
				desc: "",
				technologies: ["Javascript", "HTML", "CSS", "PHP"],
				website: "https://alexeatingpancakes.com/",
				image: "alex-eating-pancakes.png"
			},
			{
				name: "Doctor OZ",
				desc: "",
				technologies: ["HTML", "CSS", "Javascript", "PHP"],
				website: "https://www.doctoroz.com/",
				image: "doctor-oz.png"
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
				name: "Foremost Groups",
				desc: "",
				technologies: ["Javascript", "HTML", "CSS"],
				website: "http://www.foremostgroups.com/",
				image: "foremost.png"
			},
			{
				name: "Green Valley Landscaping",
				desc: "",
				technologies: ["Javascript", "HTML", "CSS"],
				website: "https://greenvalleylandscapenj.com/",
				image: "green-valley.png"
			}
		],
		technologies: [
			// languages
			{
				name: "HTML",
				type: "language",
				image: "html5.png",
				color: "#fff"
			},
			{
				name: "CSS",
				type: "language",
				image: "css3.png",
				color: "#fff"
			},
			{
				name: "Javascript",
				type: "language",
				image: "javascript.png",
				color: "#fff"
			},
			{
				name: "Typescript",
				type: "language",
				image: "typescript.png",
				color: "#fff"
			},
			{
				name: "PHP",
				type: "language",
				image: "php.png",
				color: "#fff"
			},
			{
				name: "C#",
				type: "language",
				image: "c-sharp.png",
				color: "#fff"
			},
			{
				name: ".NET",
				type: "language",
				image: "dot-net.png",
				color: "#fff"
			},
			{
				name: "SQL",
				type: "language",
				image: "mysql.png",
				color: "#fff"
			},
			{
				name: "MongoDB",
				type: "language",
				image: "mongodb.png",
				color: "#fff"
			},
			{
				name: "GraphQL",
				type: "language",
				image: "graphql.png",
				color: "#fff"
			},

			// libraries
			{
				name: "Node JS",
				type: "library",
				image: "nodejs.png",
				color: "#fff"
			},
			{
				name: "React",
				type: "library",
				image: "react.png",
				color: "#fff"
			},
			{
				name: "Redux",
				type: "library",
				image: "redux.png",
				color: "#fff"
			},
			{
				name: "Angular",
				type: "library",
				image: "angular.png",
				color: "#fff"
			},
			{
				name: "Webpack",
				type: "library",
				image: "webpack.png",
				color: "#fff"
			},
			{
				name: "Git",
				type: "library",
				image: "git.png",
				color: "#fff"
			},
			{
				name: "Wordpress",
				type: "library",
				image: "wordpress.png",
				color: "#fff"
			},
			{
				name: "Gulp",
				type: "library",
				image: "gulp.png",
				color: "#fff"
			},
			{
				name: "Grunt",
				type: "library",
				image: "grunt.png",
				color: "#fff"
			},
			{
				name: "Kendo",
				type: "library",
				image: "progress-kendo.png",
				color: "#fff"
			},
			{
				name: "Sass",
				type: "library",
				image: "sass.png",
				color: "#fff"
			},
			{
				name: "Less",
				type: "library",
				image: "less.png",
				color: "#fff"
			},
			{
				name: "Bootstrap CSS",
				type: "library",
				image: "bootstrap.png",
				color: "#fff"
			},
			{
				name: "Materialize CSS",
				type: "library",
				image: "materialize.png",
				color: "#fff"
			},

			// other
			{
				name: "UI/UX Design",
				type: "other",
				image: "ui-ux.png",
				color: "#fff"
			},
			{
				name: "Responsive Design",
				type: "other",
				image: "responsive-design.png",
				color: "#fff"
			},
			{
				name: "Adobe Photoshop",
				type: "other",
				image: "adobe-photoshop.png",
				color: "#fff"
			},
			{
				name: "Adobe Illustrator",
				type: "other",
				image: "adobe-illustrator.png",
				color: "#fff"
			},
			{
				name: "Adobe InDesign",
				type: "other",
				image: "adobe-indesign.png",
				color: "#fff"
			}
		]
	}
}