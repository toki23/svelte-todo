<script>
    export let item;
    export let del;
    export let index;
</script>


<main class="card">
    <div class="">
        <p class="card-body col ">
            {item}
        </p>
    </div>
    <div class=" ">
        <button class="card-body col"
            on:click={() => {
                del(index);
            }}>delete</button
        >
    </div>
</main>

<style>
</style>
