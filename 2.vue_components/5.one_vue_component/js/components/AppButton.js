export default {
  template: `<button class="px-4 py-2 bg-blue-500 text-white rounded {{ processing ? 'opacity-50 cursor-not-allowed' : '' }}">{{ slot }}</button>`,
  mounted() {
    // alert("App Button Mounted");
    console.log("App Button Mounted");
  },
  data() {
    return {
      processing: true,
    };
  },
};