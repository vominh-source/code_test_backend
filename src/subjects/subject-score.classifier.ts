import { ScoreLevel } from './enums/score-level.enum';

export class SubjectScoreClassifier {
  static classify(score: number | null | undefined): ScoreLevel | null {
    if (score == null) return null;
    if (score >= 8) return ScoreLevel.EXCELLENT;
    if (score >= 6) return ScoreLevel.GOOD;
    if (score >= 4) return ScoreLevel.AVERAGE;
    return ScoreLevel.WEAK;
  }
}
