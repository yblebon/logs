<script>
export let text="";
export let url="";
let href="https://twitter.com/intent/tweet?";
href = href + "&text=" + text;
href = href + "&url=" + url;

</script>

<a class="twitter-share-button"
  href={href}
  data-size="large">
X 
</a>