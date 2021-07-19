<script>
    import Dad from "./dad.svelte";
    import { items1, del } from "./items.js";
    let text = "";
    let id = 5;
    const add = () => {
        let item = {
            text: text,
            id: id,
        };
        id++;
        items1.update((items1) => [...items1, item]);
        text = "";
    };
</script>

<main class="mx-auto dark ">
    <h1 class="text-xl">TODOリスト</h1>
    <Dad {add} {del} />
    <input
        type="text"
        bind:value={text}
        class=" hover:border-blue-500 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
    /><button
        on:click={add}
        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >追加</button
    >
</main>
