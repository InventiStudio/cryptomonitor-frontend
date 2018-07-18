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
            router-link.navbar__link.fs-15(
              v-if="isLoggedIn",
              :to="{ name: 'Monitor' }",
              :exact="true",
              active-class="navbar__link--active",
            ) Monitor
            router-link.navbar__link.fs-15(
              v-if="!isLoggedIn",
              :to="{ name: 'SignIn' }",
              :exact="true",
              active-class="navbar__link--active",
            ) Sign in
            router-link.navbar__link.fs-15.ml-md-24(
              v-if="isLoggedIn",
              :to="{ name: 'Settings' }",
              :exact="true",
              active-class="navbar__link--active",
              ) Settings
            router-link.o-btn.o-btn--violet.ml-md-24(
              v-if="!isLoggedIn",
              :to="{ name: 'SignUp' }",
              :exact="true",
              active-class="navbar__cta--active",
            )
              span.fs-15.c-white Sign up
            button.ml-md-24(v-if="isLoggedIn", type="button", @click="logout()")
              span.fs-15.c-white Logout
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'Navbar',
    data() {
      return {
        isNavOpen: false,
        isNavbarHidden: false,
        isNavbarFilled: false,
        scrollPosition: 0,
      }
    },
    computed: {
      ...mapGetters({
        isLoggedIn: 'auth/isLoggedIn',
      }),
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
