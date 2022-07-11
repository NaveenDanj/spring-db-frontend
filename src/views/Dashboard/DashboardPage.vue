<template>

    <div>

        <WelcomeBlock />
        <ServerDetailBlock />

    </div>

</template>


<script>
import WelcomeBlock from '../../components/Dashboard/WelcomeBlock.vue'
import ServerDetailBlock from '../../components/Dashboard/ServerDetailBlock.vue'


export default {
    components : {
    WelcomeBlock,
    ServerDetailBlock
}
}
</script>

<style scoped>

</style>