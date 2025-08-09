<script setup>
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import IconCloudUpload from './icons/IconCloudUpload.vue'
import IconDie1 from './icons/IconDie1.vue'
import IconDie2 from './icons/IconDie2.vue'
import IconDie3 from './icons/IconDie3.vue'
import IconDie4 from './icons/IconDie4.vue'
import IconDie5 from './icons/IconDie5.vue'
import IconDie6 from './icons/IconDie6.vue'

</script>

<template>
    <div>
    <template #icon>
      <IconDie1 />
    </template>
    <template #icon>
      <IconDie2 />
    </template>
    <template #icon>
      <IconDie3 />
    </template>
    <template #icon>
      <IconDie4 />
    </template>

    <template #icon>
      <IconDie5 />
    </template>

    <template #icon>
      <IconDie6 />
    </template>

    <template #icon>
      <IconCloudUpload />
    </template>

    <template #icon>
      <DocumentationIcon />
    </template>

    <template #icon>
      <ToolingIcon />
    </template>


    <template #icon>
      <EcosystemIcon />
    </template>

    <template #icon>
      <CommunityIcon />
    </template>

    <template #icon>
      <SupportIcon />
    </template>
</div>
</template>