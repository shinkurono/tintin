<script>
export default {
  mounted: function () {
    localStorage.setItem("language", "en");
    window.location.replace("/story");
  },
};
</script>
