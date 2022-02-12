<template>
  <div>
    <TitleSection />
    <DescriptionSection2
      :title="c.descriptionSection.title"
      :description="c.descriptionSection.text"
      side="right"
    />
   
    <DescriptionSection2
      :title="c.program.title"
      :program="true"
      :programTitle="c.program.title"
      :programList="c.program.list"
      side="left"
   
    />
    <DescriptionSection2
      :title="c.bodyZone.title"
      :program="true"
      :programTitle="c.bodyZone.title"
      :programList="c.bodyZone.list"
      side="right"
  
    />
    <DescriptionSection2
      :title="c.beautyZone.title"
      :program="true"
      :programTitle="c.beautyZone.title"
      :programList="c.beautyZone.list"
      side="left"
    
    />
    <DescriptionSection2
      :title="c.Food.title"
      :description="c.Food.text"
      side="right"
    />
    <DescriptionSection2
      :title="c.Equipment.title"
      :program="true"
      :programTitle="c.Equipment.title"
      :programList="c.Equipment.list"
      side="left"
  
    />
    <Contact
      :title="c.contact.title"
      :list="c.contact.list"
      :mail="c.contact.mail"
      :mail-title="c.contact.mailTitle"
      :text1="c.contact.text1"
      :text2="c.contact.text2"
    /> 
  </div>
</template>

<script>
import c from "../content/text-content.json";
import TitleSection from "../components/TitleSection.vue";
export default {
  components: { TitleSection },
  name: "IndexPage",
  data() {
    return {
      c,
    };
  },
};
</script>
<style lang="scss" scoped>
body {
  margin: 0;
}
</style>
