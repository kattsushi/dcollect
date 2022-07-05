<script lang="ts">
	import Form from '$lib/shared/form/Form.svelte';
	import store from '$lib/store';
	import { login } from './store/actions';
	const form_name: string = 'LoginForm';
	const fields = [
		{
			type: 'input',
			name: 'email',
			attributes: {
				classes: ['form-control', 'input', 'input-bordered', 'w-full'],
				type: 'text',
				id: 'username',
				label: 'Email or Username',
				placeholder: 'Email or Username'
			}
		},
		{
			type: 'input',
			name: 'password',
			value: '',
			attributes: {
				classes: ['form-control', 'input', 'input-bordered', 'w-full'],
				type: 'password',
				id: 'password',
				label: 'Password',
				placeholder: 'Password'
			}
		}
	];

	function onSubmit(data: any) {
		const { values, valid } = data;
		if (valid) {
			store.dispatch(login({ ...values, option: 'login' }));
		}
	}
</script>

<Form {form_name} {fields} submitButtonText="Login" onSubmitForm={onSubmit} hasCancelButton={false}>
	<a class="btn btn-secondary my-2" sveltekit:prefetch href="/register"> Register </a>
</Form>
