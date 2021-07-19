<script>
    import Todo from "./todo.svelte";
    let todo = ["頑張る", "祈る"];
    let text = "";
    const add = () => {
        todo = [...todo, text];
        text = "";
    };
    const del = (i) => {
        todo.splice(i, 1);
        todo = todo;
    };
</script>

<div class="container ">
    <h1 >TODOリスト</h1>
    <div class="todo-list">
        {#each todo as item, index}
            <Todo {item} {del} {index} />
        {/each}
    </div>
    <div class="create-container">
        <input type="text" bind:value={text} class="form-control" /><button on:click={add} class="btn btn-primary "
            >追加</button 
        >
    </div>
</div>

<style>
    @import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css");
</style>
