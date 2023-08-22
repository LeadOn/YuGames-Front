import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GamePlayed } from "../classes/GamePlayed";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class YuGamesGameService {
  constructor(private client: HttpClient) {}

  getLast(limit: number): Observable<GamePlayed[]> {
    return this.client.get<GamePlayed[]>(
      environment.yuFootApiUrl + "/game/last/" + limit
    );
  }

  getLastByPlayer(playerId: number, limit: number): Observable<GamePlayed[]> {
    return this.client.get<GamePlayed[]>(
      environment.yuFootApiUrl + "/game/last/" + limit + "/player/" + playerId
    );
  }

  getById(gameId: number): Observable<GamePlayed> {
    return this.client.get<GamePlayed>(
      environment.yuFootApiUrl + "/game/" + gameId
    );
  }

  create(body: any): Observable<GamePlayed> {
    return this.client.post<GamePlayed>(
      environment.yuFootApiUrl + "/game",
      body
    );
  }
}