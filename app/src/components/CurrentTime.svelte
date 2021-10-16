<script>
    import {getCurrentTime, onInterval} from '../util';

    let currentTime = getCurrentTime();
    // set current time per 1s
    onInterval(() => {
        currentTime = getCurrentTime();
    }, 1000)
</script>

<time><pre>

    {currentTime}
</pre>
</time>

<style>
    time {
        
        font-size: 25px;
        letter-spacing: 1.5px;
    }
</style>

