<template>

    <div>

        <WelcomeBlock />
        <ServerDetailBlock />
        <ServerBusyGraph />
        <ServerUserBlock />

    </div>

</template>


<script>
import WelcomeBlock from '../../components/Dashboard/WelcomeBlock.vue'
import ServerDetailBlock from '../../components/Dashboard/ServerDetailBlock.vue'
import ServerBusyGraph from '../../components/Dashboard/ServerBusyGraph.vue'
import ServerUserBlock from '../../components/Dashboard/ServerUserBlock.vue'


export default {
    components : {
    WelcomeBlock,
    ServerDetailBlock,
    ServerBusyGraph,
    ServerUserBlock
}
}
</script>

<style scoped>

</style>