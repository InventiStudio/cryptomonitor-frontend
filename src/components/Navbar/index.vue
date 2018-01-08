<template lang="pug">
  header.navbar.container(:class="{ 'navbar--hidden': isNavbarHidden, 'navbar--filled': isNavbarFilled }")
    .row.align-items-center.justify-content-between
      .col-auto
        router-link.d-block(:to="{ name: 'Monitor' }")
          img(src="~assets/cryptomonitor__name.svg", alt="")
      .col-auto
        button.navbar__nav-button(
          :class="{ 'navbar__nav-button--active': isNavOpen }",
          @click="toggleNav()",
        )
          span Toggle nav
        nav.navbar__nav(:class="{ 'navbar__nav--active a-fade-in': isNavOpen }")
          h1.d-none TODO: Seo
          ul.navbar__links.list-reset
            router-link.navbar__link(
              :to="{ name: 'Monitor' }",
              :exact="true",
              active-class="navbar__link--active",
            ) Monitor
            router-link.navbar__cta(
              :to="{ name: 'Monitor' }",
              :exact="true",
              active-class="navbar__cta--active",
            )
              span Sign up
            button.o-btn(type="button", @click="logout")
              span.c-white Logout
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        isNavOpen: false,
        isNavbarHidden: false,
        isNavbarFilled: false,
        scrollPosition: 0,
      }
    },
    methods: {
      ...mapActions({
        logout: 'auth/logout',
      }),
      getScrollPosition() {
        return window.scrollY || document.documentElement.scrollTop
      },
      toggleNav() {
        this.isNavOpen = !this.isNavOpen
      },
      toggleNavbarVisibility(scrollPosition) {
        if (scrollPosition > this.scrollPosition && scrollPosition > 70 && !this.isNavOpen) {
          this.isNavbarHidden = true
          this.scrollPosition = scrollPosition
        } else {
          this.isNavbarHidden = false
          this.scrollPosition = scrollPosition
        }
      },
      toggleNavbarTransparency(scrollPosition) {
        if (scrollPosition > 80) this.isNavbarFilled = true
        else this.isNavbarFilled = false
      },
      handleNavbarOnScroll() {
        const scrollPosition = this.getScrollPosition()
        this.toggleNavbarVisibility(scrollPosition)
        this.toggleNavbarTransparency(scrollPosition)
      },
    },
    watch: {
      '$route.path': function $routePath() {
        this.isNavOpen = false
      },
    },
    mounted() {
      window.addEventListener('scroll', this.handleNavbarOnScroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleNavbarOnScroll)
    },
  }
</script>

<style src="./styles.sass" lang="sass" scoped></style>
