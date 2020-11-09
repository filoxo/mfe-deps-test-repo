<script>
  import { onDestroy, onMount } from 'svelte';
  export let name
  import { fromEvent } from "rxjs";
  import { sampleTime } from "rxjs/operators";

  let sub;

  onMount(() => {
    sub = fromEvent(document, "mousemove").pipe(sampleTime(1000)).subscribe(({ screenX, screenY }) => {
      console.log(`X: ${screenX}, Y: ${screenY}`);
    })
  });
  onDestroy(() => {
    sub.unsubscribe();
  });
</script>

<style>
  section {
    font-size: 1.5rem;
  }
</style>

<section>{name} is mounted!</section>
