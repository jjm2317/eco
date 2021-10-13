

<script>
    export let prev;
</script>

<table>
    <tr>
        {#each prev as prevState (prevState)}
        <td>prevState</td>
        {/each}
    </tr>
</table>

<style>
    table td{
        border: 1px solid #000;
    }
</style>