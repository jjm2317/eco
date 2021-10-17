

<script>
    export let prev = [];
</script>
<table>
    <tr>
        <!-- show datas except index, 온도 -->
        {#each prev?.filter((_, i) => i > 0) as prevState (prevState)}
        <td>{prevState}</td>
        {/each}
    </tr>
</table>

<style>
    table {
        height: 40px;
    }
    table td{
        border: 1px solid #000;
        background-color: #fff;
        padding: 10px 15px;
    }
</style>