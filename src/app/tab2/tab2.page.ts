import { Component } from "@angular/core";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  public slideOpts = {
    initialSlide: 1,
    speed: 500,
    // centeredSlides: true,
    // slidesPerView: 1,
    // spaceBetween: 10,
    // autoHeight: true,
    // preventInteractionOnTransition: true,
    // longSwipes: false,
    pagination: {
      type: "progressbar",
      el: ".bar"
    }
  };
  constructor() {}
}
