<script lang="ts">
	import { todoSelectors, login } from './store';

	import { store, useSelector } from './../../store';

	$: todoList = useSelector(todoSelectors.todos, (newList: any) => (todoList = newList));
	$: todoListLoading = useSelector(
		todoSelectors.loading,
		(newLoading: any) => (todoListLoading = newLoading)
	);

	import Form from '$lib/shared/form/Form.svelte';
	const form_name: string = 'LoginForm';
	const fields = [
		{
			type: 'input',
			name: 'color',

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
		store.dispatch(login({ ...data, option: 'login' }));
		// goto(`/admin/dashboard`, { replaceState: true });
	}
</script>

<Form {form_name} {fields} submitButtonText="Login" onSubmitForm={onSubmit} hasCancelButton={false}>
	<a class="btn btn-secondary my-2" sveltekit:prefetch href="/register"> Register </a>
</Form>
