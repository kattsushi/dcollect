<script lang="ts">
  import { Field } from 'svelte-formly';
  export let hasCancelButton: boolean;
  export let submitButtonText: string = "Submit";
  export let form_name: string;
  export let fields: any[];
  export let onSubmitForm: Function;

  let color = '#0054c2';
  let data: any = {};
  let message: string = "";

  function getValuesForm(event: any) {
    data = event.detail.data;
  }

  function onSubmit() {
    const { values } = data;
    if (data.valid) {
      color = values.color ? values.color : color;
      message = 'Congratulation! now your form is valid';
    } else {
      message = 'Your form is not valid!';
    }
    onSubmitForm(data)
  }
</script>

<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <div class="card-body">
    <form on:submit|preventDefault="{onSubmit}" class="custom-form" style="--theme-color: {color}">
      <Field {fields} name={form_name} on:Values={getValuesForm} />
      <div class="form-control mt-6">
        {#if hasCancelButton}
          <button class="btn btn-secondary my-2" type="button">Cancel</button>
        {/if}
        <slot></slot>
        <button class="btn btn-primary" type="submit">{submitButtonText}</button>
      </div>
    </form>
  </div>
</div>