<script setup>
  import IconItem from './IconItem.vue';
  import IconDie1 from './icons/IconDie1.vue';
  import IconDie2 from './icons/IconDie2.vue';
  import IconDie3 from './icons/IconDie3.vue';
  import IconDie4 from './icons/IconDie4.vue';
  import IconDie5 from './icons/IconDie5.vue';
  import IconDie6 from './icons/IconDie6.vue';
</script>

<template>

  <IconItem>
    <template #icon>
          <IconDie1 />
        </template>
  </IconItem>

  <IconItem>
    <template #icon>
        <IconDie2 />
      </template>
  </IconItem>

  <IconItem>
    <template #icon>
        <IconDie3 />
      </template>
  </IconItem>  

  <IconItem>
    <template #icon>
        <IconDie4 />
      </template>
  </IconItem>  

  <IconItem>
    <template #icon>
        <IconDie5 />
      </template>
  </IconItem>  

  <IconItem>
    <template #icon>
        <IconDie6 />
      </template>
  </IconItem>

</template>