<template>
  <div id="home">
    <HeaderDiv></HeaderDiv>
    <router-view/>
    <FooterDiv></FooterDiv>
  </div>
</template>

<script>
import HeaderDiv from './Header'
import FooterDiv from './Footer'

export default {
  name: 'Home',
  components: {
    HeaderDiv,
    FooterDiv
  }
}
</script>
