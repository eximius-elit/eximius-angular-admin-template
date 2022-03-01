import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { ROUTES } from './horizontal-routes.config';
import { SidebarService } from "./../sidebar/sidebar.service";



declare var $: any;


@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss']
})
export class HorizontalMenuComponent implements OnInit {

  
  public menuItems: any[];
  public isCollapsed = false;


  constructor( public sidebarservice: SidebarService,private router: Router) {

    router.events.subscribe( (event: Event) => {

        if (event instanceof NavigationStart) {
            // Show loading indicator
        }

        if (event instanceof NavigationEnd && $(window).width() < 1025 && ( document.readyState == 'complete' || false ) ) {

            this.toggleSidebar();
            // Hide loading indicator
           
        }

        if (event instanceof NavigationError) {
            // Hide loading indicator

            // Present error to user
            console.log(event.error);
        }
    });

}

     
toggleSidebar() {
  this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());

}

getSideBarState() {
  return this.sidebarservice.getSidebarState();
}

  ngOnInit() {

      // metismenu
    $(function () {
      $('#menu').metisMenu();
      $(".mobile-toggle-menu").on("click", function () {
        $(".wrapper").addClass("toggled");
      });
      // toggle menu button
      $(".toggle-icon").click(function () {
        if ($(".wrapper").hasClass("toggled")) {
          // unpin sidebar when hovered
          $(".wrapper").removeClass("toggled");
          $(".sidebar-wrapper").unbind("hover");
        } else {
          $(".wrapper").addClass("toggled");
          $(".sidebar-wrapper").hover(function () {
            $(".wrapper").addClass("sidebar-hovered");
          }, function () {
            $(".wrapper").removeClass("sidebar-hovered");
          })
        }
      });
    });
    this.menuItems = ROUTES.filter(menuItem => menuItem);

  }

}
