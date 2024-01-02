<template>
	<main class="login">
		<section class="forms" >

			<form class="register" @submit.prevent="register">
				<h2>Register</h2>
				<input 
					type="email" 
					placeholder="Email address"
					autocomplete="email"
					v-model="register_form.email" />
				<input 
					type="password" 
					placeholder="Password" 
					autocomplete="current-password"
					v-model="register_form.password" />
				<input 
					type="submit" 
					value="Register" />
			</form>

			<form class="login" @submit.prevent="login">
				<h2 class="h2-login">Login</h2>
				<input 
					type="email" 
					placeholder="Email address"
					autocomplete="email"
					v-model="login_form.email" />
				<input 
					type="password" 
					placeholder="Password"
					autocomplete="current-password" 
					v-model="login_form.password" />
				<input 
					type="submit" 
					value="Login" />
			</form>

		</section>
	</main>
</template>

<script>

import { ref } from 'vue'
import { useStore } from 'vuex'
import { onBeforeMount } from 'vue'

export default {
	setup () {
		const login_form = ref({});
		const register_form = ref({});
		const store = useStore();

		const login = () => {
			store.dispatch('login', login_form.value);
		}

		const register = () => {
			store.dispatch('register', register_form.value);
		}

		onBeforeMount(() => {  
			store.dispatch('fetchUser')
		})

		return {
			login_form,
			register_form,
			login,
			register
		}
	}
}
</script>

<style>

	.forms {
		display: flex;
		min-height: 100vh;
	}

	form {
		flex: 1 1 0%;
		padding: 8rem 1rem 1rem;
	}

	form.register {
		color: #FFF;
		background-color: rgb(7, 84, 252);
		background-image: linear-gradient(
			to bottom right,
			rgb(7, 84, 252) 0%,
			rgb(43, 0, 255) 100%
		);
	}

	h2 {
		font-size: 3rem;
		text-transform: uppercase;
		margin-bottom: 5rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.h2-login{
		color: rgb(7, 84, 252);
	}

	input {
		appearance: none;
		border: none;
		outline: none;
		background: none;

		display: block;
		width: 100%;
		max-width: 400px;
		margin: 0 auto;
		font-size: 1.5rem;
		margin-bottom: 2rem;
		padding: 0.5rem 0rem;
	}

	input:not([type="submit"]) {
		opacity: 0.8;
		transition: 0.4s;
	}

	input:focus:not([type="submit"]) {
		opacity: 1;
	}

	input::placeholder {
		color: inherit;
	}

	form.register input:not([type="submit"]) {
		color: #FFF;
		border-bottom: 2px solid #FFF;
	}

	form.login input:not([type="submit"]) {
		color: rgb(7, 84, 252);
		border-bottom: 2px solid rgb(7, 84, 252);
	}

	form.login input[type="submit"] {
		background-color: rgb(7, 84, 252);
		color: #FFF;
		font-weight: 700;
		padding: 1rem 2rem;
		border-radius: 0.5rem;
		cursor: pointer;
		text-transform: uppercase;
	}

	form.register input[type="submit"] {
		background-color: #FFF;
		color: rgb(7, 84, 252);
		font-weight: 700;
		padding: 1rem 2rem;
		border-radius: 0.5rem;
		cursor: pointer;
		text-transform: uppercase;
	}
	
</style>