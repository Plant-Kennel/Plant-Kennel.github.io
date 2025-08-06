<script setup>
import WelcomeItem from './WelcomeItem.vue'
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
  <WelcomeItem>
    <template #icon>
      <IconDie1 />
    </template>
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <IconDie2 />
    </template>
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <IconDie3 />
    </template>
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <IconDie4 />
    </template>
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <IconDie5 />
    </template>
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <IconDie6 />
    </template>
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <IconCloudUpload />
    </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
  </WelcomeItem>
</template>