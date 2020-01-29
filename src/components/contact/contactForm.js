import React, { useState } from 'react'
import { Button, Icon, Preloader } from 'react-materialize';
import M from 'materialize-css/dist/js/materialize.min.js';

export default () => {
	const [ emailIsSending, setEmailIsSending ] = useState(false);

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
				// success!
				M.toast({ html: 'Email sent!', classes: "success" })
			} else {
				// fail
				M.toast({ html: response, classes: "fail" })
			}
		}).catch(error => {
			setEmailIsSending(false);
			M.toast({ html: 'Email send failed :(', classes: "fail" })
			console.error('Email send failed', error);
		});
	}

	return (
		<form onSubmit={sendEmail} id="emailForm">
			<div className="input-field col">
				<i className="material-icons prefix">person</i>
				<input type="text" id="name" name="name" required />
				<label htmlFor="name">Your name</label>
			</div>

			<div className="input-field col">
				<i className="material-icons prefix">email</i>
				<input className="validate" type="email" id="email" name="email" required />
				<label htmlFor="email">Your email</label>
			</div>
			
			<div className="input-field col">
				<i className="material-icons prefix">message</i>
				<textarea id="message" name="message" className="materialize-textarea" required></textarea>
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
	)
}