import React, { useState } from 'react'
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col, Button, Icon, Preloader } from 'react-materialize';
import M from 'materialize-css/dist/js/materialize';

import './contact.css'

export default() => {
	const [ emailIsSending, setEmailIsSending ] = useState(false);

	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					contact {
						name
						url
                        image
                    }
				}
			}
		}
	`);

	const contacts = data.site.siteMetadata.contact;

	const sendEmail = e => {
		e.preventDefault();

		setEmailIsSending(true);
		let formData = new FormData(e.target);

		fetch('/mailer.php', {
			method: 'post',
			body: formData
		}).then(response => {
			return response.text();
		}).then(response => {
			setEmailIsSending(false);
			if (response === "success") {
				M.toast({ html: 'Email sent!', classes: "success" })
			} else {
				M.toast({ html: 'Email send failed :(', classes: "fail" })
			}
		}).catch(error => {
			setEmailIsSending(false);
			M.toast({ html: 'Email send failed :(', classes: "fail" })
			console.error('Email send failed', error);
		});
	}

	return (
		<Container id="contact">
			<Row>
				<Col s={12} className="center">
					<h5>Find Me</h5>
					{/* icons from https://www.iconfinder.com/iconsets/logos-and-brands */}

					{
						contacts.map(contact => {
							const imageUrl = `/images/social/${contact.image}`;
							return (
								<a href={contact.url} key={contact.name} className="contact-item" target="_blank" rel="noopener noreferrer">
									<img src={imageUrl} alt={contact.name} />
									<p>{contact.name}</p>
								</a>
							)
						})
					}
					
					<h5>Contact Me</h5>
					<form onSubmit={sendEmail} id="emailForm">

						<div className="input-field col">
							<i className="material-icons prefix">person</i>
							<input type="text" id="name" name="name" />
							<label htmlFor="name">Your name</label>
						</div>

						<div className="input-field col">
							<i className="material-icons prefix">email</i>
							<input className="validate" type="email" id="email" name="email" />
							<label htmlFor="email">Email</label>
						</div>
						
						<div className="input-field col">
							<i className="material-icons prefix">message</i>
							<textarea id="message" name="message" className="materialize-textarea"></textarea>
							<label htmlFor="message">Your message</label>
						</div>

						{!emailIsSending && (
							<Button node="button" type="submit" waves="light">
								Send
								<Icon right>send</Icon>
							</Button>
						)}

						{emailIsSending && (
							<Preloader color="green" size="small" />
						)}
					</form>
				</Col>
			</Row>
		</Container>
	)
}