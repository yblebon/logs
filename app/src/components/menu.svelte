<script>
  import { base } from "$app/paths";

  let selected = "home";

  function changeContent() {
    document
      .getElementById(selected)
      .classList.remove("text-decoration-underline");
    selected = this.id;

    document
      .getElementById(selected)
      .classList.add("text-decoration-underline");
  }
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand fs-2" href="#">
      <strong> Log </strong>

      <small class="text-body-warning"> Y.B </small>
      <small class="text-body-danger"> Lebon</small>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="{base}/">
            <span
              id="home"
              on:click={changeContent}
              class="fw-bolder text-decoration-underline text-black"
              >Home
            </span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{base}/podcasts">
            <span
              id="podcasts"
              on:click={changeContent}
              class="fw-bolder text-black"
              >Cards
            </span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="{base}/dots">
            <span
              id="dots"
              on:click={changeContent}
              class="fw-bolder text-black"
              >Dots
            </span>
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="{base}/sources">
            <span
              id="sources"
              on:click={changeContent}
              class="fw-bolder text-black"
              >Sources
            </span>
          </a>
        </li>
        <li class="nav-item vr">
          <a
            class="ms-3 fw-bolder nav-link"
            href="{base}/contact"
            tabindex="-1"
            aria-disabled="true">Contact</a
          >
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="border-bottom border-2 border-black"></div>
