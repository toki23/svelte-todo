<script>
    import { flip } from "svelte/animate";
    import { dndzone } from "svelte-dnd-action";
    import Todo from "./todo.svelte";
    export let items;

    const flipDurationMs = 300;
    function handleDndConsider(e) {
        items.update((n) => e.detail.items);
    }
    function handleDndFinalize(e) {
        items.update((n) => e.detail.items);
    }
</script>

<main
    class="border-2 w-64 "
    use:dndzone={{ items: $items, flipDurationMs }}
    on:consider={handleDndConsider}
    on:finalize={handleDndFinalize}
>
    {#each $items as item (item.id)}
        <div animate:flip={{ duration: flipDurationMs }}>
            <Todo {item} />
        </div>
    {/each}
</main>
