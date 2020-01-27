import React from 'react'
import { Container, Row, Col } from 'react-materialize';

import './contact.css'

export default() => {
	return (
		<Container id="contact">
			<Row>
				<Col s={12}>
					<h5>Find Me</h5>

					<div className="contact-wrapper">

						{/* icons from https://www.iconfinder.com/iconsets/logos-and-brands */}

						<a href="https://www.linkedin.com/in/danmathisen" className="contact-item" target="_blank" rel="noopener noreferrer">
							<img src="/images/social/linkedin.png" alt="LinkedIn" />
							<p>LinkedIn</p>
						</a>

						<a href="https://github.com/dmathisen" className="contact-item" target="_blank" rel="noopener noreferrer">
							<img src="/images/social/github.png" alt="GitHub" />
							<p>GitHub</p>
						</a>

						<a href="https://stackoverflow.com/users/1308734/dmathisen" className="contact-item" target="_blank" rel="noopener noreferrer">
							<img src="/images/social/stack-overflow.png" alt="Stack Overflow" />
							<p>Stack Overflow</p>
						</a>

						<a href="https://twitter.com/dmathisen36" className="contact-item" target="_blank" rel="noopener noreferrer">
							<img src="/images/social/twitter.png" alt="Twitter" />
							<p>Twitter</p>
						</a>

						<a href="mailto:dan@danmathisen.com" className="contact-item" rel="noopener noreferrer">
							<img src="/images/social/email.png" alt="Email" />
							<p>Email Me</p>
						</a>
					</div>
				</Col>
			</Row>
		</Container>
	)
}