<script>
    import {getCurrentTime, onInterval} from '../util';

    let currentTime = getCurrentTime();
    onInterval(() => {
        currentTime = getCurrentTime();
    }, 1000)
</script>

<time>{currentTime}</time>

<style>
    time {
        font-size: 25px;
    }
</style>

