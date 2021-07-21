<script>
    export let item;
    import { del } from "./items";
</script>

<main
    class=" w-70 h-auto box-border p-4 border-2 border-blue-500 bg-gray-100 flex rounded-3xl m-2 "
>
        <p class="w-24 h-auto break-words">
            {item.text}
        </p>
    <button
        class="ml-auto border border-black py-1 px-3 rounded hover:text-white hover:bg-red-500 "
        on:click={() => {
            del(item.id);
        }}>delete</button
    >
</main>
