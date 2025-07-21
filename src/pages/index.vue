<template>
  <div id="resume">
    <FullLoading />
    <ProfileSection/>
    <ContactUsSection/>
    <InformationSection/>
    <TechStackSection/>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  components: {
    FullLoading: () => import("@/components/FullLoading.vue"),
    ProfileSection: () => import("@/components/ProfileSection.vue"),
    InformationSection: () => import("@/components/InformationSection.vue"),
    TechStackSection: () => import("@/components/TechStackSection.vue"),
    ContactUsSection: () => import("@/components/ContactUsSection.vue"),
  },
};
</script>
