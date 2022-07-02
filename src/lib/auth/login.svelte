<script lang="ts">
  import Form from '$lib/shared/form/Form.svelte';
  import { goto } from '$app/navigation';
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
        placeholder: 'Email or Username',
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
        placeholder: 'Password',
      },
    }
  ];

  function onSubmit(data: any) {
    goto(`/admin`, { replaceState: true }) 
  }
</script>
<Form
  form_name={form_name}
  fields={fields}
  submitButtonText="Login"
  onSubmitForm={onSubmit}
  hasCancelButton={false}>
  <a class="btn btn-secondary my-2" sveltekit:prefetch href="/register">
    Register
  </a>
</Form>
    