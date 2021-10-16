
<script>
    export let status;
</script>
<section>
    {#if status === "bad"}
    <figure>
        <img src="/asset/bad.png" alt="bad" width="200" height="160">
        <figcaption class="bad">나쁨</figcaption>

    </figure>
    
    {:else if status ===" good"}
    <figure>
        <img src="/asset/good.png" alt="good" width="170" height="150">
        <figcaption class="good">좋음</figcaption>
    </figure>
    {:else}  
    <figure>
        <img src="/asset/normal.png" alt="보통" width="170" height="150">
        <figcaption class="normal">보통</figcaption>
    </figure>
    {/if}
</section>

<style>
    section{
        display: flex;
        justify-content: center; 
        padding: 100px 0 ;  
    }
    figure{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    figcaption{
        font-size: 60px;
        margin-left: -20px;
    }
    .bad {
        color: #DFA341;
    }
    .good {
        color: #50ABBC;
    }
    .normal {
        color: #58BE4E;
    }

</style>