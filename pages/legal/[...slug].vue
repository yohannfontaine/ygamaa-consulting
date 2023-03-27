<template>
  <NuxtLayout>
    <!-- Navbar section -->
    <HeaderSection />
    <!-- Markdown-->
    <ContentDoc class="content" />
    <!-- Footer section -->
    <FooterSection />
  </NuxtLayout>
</template>

<style lang="scss">
.content {
  margin: 100px auto 0px auto;

  h1 {
    text-align: center;
    margin: 20px;
  }

  h2 {
    font-size: 2em;
  }

  max-width: 800px;
  width: 90%;
}
</style>