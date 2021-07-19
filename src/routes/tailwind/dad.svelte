<script>
    import { flip } from "svelte/animate";
    import { dndzone } from "svelte-dnd-action";
    import Todo from "./todo.svelte";
    import { items1, items2 } from "./items.js";

    const flipDurationMs = 300;
    function handleDndConsider(e) {
        items1.update((n) => e.detail.items);
    }
    function handleDndFinalize(e) {
        items1.update((n) => e.detail.items);
    }
    function handleDndConsider2(e) {
        items2.update((n) => e.detail.items);
    }
    function handleDndFinalize2(e) {
        items2.update((n) => e.detail.items);
    }
</script>

<main class="flex ">
    <section
        class="border-2 w-64"
        use:dndzone={{ items: $items1, flipDurationMs }}
        on:consider={handleDndConsider}
        on:finalize={handleDndFinalize}
    >
        {#each $items1 as item (item.id)}
            <div animate:flip={{ duration: flipDurationMs }}>
                <Todo item={item} />
            </div>
        {/each}
    </section>

    <section
        class="border-2 w-64 "
        use:dndzone={{ items: $items2, flipDurationMs }}
        on:consider={handleDndConsider2}
        on:finalize={handleDndFinalize2}
    >
        {#each $items2 as item (item.id)}
            <div animate:flip={{ duration: flipDurationMs }}>
                <Todo item={item} />
            </div>
        {/each}
    </section>
    <div />
</main>

<style>
</style>
