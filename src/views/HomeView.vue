<template>


	<div class="ellipses-container">
		<div class="elipse-content">
			<h2 class="greeting">Welcome</h2>
			<div class="btn-container">
				<a href="../signin" class="btn button">Sign In</a>
				<a href="/signup" class="btn button">Sign Up</a>
			</div>
			<div class="elipse-animation">
				<div class="ellipses ellipses__outer--thin">
					<div class="ellipses ellipses__orbit"></div>
				</div>
				<div class="ellipses ellipses__outer--thick"></div>
			</div>
		</div>
	</div>



</template>


<style scoped>
.greeting {
	position: absolute;
	top: 50%;
	left: 55%;
	transform: translate(-50%, -50%);
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 4rem;
	font-size: 2.2rem;
	font-weight: 400;
	opacity: 0.5;
}

.btn-container {
	position: absolute;
	top: 55%;
	width: 100%;
	z-index: 999;
	display: flex;
	justify-content: center;

}

.btn {
	z-index: 999;
	background-color: var(--primary-color);
	border: none;
	color: #fff;
	cursor: pointer;
	margin: 20px;
}




.ellipses-container {
	width: 50rem;
	height: 50rem;
	border-radius: 50%;
	margin: 0 auto;
	position: relative;

}

.ellipses {
	position: absolute;
	top: 0;
	border-style: solid;
}

.ellipses__outer--thin {
	width: 100%;
	height: 100%;
	border-width: 0px;
	animation: ellipsesOrbit 20s linear infinite;

}

.ellipses__outer--thick {
	width: 99.5%;
	height: 99.5%;
	border-width: 3px;
	transform: rotate(-45deg);
	animation: ellipsesRotate 20s linear infinite;
	color: var(--primary-color);
}

.ellipses__orbit {
	width: 3rem;
	height: 3rem;
	border-width: 3px;
	color: var(--primary-color);
	background-color: var(--primary-color);
	top: 5rem;
	right: 6.75rem;
	animation: ellipsesOrbit 15s linear infinite;

}



@keyframes ellipsesRotate {
	0% {
		transform: rotate(-45deg);
	}

	100% {
		transform: rotate(-405deg);
	}
}

@keyframes ellipsesOrbit {
	0% {
		transform: rotate(0);
	}

	100% {
		transform: rotate(360deg);
	}
}

/* Media query per schermi più piccoli */
@media screen and (max-width: 768px) {
	.ellipses-container {
		transform: scale(0.5);
	}

	.greeting {
		font-size: 1.5rem;
		letter-spacing: 2rem;
	}
}
</style>
