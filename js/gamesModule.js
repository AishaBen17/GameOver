import { Details } from "./detailsModule.js";
import { Ui } from "./uiModule.js";

export class Games {
   constructor() {
      this.getGames("mmorpg");

      document.querySelectorAll(".bar a").forEach((link) => {
         link.addEventListener("click", (e) => {
            document.querySelector(".bar .active").classList.remove("active");
            e.target.classList.add("active");
            this.getGames(e.target.dataset.category);
         });
      });

      this.ui = new Ui();
   }

   async getGames(category) {
      const loading = document.querySelector(".loading");
      loading.classList.replace('d-none', 'd-block');
      const options = {
         method: "GET",
         headers: {
            "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            Accept: "application/json",
            "Content-Type": "application/json",
         },
      };

      const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
      const response = await api.json();

      this.ui.displayCategoryGames(response);
      this.startEvent();
      loading.classList.replace('d-block', 'd-none');
   }

   startEvent() {
      document.querySelectorAll(".card").forEach((item) => {
         item.addEventListener("click", () => {
            const id = item.dataset.id;
            this.showDetails(id);
         });
      });
   }

   showDetails(idGame) {
      const details = new Details(idGame);
      document.querySelector(".content").classList.add("d-none");
      document.querySelector(".gameDetails").classList.remove("d-none");
   }
}
