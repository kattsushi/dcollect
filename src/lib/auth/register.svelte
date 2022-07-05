<script lang="ts">
	import Form from '$lib/shared/form/Form.svelte';
	import { store, useSelector } from './../../store';
	import { register } from './store';

	const form_name: string = 'RegiserForm';
	const fields = [
		{
			type: 'input',
			name: 'username',

			attributes: {
				classes: ['form-control', 'input', 'input-bordered', 'w-full'],
				type: 'text',
				id: 'username',
				label: 'Username',
				placeholder: 'Username'
			}
		},
		{
			type: 'input',
			name: 'email',

			attributes: {
				classes: ['form-control', 'input', 'input-bordered', 'w-full'],
				type: 'text',
				id: 'username',
				label: 'Email',
				placeholder: 'Email'
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
			store.dispatch(register({ ...values }));
		}
	}
</script>

<Form
	{form_name}
	{fields}
	submitButtonText="Register"
	onSubmitForm={onSubmit}
	hasCancelButton={false}
>
	<a class="btn btn-link my-2" sveltekit:prefetch href="/">
		Already have an account? go to login
	</a>
</Form>
