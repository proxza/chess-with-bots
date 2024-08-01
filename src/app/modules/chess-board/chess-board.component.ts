import { Component } from "@angular/core";
import { ChessBoard } from "../../chess-logic/chess-board";
import { Color, Coords, FENChar, pieceImagePaths } from "../../chess-logic/models";
import { CommonModule, NgClass, NgFor } from "@angular/common";
import { SelectedSquare } from "./models";

@Component({
  selector: "app-chess-board",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./chess-board.component.html",
  styleUrl: "./chess-board.component.css",
})
export class ChessBoardComponent {
  public pieceImagePaths = pieceImagePaths;

  private chessBoard = new ChessBoard();
  public chessBoardView: (FENChar | null)[][] = this.chessBoard.chessBoardView;
  public get playerColor(): Color {
    return this.chessBoard.playerColor;
  }

  private selectedSquare: SelectedSquare = { piece: null };
  private pieceSafeSquares: Coords[] = [];

  public isSquareDark(x: number, y: number): boolean {
    return ChessBoard.isSquareDark(x, y);
  }
}
