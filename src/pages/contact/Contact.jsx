import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <>
<div class="flex">
<div class="container">
	<div class="pic">
		<img src="https://avatars.githubusercontent.com/u/104712356?v=4" alt="MYPIC" />
	</div>
	<div class="description">
		<div class="title">
			<h1 class="auto">WEB DEVELOPER</h1>
		</div>
		<div class="desc">
			<p>
			Hi, Im a web developer. I have been working on it from past 1 year. I have a basic knowledge of how websites are actually made.</p>
		</div>
		<p>You can follow me on</p>
		<div class="links">
			<a href="https://github.com/Ajithkumar9242" target="_blank">
				<i class="fab  fa-github fa-2x" id="github"></i>
			</a>
			<a href="https://codepen.io/Anonymous456/" target="_blank">
				<i class="fab fa-codepen fa-2x" id="github"></i>	
			</a>
		</div>
	</div>
</div>
</div>
    </>
  )
}

export default Contact