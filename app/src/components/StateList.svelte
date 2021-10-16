<script>
    export let newestStates = [];
    const STATES =  ["DO", "TDS", "ORP", "PH", "Turbidity"];
</script>

<section>
    <ul>
        {#each newestStates?.filter((_,i) => i > 1) as state, i  }
        <li>
            <figure>
                <div>
                    <img src="/asset/water.png" alt="water">
                    <span>{state}</span>
                </div>
                <figcaption>{STATES[i]}</figcaption>
            </figure>   
        </li>  
        {/each}
    </ul>
</section>

<style>
    ul {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
    }
    li {
        width: 140px;
        height: 180px;
    }
    li img {
        width: 100%;
        height: 100%;
    }
    figure div {
        position: relative;
    }
    figure div span {
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 25px;
    }
    figcaption{
        font-size: 25px;
    }
</style>