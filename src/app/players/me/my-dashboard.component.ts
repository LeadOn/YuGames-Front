import { formatDate } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  faCalendarAlt,
  faArrowAltCircleLeft,
} from "@fortawesome/free-regular-svg-icons";
import { PlatformStats } from "src/app/classes/PlatformStats";
import { YuFootPlayerService } from "src/app/services/yufoot-player.service";

@Component({
  selector: "app-my-dashboard",
  templateUrl: "./my-dashboard.component.html",
  styleUrls: ["./my-dashboard.component.scss"],
})
export class MyDashboardComponent implements OnInit {
  playerId: any;
  loading = true;
  player: any = null;
  calendarIcon = faCalendarAlt;
  date: string = "";
  backIcon = faArrowAltCircleLeft;
  stats: PlatformStats[] = [];

  constructor(private playerService: YuFootPlayerService) {}

  ngOnInit(): void {
    this.loading = true;
    this.playerService.getCurrent().subscribe((data) => {
      this.player = data;
      this.playerService.getStats(data.id).subscribe(
        (data2) => {
          this.stats = data2;
          this.loading = false;
        },
        (err) => {
          alert("Erreur lors de la récupération des statistiques !");
          console.error(err);
        }
      );
    });
  }
}