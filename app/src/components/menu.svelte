<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logs</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/">
              <button id="home" type="button" on:click={changeContent}  class="btn text-uppercase fw-bolder text-black">Home</button>
           </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/x-posts">
              <button id="x-posts" type="button" on:click={changeContent}  class="btn text-uppercase fw-bolder text-black">X-Posts</button>
           </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/videos">
              <button id="videos" type="button" on:click={changeContent}  class="btn text-uppercase fw-bolder text-black">Videos</button>
           </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/podcasts">
              <button id="podcasts" type="button" on:click={changeContent}  class="btn text-uppercase fw-bolder text-black">Podcasts</button>
           </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/articles">
              <button id="podcasts" type="button" on:click={changeContent}  class="btn text-uppercase fw-bolder text-black">Articles</button>
           </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>