<script lang="ts">

import Form from "$lib/shared/form/Form.svelte";
const form_name: string = 'LoginForm';
  const fields = [{
      type: 'input',
      name: 'username',

      attributes: {
        classes: ['form-control', 'input', 'input-bordered', 'w-full'],
        type: 'text',
        id: 'username',
        label: 'Username',
        placeholder: 'Username',
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
        placeholder: 'Email',
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
    console.log('data', data);
  }
</script>

<Form
  form_name={form_name}
  fields={fields}
  submitButtonText="Register"
  onSubmitForm={onSubmit}
  hasCancelButton={false}>
  <a class="btn btn-link my-2" sveltekit:prefetch href="/">
    Already have an account? go to login
  </a>
</Form>
    