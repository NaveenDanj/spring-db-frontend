<template>

    <div>

        <WelcomeBlock />
        <ServerDetailBlock />
        <ServerBusyGraph />

    </div>

</template>


<script>
import WelcomeBlock from '../../components/Dashboard/WelcomeBlock.vue'
import ServerDetailBlock from '../../components/Dashboard/ServerDetailBlock.vue'
import ServerBusyGraph from '../../components/Dashboard/ServerBusyGraph.vue'


export default {
    components : {
    WelcomeBlock,
    ServerDetailBlock,
    ServerBusyGraph
}
}
</script>

<style scoped>

</style>