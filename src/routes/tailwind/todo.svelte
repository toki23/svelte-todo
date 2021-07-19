<script>
    export let item;
    import { del } from "./items";
</script>

<main
    class="box-border p-4 border-2 border-blue-500 bg-gray-100 flex rounded-full m-2"
>
    <div>
        <p class="">
            {item.text}
        </p>
    </div>
    <div class="ml-auto ">
        <button
            class="border border-black py-1 px-3 rounded hover:text-white hover:bg-red-500 "
            on:click={() => {
                del(item.id);
            }}>delete</button
        >
    </div>
</main>

<style>
</style>
