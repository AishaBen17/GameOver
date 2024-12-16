export class Ui {
  displayCategoryGames(categoryGames) {

    let cardContainer = '';
    for (let i = 0; i < categoryGames.length; i++) {
      cardContainer += `
<div class="col gy-4">
  <div class="card h-100 layer bg-transparent border-1 border-black" data-id=${categoryGames[i].id}>
    <div class="p-3 h-100">
      <img
        src="${categoryGames[i].thumbnail}"
        alt="Image of ${categoryGames[i].title}"
        class="card-img-top w-100" />
      <div class="card-body px-0 pb-0">
        <div
          class="card-title d-flex justify-content-between align-items-center mb-1">
          <h5 class="fw-bolder m-0">${categoryGames[i].title}</h5>
          <div class="rounded-2 bg-primary px-2 py-1">Free</div>
        </div>
        <div class="d-flex align-items-center justify-content-center text-center" style="min-height: 60px;">
          <p class="card-text fs-6 fw-bolder text-secondary m-0">
            ${getFirstSentence(categoryGames[i].short_description)}
          </p>
        </div>
      </div>
    </div>
    <div
      class="card-footer border-black bg-transparent d-flex justify-content-between align-items-between">
      <div class="btn bg-body-secondary fw-bolder px-2 py-0">${categoryGames[i].genre}</div>
      <div class="btn bg-body-secondary fw-bolder px-2 py-0">${categoryGames[i].platform}</div>
    </div>
  </div>
</div>`;
    } document.getElementById("cardContainer").innerHTML = cardContainer;
  }

  displayGameDetails(game) {
    let detailsGame = `
      <div class="col-md-4">
        <img
          src="${game.thumbnail}"
          class="w-100 mb-3 rounded-3" />
      </div>
      <div class="col-md-8">
      <span class="fw-bolder fs-2 text-warning">Title:</span>
        <span  class="fw-bolder fs-2 ">${game.title}</span>
        <div>
          <span class="fw-bolder">Category:</span>
          <span class="bg-warning rounded-2 px-2 text-black small fw-bold"
            >${game.genre}</span
          >
        </div>
        <div class="my-2">
          <span class="fw-bolder">Platform:</span>
          <span class="bg-warning rounded-2 px-2 text-black small fw-bold"
            >${game.platform}</span
          >
        </div>
        <div class="mb-3">
          <span class="fw-bolder">Status:</span>
          <span class="bg-warning rounded-2 px-2 text-black small fw-bold"
            >${game.status}</span
          >
        </div>
        <div>
          <p class="small textDescription">
            ${game.description}
          </p>
        </div>
        <div class="mt-3">
          <a href="${game.game_url}" target="_blank" rel="noopener noreferrer">
            <button class="btn btn-outline-warning text-white">
              Show Game
            </button>
          </a>
        </div>
      </div>
      `;
    document.getElementById("detailsContent").innerHTML = detailsGame;


  }
}
function getFirstSentence(text) {
  const match = text.match(/.*?[.!?,;:]/);
  return match ? match[0] : text;
}