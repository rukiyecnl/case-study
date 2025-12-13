
<template>
  <div class="min-h-screen flex flex-col">
    <LayoutHeader />

    <p class="text-red-600">layout</p>
    <main class="flex-1">
      <slot />
    </main>

    <LayoutFooter />

  </div>
</template>
