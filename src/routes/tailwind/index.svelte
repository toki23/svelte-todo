<script>
    import Dad from "./dad.svelte";
    import SvelteSeo from "svelte-seo";
    import { items1, items2, items3, del } from "./items.js";
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
        return false;
    };
</script>

<SvelteSeo
    title="TODOリスト"
    description="Svelteの練習用に作成したTODOリスト"
/>

<main class="mx-auto dark ">
    <h1 class="text-xl">TODOリスト</h1>
    <div class="flex justify-center">
        <div class="text-center">
            <h2>TODO</h2>
            <Dad items={items1} {add} {del} />
        </div>
        <div class="text-center">
            <h2>in progress</h2>
            <Dad items={items2} {add} {del} />
        </div>
        <div class="text-center">
            <h3>done</h3>
            <Dad items={items3} {add} {del} />
        </div>
    </div>
    <form on:submit|preventDefault={add}>
        <input
            type="text"
            bind:value={text}
            class=" hover:border-blue-500 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        /><button
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >追加</button
        >
    </form>
</main>
