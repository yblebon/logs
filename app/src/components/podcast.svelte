<script>
  import { onMount } from "svelte";
  import { base } from "$app/paths";
  export let podcast;
  const filebaseBase = "https://ipfs.filebase.io/ipfs";
  console.log(podcast);

  let status = "stop";
  let podcastInstance;

  function createInstance() {
    podcastInstance = new Howl({
      src: [podcast.src],
      html5: true,
      volume: 0.9,
      format: ["m4a"],
      onload: function () {
        console.log("loading podcast ...");
      },

      onplay: function (id) {
        console.log("playing podcast ...");
        status = "playing";
      },

      onstop: function (id) {
        console.log("stopping podcast ...");
        status = "stop";
      },
      onend: function () {
        console.log("podcast ended");
        status = "stop";
        Howler.unload();
      },
      onplayerror: function () {
        console.log("error playing podcast");
        status = "stop";
        Howler.unload();
      },
      onloaderror: function () {
        console.log("error loading podcast");
        status = "stop";
        Howler.unload();
      },
    });
  }

  function playPodcast() {
    if (podcastInstance == undefined) {
      createInstance();
    }

    if (status == "playing") {
      podcastInstance.stop();
    } else {
      podcastInstance.play();
    }
  }
</script>

<div class="card mx-auto border-warning mt-4" style="max-width: 540px;">
  <div class="card-header text-bg-warning">
    <span class="me-2 badge text-lowercase text-wrap float-end"
      >{podcast.title}</span
    >
  </div>

  <figure>
    <blockquote class="blockquote ps-2 pt-2">
      <h6>{podcast.text}</h6>
    </blockquote>
    {#if podcast.hasOwnProperty("source")}
      <figcaption class="blockquote-footer ps-2">
        <cite class="text-capitalize" title="Source Title"
          >{podcast.source}</cite
        >
      </figcaption>
    {/if}
  </figure>

  {#if podcast.image !== undefined}
    <img src={podcast.image} class="card-img-top" />
  {/if}

  <div class="card-body bg-light">
    {#if podcast.hasOwnProperty("youtube")}
      <iframe
        id="ytplayer"
        type="text/html"
        width="auto"
        height="300"
        src="{podcast.youtube}?autoplay=1&origin=http://example.com"
        frameborder="0"
      >
      </iframe>
    {/if}

    {#if podcast.hasOwnProperty("code")}
      <script src={podcast.code}></script>
    {/if}

    <p class="card-text">
      {#if podcast.upload_date !== undefined}
        <span class="me-2 badge text-bg-secondary">{podcast.upload_date}</span>
      {/if}

      <a
        href="{base}/podcasts/{podcast.uid}"
        class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
        >link</a
      >

      <button type="button" on:click={playPodcast} class="btn float-end">
        {#if status == "stop"}
          <span>
            <i class="gg-play-button-o"></i>
          </span>
        {:else if status == "playing"}
          <span>
            <i class="gg-play-stop-o"></i>
          </span>
        {/if}
      </button>
    </p>
  </div>
</div>
